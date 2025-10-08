
import '../../../utils/logIf.js'; // This is a special way to import the module, it will work in both Node.js and the browser. 

// Globals to communicate with other js files
window.ghostCommittees = {}
window.contracts = []
window.roles = []
window.sideBarButtonNameMap = {
    'processToSheets': "Google Sheets",
    'newApplications': "New Applications",
    'newScholarshipApplications': "New Scholarship Applications",
    'contracts-received': "Contracts Received",
}

const imageFields = ['digitalImage1', 'digitalImage2', 'digitalImage3', 'artistInStudioImage', 'brochureImage']
document.addEventListener('DOMContentLoaded', async function () {
    let configDocument = {}
    // Get contract details.
    await CRUD.read('app-settings', 'contractDetails').then(data => {
        configDocument.contractDetails = data.data;
    })
    document.querySelector('#my-signature-form #contractDetails').insertAdjacentHTML('afterbegin', configDocument.contractDetails)
    document.querySelector('body').style.display = 'block'


    roles = await CRUD.readAll('committee-roles').then(function (roles) {
        // return roles.sort(function (a, b) {
        //     return Number(a.fbId) - Number(b.fbId);
        // });
        return roles.reduce((acc, next) => {
            acc[next.fbId] = next
            return acc
        }, {})
    });
    CRUD.listen('committee-roles', null, function (roles) {
        console.log("listener on committee roles", { roles })
        // window.roles = roles.sort(function (a, b) {
        //     return Number(a.fbId) - Number(b.fbId);
        // })
        window.roles = roles.reduce((acc, next) => {
            acc[next.fbId] = next
            return acc
        }, {})
    });

    logIf.client && console.log("My Contract Page Loaded")

    // set listeners on forms
    const listeners = {
        'my-signature-form': handleSignatureForm,
        'artist-details-form': handleArtistDetailsForm,
        'digital-images-form': handleDigitalImagesForm,
        'studio-sharing-form': handleStudioSharingForm,
        'volunteer-responsibility-form': handleVolunteerResponsibilityForm,
        'artistic-demonstration-form': handleArtisticDemonstrationForm,
    }
    Object.keys(listeners).forEach(key => {
        const form = document.querySelector(`form#${key}`)
        if (form) {
            form.addEventListener('submit', listeners[key])
        }
    })




    await Promise.all([
        // Add the Committee html (This is stored in firebase and is an editable html element)
        CRUD.read('app-settings', 'html-committee-positions')
            .then(data => {
                document.querySelector('#committee-positions-container').innerHTML = data.data;
            }),
        // Get the committee data
        CRUD.read('app-settings', 'committees')
            .then(data => {
                ghostCommittees = data.data;
            }),
    ])


    CRUD.readAll('ghost-contracts').then((existingContracts) => {
        contracts = existingContracts
        const myContract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid)

        // Set up Signature
        setSignatureForm(myContract);

        // set up artist details form
        setArtistDetailsForm(myContract);

        // Set up volunteer responsibility form (Adds checkboxes to the form)
        setUpVolunteerResponsibilityForm(contracts);

        // set the Studio Sharing form
        setUpStudioSharingForm(myContract);

        // Set the digital images form
        setDigitalImagesForm(myContract);

        // Set Artistic demonstration
        setArtisticDemonstrationForm(myContract);

        // set Paypal 
        setPaypalButton(myContract);

        // Set editContract Editor
        setEditContractEditor(myContract);
        // 
        setVolunteerResponsibilityEditor(myContract);

        setOverrideEditor(contracts);

    })

    // Set the users assigned roles 
    // listen to other peoples roles
    CRUD.listen('ghost-contracts', null, (existingContracts) => {
        contracts = existingContracts;
        const myContract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid)

        updateVolunteerResponsibilityForm(contracts);
        // Check if contract is complete and enable paypal buttons
        updateMyContract(myContract)
    })
})




function handleSignatureForm(e) {
    e.preventDefault();
    const { values, form } = getFormValues('form#my-signature-form')

    CRUD.update('ghost-contracts', firebase.auth.currentUser.uid, { ...values }).then(() => {
        setLoading(form, false)
    })

}


function handleArtistDetailsForm(e) {
    e.preventDefault();
    const { values, form } = getFormValues('form#artist-details-form')
    // Get form
    CRUD.update('ghost-contracts', firebase.auth.currentUser.uid, {
        artistDetails: {
            ...values
        }
    }).then(() => {
        setLoading(form, false)
    })

}

async function saveContractImage(oldFile, reader){
    const userEmail = toTitleCase(firebase.auth.currentUser.displayName)
    // evaluate fileNameTemplate
    let uniqueFileName = oldFile.name
    if (uniqueFileName) {
        uniqueFileName = uniqueFileName.replace('{{userName}}', userEmail)
    }
    console.log({ uniqueFileName, oldFile })

    const newFile = new File([oldFile], uniqueFileName, { type: oldFile.type });
    const url = await CRUD.saveImage(newFile)
    return url
}

async function handleDigitalImagesForm(e) {
    e.preventDefault();

    const { values: invalidValues, form } = getFormValues('form#digital-images-form')
    console.log({ invalidValues })
    const values = Array.from(form.querySelectorAll('file-input-component'))
        .reduce((acc, curr) => {
            // get the file
            const oldFile = curr.querySelector('input[type=file]').files[0]

            if (!oldFile) return acc

            console.log({ oldFile })


            // Using a predictable naming schema prevents file overwrite issues in a flat image folder
            // Unfortunately you cannot rename files, but you can recreate files with a new name...
            // update the file name
            let uniqueFileName = curr.getAttribute('filename')
            // const userEmail = encodeURIComponent(firebase.auth.currentUser.email)
            const userEmail = toTitleCase(firebase.auth.currentUser.displayName)
            // evaluate fileNameTemplate
            if (uniqueFileName) {
                uniqueFileName = uniqueFileName.replace('{{userName}}', userEmail)
            }
            console.log({ uniqueFileName, oldFile })

            const newFile = new File([oldFile], uniqueFileName, { type: oldFile.type });

            acc[curr.getAttribute('fieldname')] = newFile

            return acc

        }, {})
    logIf.client || true && console.log({ values, form })

    // save images to storage
    // Get file url and save it to firebase by image element id.
    // Save to firestore
    imageFields.forEach(async (field) => {
        if (!values[field]) return
        try {

            // throw new Error("This is a test error")
            console.log("debug image save", { field, values })
          
            const url = await CRUD.saveImage(values[field])
            CRUD.update('ghost-contracts', firebase.auth.currentUser.uid, {
                images: {
                    [field]: url
                }
            }).then(() => {
                setLoading(form, false)
            })
        } catch (error) {
            console.log("Error saving image", { error, field })

            // Show error message to user by removing the image from the input and displaying an error message
            const component = form.querySelector(`file-input-component[fieldname="${field}"]`)
            component.querySelector('input[type=file]').value = ''

            // add hasError class to component
            component.querySelector('.file-input-component').classList.add('hasError')

            // Show error message
            const errorMessageEl = component.querySelector(`#${field}-error`)
            errorMessageEl.innerHTML = "There was an error saving image. Please try again. Other images were saved correctly. (Error was on the server). <br> <small>Try refreshing your browser and try saving it again.</small>"
            errorMessageEl.classList.add('error')

            // reset the submit button
            setLoading(form, false)

        }

    })


}

window.updateFileNameToTemplate = function (file) {
    let uniqueFileName = file.nameTemplate
    if (uniqueFileName) {
        uniqueFileName = uniqueFileName.replace('{{userName}}', toTitleCase(firebase.auth.currentUser.displayName))
    }
  
      // Create a new file with the new name
      return new File([file], uniqueFileName, { type: file.type });
}

// async function handleIndividualImageUpload(file) {
window.handleIndividualImageUpload = async function(file, component) {
    // Update the name of the file based on the user and the file name template
   
    component.querySelector('.saved-image-feedback').innerHTML = "Uploading image..."
    console.log("handleIndividualImageUpload", { file })

  
    // Save the image to storage
    const url = await CRUD.saveImage(file)
    return url
}

window.saveIndividualImageToContract = async function(url, fieldName, updatedFileName){
    // Save to firestore
    CRUD.update('ghost-contracts', firebase.auth.currentUser.uid, {
        images: {
            [fieldName]: url
        }
    }).then(() => {

        // show saved image icon
        const form = document.querySelector('form#digital-images-form')
        const component = form.querySelector(`file-input-component[fieldname="${fieldName}"]`)
        component.querySelector('.saved-image-feedback').innerHTML = "Saved"


       

        component.querySelector('.file-name').innerText = updatedFileName


    
        
        // setLoading(form, false)
    })
}




// This form is unique. It should return a single string which compiles a sentence based on the form values 
/*
"I have my own studio space within the GHOST tour boundaries.... 
I do not have room for additional artists. 
I am willing to show my art at another artist's studio space, even though I have my own studio. 
I don’t have my own art canopy so would need a covered space (ie, a garage or indoors) to set up"
*/
async function handleStudioSharingForm(e) {
    e.preventDefault();
    const form = document.querySelector('form#studio-sharing-form')

    // get user ID
    let contract;

    await new Promise((resolve, reject) => {
        firebase.auth.onAuthStateChanged(async (user) => {
            contract = await CRUD.read('ghost-contracts', user.uid)
            resolve()
        })
    })


    const StudioSharingPayload = {
        StudioSharingAnswer: "",
        StudioSharingInfo: contract && contract.StudioSharingInfo || {
            studioPreference: "",
            studioAvailability: "",
            artistsAccommodated: "",
            studioSharingPlans: "",
            willingnessToRelocate: "",
            canopyPreference: "",
            "canopy-studio": "",
            "canopy-no-studio": "",
            studioSigns: "",
            'studioSigns-2': "",
            "studioSharingPlans-no-studio": "",
            prefersToBeWith3OrMoreArtist: ""
        }
    }

    console.log("StudioSharingPayload", StudioSharingPayload)

    // Get first string (aka "studioPreference")
    const studioPreference = form.querySelector('input[name="studioPreference"]:checked')
    if (!studioPreference) return formAlert("Please select an option. Do you have a studio space or not?");
    StudioSharingPayload.StudioSharingAnswer = studioPreference.parentNode.innerText;
    StudioSharingPayload.StudioSharingInfo.studioPreference = studioPreference.value;

    const IHaveAStudio = StudioSharingPayload.StudioSharingAnswer.includes('I have my own studio space')
    // Get second string based on studioPreference 
    if (IHaveAStudio) {
        const studioAvailability = form.querySelector('input[name="studioAvailability"]:checked')
        if (!studioAvailability) return formAlert("Please select an option. Can you share your studio space?");
        let studioAvailabilityAnswer = studioAvailability.parentNode.innerText;

        // append answer to string result
        StudioSharingPayload.StudioSharingAnswer += ' \n\t' + studioAvailabilityAnswer;
        StudioSharingPayload.StudioSharingInfo.studioAvailability = studioAvailability.value;

        // Check for willingness to relocate
        if (studioAvailabilityAnswer.includes("I have my own studio but am willing to show my art at another artist's studio space")) {
            // find canopy preference 
            const canopyPreference = form.querySelector('input[name="canopy-studio"]:checked')
            if (!canopyPreference) return formAlert("Please select an option. Do you have a canopy?");
            if (canopyPreference) {
                // StudioSharingAnswer += ' \n\t\t' + canopyPreference.parentNode.innerText;
                StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + canopyPreference.parentNode.innerText;
                StudioSharingPayload.StudioSharingInfo['canopy-studio'] = canopyPreference.value;
            }
        }

        // Check for no room at studio
        if (studioAvailabilityAnswer.includes("I want to stay at my own studio but do not have room for additional artists")) {
            const studioSigns2 = form.querySelector('input[name="studioSigns-2"]')
            if (!studioSigns2.value) return formAlert("Please provide information on how many signs you have");
            StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + "I would like " + studioSigns2.value.trim() + " signs";
            StudioSharingPayload.StudioSharingInfo['studioSigns-2'] = studioSigns2.value;
        }




        // Check for type of answer  "I can share my studio space"
        const ICanShareMySpace = studioAvailabilityAnswer.includes('I can share my studio space')
        if (ICanShareMySpace) {
            // get how many artists can be accommodated
            const artistsAccommodated = form.querySelector('input[name="artistsAccommodated"]')
            if (!artistsAccommodated.value) return formAlert("Please provide information on how many artists can be accommodated");
            StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + artistsAccommodated.value.trim() + " artists can be accommodated";
            StudioSharingPayload.StudioSharingInfo.artistsAccommodated = artistsAccommodated.value;



            // Studio description
            const studioDescription = form.querySelector('textarea[name="studioDescription"]')
            if (!studioDescription.value) return formAlert("Please provide information about your studio space");
            StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + "Here is a description of my place: " + studioDescription.value.trim();
            StudioSharingPayload.StudioSharingInfo.studioDescription = studioDescription.value;

            // get plans to share studio space
            const studioSharingPlans = form.querySelector('textarea[name="studioSharingPlans"]')
            if (!studioSharingPlans.value) return formAlert("Please provide information on how you plan to share your studio space");
            // StudioSharingAnswer += ' \n\t\t' + studioSharingPlans.value.trim();
            StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + "I am planning to share my space with " + studioSharingPlans.value.trim();
            StudioSharingPayload.StudioSharingInfo.studioSharingPlans = studioSharingPlans.value;

            // Studio number of signs
            const studioSigns = form.querySelector('input[name="studioSigns"]')
            if (!studioSigns.value) return formAlert("Please provide information on how many signs you have");
            StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + "I would like " + studioSigns.value.trim() + " signs";
            StudioSharingPayload.StudioSharingInfo.studioSigns = studioSigns.value;
        }





    } else { // option 2 selected "I don't have a studio"
        // Get canopy info
        const canopyPreference = form.querySelector('input[name="canopy-no-studio"]:checked')
        if (!canopyPreference) return formAlert("Please select an option. Do you have a canopy?");
        // StudioSharingAnswer += ' \n\t' + canopyPreference.parentNode.innerText;
        StudioSharingPayload.StudioSharingAnswer += ' \n\t' + canopyPreference.parentNode.innerText;
        StudioSharingPayload.StudioSharingInfo['canopy-no-studio'] = canopyPreference.value

        // get plans to share studio space
        const studioSharingPlans = form.querySelector('textarea[name="studioSharingPlans-no-studio"]')
        StudioSharingPayload.StudioSharingAnswer += ' \n\t\t' + "I am planning to share my space with " + studioSharingPlans.value.trim();
        StudioSharingPayload.StudioSharingInfo["studioSharingPlans-no-studio"] = studioSharingPlans.value;

        const prefersToBeWith3OrMoreArtist = form.querySelector("input[type=checkbox]#prefersToBeWith3OrMoreArtist")
        if(prefersToBeWith3OrMoreArtist.checked){
            StudioSharingPayload.StudioSharingAnswer += " \n\t\t" + "I prefer to be placed at a studio with 3 or more artists"
        }
        StudioSharingPayload.StudioSharingInfo.prefersToBeWith3OrMoreArtist = prefersToBeWith3OrMoreArtist.checked
    }

    logIf.client && console.log({ StudioSharingPayload })





    // const {values} = getFormValues('form#studio-sharing-form')
    // logIf.client && console.log({values, form})

    // Save to firestore
    setLoading(form, true)
    CRUD.update('ghost-contracts', firebase.auth.currentUser.uid, StudioSharingPayload).then(() => {
        setLoading(form, false)
    })

    function formAlert(message) {
        logIf.client && console.log("Form Alert", message)
        alert(message)
    }

}


function handleVolunteerResponsibilityForm(e) {
    e.preventDefault();

    const { values, form } = getFormValues('form#volunteer-responsibility-form')
    logIf.client && console.log({ values, form })
    setLoading(form, false)
}

function handleArtisticDemonstrationForm(e) {
    e.preventDefault();

    const { values, form } = getFormValues('form#artistic-demonstration-form');

    logIf.client && console.log({ values, form })
    CRUD.update('ghost-contracts', firebase.auth.currentUser.uid, { ...values }).then(() => {
        setLoading(form, false)
    })


}


function handleCheckboxChange(e) {
    const { checked, name, value: roleId } = e.target
    const userId = firebase.auth.currentUser.uid
    const existingRoles = contracts.find(contract => contract.userId === userId)?.committeeRoleId || []

    // Set limit to 2 roles
    if (checked && existingRoles.length >= 3) {
        e.target.checked = false
        return alert("You can only select 3 roles")
    }

    logIf.client && console.log("make updates to firebase ", { checked, name, CRUD })
    CRUD.update('ghost-contracts', userId, { committeeRoleId: [...existingRoles, roleId] })
}

/**
 * This form doesn't have a submit button... It is a series of checkboxes that should be saved on change
 * 
 * This form requires getting all artists info
 */
function setUpVolunteerResponsibilityForm(contracts) {

    const filledRoles = Object.values(contracts).map(contract => contract.committeeRoleId).flat()
    logIf.client && console.log("setUpVolunteerResponsibilityForm", { contracts, filledRoles })


    // Set timeout is a work around b/c the form is not loaded when the document is ready
    setTimeout(() => {
        setTheCommittees()
        setTheRoles()
    }, 0)

    function setTheCommittees() {
        const form = document.querySelector('div#committee-positions')

        Object.values(ghostCommittees).forEach(datum => {
            // locate the correct committee by committee Key div title element and add the title 
            // console.log("settting committeee", { committee: datum })

            const committeeId = datum.id
            const committeeRoles = Object.values(roles).filter(r => r.committeeId === committeeId)

            // console.log("checking for committee roles for ", datum.committee, { committeeRoles })

            const committeeElement = form.querySelector(`.committee[data-committee-id="${datum.id}"]`)
            if (committeeElement) {
                if (committeeRoles.length > 0) {
                    const titleEl = committeeElement.querySelector('.committee-title')
                    titleEl.innerText = datum['committee-header-text']
                    titleEl.setAttribute('data-committee-title', datum.committee)
                } else {
                    // There must exist a committee with no one yet assigned to it

                    // if current user is not a contract editor, remove the committee
                    const activeUserRoleIds = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid).committeeRoleId || []
                    console.log({roles})
                    const userPrivileges = Object.values(roles).filter(role => activeUserRoleIds.includes(role.fbId)).map(role => role.privileges).flat()
                    if (userPrivileges.includes('editContract')) return
                    // remove the committee
                    committeeElement.remove()
                }
            }
        })

    }




    // This builds the role html, but doesn't put the assigned member in the role here
    function setTheRoles() {

        const myContract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid) || []
        const form = document.querySelector('div#committee-positions')
        const rolesEls = form.querySelectorAll('li.role')
        const myRoles = myContract.committeeRoleId || []
        rolesEls.forEach(role => {
            // find all the roles
            // Add html to each role
            const roleId = role.getAttribute('data-role-id')
            const thisRole = roles[roleId]
            const roleTitleEl = role.querySelector('.role-title')

            // console.log({ roleTitleEl, thisRole })
            if (thisRole.title) {
                roleTitleEl.innerText = thisRole.title
                // console.log("settings role title", { roleTitleEl, thisRole })
            }


            const input = createCheckbox(role)
            const responsibility = createResponsibility(role)
            const tasks = createRoleTasks(role)
            const offloadButton = createOffloadButton(role)
            const infoIcon = createInfoIcon(role)
            role.querySelector('.content .responsibility').appendChild(responsibility)
            role.querySelector('.content').insertAdjacentElement("afterbegin", input)
            if (tasks) responsibility.insertAdjacentElement("afterend", tasks)
            input.addEventListener('change', handleCheckboxChange)

            // console.log("bugfix ", { role, input, responsibility, tasks})

            // get my role set
            // myRoles and filledRoles are an array of ids (ints)

            // check if this role belongs to me
            const hasMyRoles = myRoles.includes(roleId)

            // logIf.client && console.log("Bugfix, multiple offload button ",{ roleId, myRoles, hasMyRoles, role, button })

            // check if this role is filled
            if (hasMyRoles) {
                role.querySelector('.content').insertAdjacentElement("beforeend", offloadButton)
                offloadButton.addEventListener('click', handleOffload)
            }



            // // If this role belongs to me, add an offload button
            // if(hasMyRoles){   
            //     role.insertAdjacentElement("beforeend", button)
            //     button.addEventListener('click', handleOffload)
            // } else {
            //     button.remove()
            // }
        })
    }

    function createRoleTasks(role) {
        const roleId = role.getAttribute('data-role-id')
        const thisRole = roles[roleId]
        const tasks = document.createElement('ul')
        tasks.classList.add('tasks', 'editor-control')
        thisRole.tasks && thisRole.tasks.forEach(task => {
            const li = document.createElement('li')
            li.innerText = task
            tasks.appendChild(li)
        })
        return tasks
    }

    function createInfoIcon(role) {
        const icon = document.createElement('i')
        icon.classList.add('fas', 'fa-info-circle', 'info-icon', 'editor-control')
        icon.setAttribute('data-bs-toggle', 'tooltip')
        icon.setAttribute('data-bs-placement', 'top')
        icon.setAttribute('title', roles[role.getAttribute('data-role-id')].responsibility)
        return icon
    }

    function createResponsibility(role) {
        const roleId = role.getAttribute('data-role-id')
        const thisRole = roles[roleId]
        // console.log({ thisRole })
        const responsibility = document.createElement('div')
        responsibility.classList.add('responsibility-description', 'editor-control')
        responsibility.innerText = thisRole.responsibility
        return responsibility
    }

    function createCheckbox(role) {
        const isRoleFilled = filledRoles.includes(role.getAttribute('data-role-id'))

        const roleId = role.getAttribute('data-role-id')
        const thisRole = roles[roleId]
        const label = document.createElement('label')
        label.classList.add('role-checkbox', 'editor-control')
        // span for username
        const userNameSpan = document.createElement('span')
        userNameSpan.classList.add('user-name', 'editor-control')
        label.appendChild(userNameSpan)
        const checkbox = document.createElement('input')
        label.appendChild(checkbox)
        checkbox.type = 'checkbox'
        checkbox.name = thisRole.title
        checkbox.value = roleId
        checkbox.checked = isRoleFilled ? true : false
        checkbox.disabled = isRoleFilled ? true : false
        return label
    }



}

function handleOffload(e) {

    if (!isBootStrapConfirmResponse(e)) return

    logIf.client && console.log("Offloading", e.target.closest('.role').getAttribute('data-role-id'))
    const roleId = e.target.closest('.role').getAttribute('data-role-id');
    const userId = firebase.auth.currentUser.uid;
    let committeeRoleIds = contracts.find(contract => contract.userId === userId)?.committeeRoleId || [];
    committeeRoleIds = committeeRoleIds.filter(id => id !== roleId);

    e.target.remove()

    CRUD.update('ghost-contracts', userId, { committeeRoleId: committeeRoleIds }).then(() => {
        contracts = contracts.map(contract =>
            contract.userId === userId ? { ...contract, committeeRoleId: committeeRoleIds } : contract
        );
        updateVolunteerResponsibilityForm(contracts);
    });
}
function createOffloadButton(role) {
    const button = document.createElement('button')
    button.innerText = "Offload"
    button.setAttribute("type", "button")

    // set Attributes for bootstrap confirmation
    button.setAttribute('data-toggle', 'confirmation')
    button.setAttribute('data-placement', 'left')
    button.setAttribute('data-title', 'Are you sure you want to offload this role?')
    button.setAttribute('data-btn-ok-label', 'Yes')
    button.setAttribute('data-btn-ok-class', 'btn-success')
    button.setAttribute('data-btn-cancel-label', 'No')
    button.setAttribute('data-btn-cancel-class', 'btn-danger')

    setTimeout(() => {
        // set up delete warning popup
        $(function () {
            $('[data-toggle="confirmation"]').confirmation()
        })

    }, 0)

    button.classList.add('offload-button', 'editor-control')
    return button
}


// Sets the assigned roles for the user
function updateVolunteerResponsibilityForm(contracts) {
    setTimeout(() => {

        const filledRoles = Object.values(contracts)
            .filter(c => {
                return c.artistDetails && (c.artistDetails.membershipPaid || c.artistDetails.committeePreAssignment)
            })
            .map(contract => contract.committeeRoleId).flat()


        console.log("updateVolunteerResponsibilityForm", { contracts, filledRoles })
        const form = document.querySelector('div#committee-positions')
        const roles = form.querySelectorAll('li.role')

        // check if current user has a selected role
        // const myContract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid)
        // const myRoles = myContract.committeeRoleId || []
        // myRoles.forEach(roleId => {
        //     // get the role label element
        //     const roleEl = document.querySelector(`li.role[data-role-id="${roleId}"]`)
        //     if (!roleEl) return
        //     // get the role
        //     const role = roles[roleId]

        //     const label = roleEl.querySelector('label')
        //     handleRole(roleId, label, role)
        // })

        // iterating over DOM elements
        roles.forEach(role => {
            const roleId = role.getAttribute('data-role-id')
            const thisRole = roles[roleId]
            const checkbox = role.querySelector('input[type="checkbox"]')
            if (!checkbox) {
                console.error("Checkbox not found", { role })
                return
            }
            const isRoleFilled = filledRoles.includes(roleId)
            checkbox.checked = isRoleFilled ? true : false
            checkbox.disabled = isRoleFilled ? true : false

            // mark the role icon with the user's name
            const label = role.querySelector('label')
            if (isRoleFilled) {

                handleRole(roleId, label)

            } else {
                label.querySelector('.user-name').innerText = ''
            }
        })

        // check if current user has a selected role
        const myContract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid)
        const myRoles = myContract.committeeRoleId || []
        const currentUserId = firebase.auth.currentUser.uid
        console.log("RENDERING MY ROLES ", { myRoles, currentUserId })
        myRoles.forEach(roleId => {
            // select the role for this user
            const role = document.querySelector(`li.role[data-role-id="${roleId}"]`)
            if (!role) return
            const label = role.querySelector('label')
            handleRole(roleId, label, currentUserId)
            const checkbox = role.querySelector('input[type="checkbox"]')
            checkbox.checked = true
            checkbox.disabled = true
        })

    }, 0)
}


function handleRole(roleId, label, userId = null) {
    const role = document.querySelector(`li.role[data-role-id="${roleId}"]`)


    // Set the user name next to the checkbox
    let committeeMemberContract;
    if (userId) {
        committeeMemberContract = contracts.find(contract => contract.userId === userId)
    } else {
        committeeMemberContract = contracts.find(contract => contract.committeeRoleId && contract.committeeRoleId.includes(roleId))
    }
    // console.log("handleRole", { roleId, label, committeeMemberContract, userId })
    const fullName = committeeMemberContract && committeeMemberContract.artistDetails && committeeMemberContract.artistDetails.firstName + ' ' + committeeMemberContract.artistDetails.lastName
    const spanLabel = label.querySelector('.user-name')
    spanLabel.innerText = fullName || "[UNKNOWN]"
    spanLabel.setAttribute('data-user-id', committeeMemberContract?.userId)


    // Get this users contract
    const contract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid)
    if (!contract) return;
    userId = userId || contract?.userId
    // get my roles fresh from the DB
    // get my role set
    // myRoles and filledRoles are an array of ids (ints)
    const myRoles = contract.committeeRoleId || []


    logIf.client && console.log("Updating offload buttons", { myRoles, roleId, "myRoles.includes(roleId)": myRoles.includes(roleId), contract })



    if (myRoles.includes(roleId)) {

        const button = createOffloadButton(role)
        // check role for existing button
        const existingButton = role.querySelector('.offload-button')
        logIf.client && console.log("existingButton", existingButton)
        if (!existingButton) {
            role.insertAdjacentElement("beforeend", button)
            button.addEventListener('click', handleOffload)
        }
    }

}

function setUpStudioSharingForm(contract) {
    logIf.client && console.log("setUpStudioSharingForm", { contracts })
    if (contract) {
        logIf.client && console.log("Setting up studio sharing form", { contract })
        const form = document.querySelector('form#studio-sharing-form')
        const studioSharingInfo = contract.StudioSharingInfo
        if (!studioSharingInfo) return;

        // set the inputs
        Object.entries(studioSharingInfo).forEach(([key, value]) => {

           
            const textInput = form.querySelector(`input[name="${key}"][value="${value}"]`)
            const checkboxInput = form.querySelector(`input[type=checkbox][name="${key}"]`)
            const artistsAccommodated = form.querySelector(`input[name="artistsAccommodated"`)
            const studioSigns = form.querySelector(`input[name="studioSigns"`)
            const studioSigns2 = form.querySelector(`input[name="studioSigns-2"`)
            const willingnessToRelocate = form.querySelector(`input[name="willingnessToRelocate"`)
            const textarea = form.querySelector(`textarea[name="${key}"]`)
            if (textInput) {
                if (textInput.type === 'text') {
                    textInput.value = value
                } else if (textInput.type === 'number') {
                    console.log("Setting number", { value })
                    textInput.value = Number(value)
                }
                textInput.checked = true // <-- for some reason this is important
                // trigger change event
                const event = new Event('change')
                textInput.dispatchEvent(event)

            }

            if(checkboxInput && value){
                checkboxInput.checked = true 

            }

            // if(checkboxInput && value){
            //     checkboxInput.checked = true
            // }
            
            if (textarea) {
                textarea.value = value
                const event = new Event('change')
                textarea.dispatchEvent(event)

            }
            if (artistsAccommodated && key === 'artistsAccommodated') {
                artistsAccommodated.value = Number(value)
                const event = new Event('change')
                artistsAccommodated.dispatchEvent(event)
            }
            if (studioSigns && key === 'studioSigns') {
                studioSigns.value = Number(value)
                const event = new Event('change')
                studioSigns.dispatchEvent(event)
            }
            if (studioSigns2 && key === 'studioSigns-2') {
                studioSigns2.value = Number(value)
                const event = new Event('change')
                studioSigns2.dispatchEvent(event)
            }
            if (willingnessToRelocate && key === 'willingnessToRelocate') {
                willingnessToRelocate.checked = true
                const event = new Event('change')
                willingnessToRelocate.dispatchEvent(event)
            }
        })

    }
}

// Duplicate of the function in the new-application.js file
function setDigitalImagesCommitteeMember(contracts){
    const digitalImageCommitteeMember = contracts.find(contract => contract.committeeRoleId && contract.committeeRoleId.includes('12'))
    const target = document.querySelector('#digitalImageCommitteeMember #img-chair-member-details:empty')
    if (digitalImageCommitteeMember && target) {
        target.appendChild(document.createTextNode("(" + digitalImageCommitteeMember.artistDetails.firstName + ' ' + digitalImageCommitteeMember.artistDetails.lastName + " - " + (digitalImageCommitteeMember.artistDetails.personalEmail || "") + ")"))
    }
}


function setDigitalImagesForm(contract) {
    logIf.client || true && console.log("setDigitalImagesForm", { contracts })
    setDigitalImagesCommitteeMember(contracts)

    if (contract) {


        imageFields.forEach(field => {


            logIf.client && console.log("Setting up digital images form", { contract, field })
            const form = document.querySelector('form#digital-images-form')
            if (!contract.images) return;
            const digitalImage = contract.images[field]
            if (digitalImage) {
                logIf.client && console.log("Setting digital image", { digitalImage })
                const component = form.querySelector(`file-input-component[fieldname="${field}"]`)

                // get image name
                const ref = firebase.storage.ref(firebase.storage.getStorage(), digitalImage);
                const name = ref.name;

                const thisComponent = component.setImage(digitalImage, { name })

                // Set not required for input (to allow form to be submitted when user has existing image) --- you cannot set the value for file inputs 
                thisComponent.querySelector('input[type=file]').removeAttribute('required')

            
                    thisComponent.querySelector('.saved-image-feedback').innerHTML = "Saved"
            
                logIf.client && console.log({ thisComponent })
            }
        })

    }
}


function setArtisticDemonstrationForm(contract) {
    if (contract) {
        logIf.client && console.log("Setting up artistic demonstration form", { contract })
        const form = document.querySelector('form#artistic-demonstration-form')
        const artisticDemonstration = contract.artisticDemonstration
        if (artisticDemonstration) {
            logIf.client && console.log("Setting artistic demonstration", { artisticDemonstration })
            const textarea = form.querySelector(`textarea[name="artisticDemonstration"]`)
            textarea.value = artisticDemonstration
            // trigger change
            const event = new Event('change')
            textarea.dispatchEvent(event)
        }
        const artistMentor = contract.artistMentor
        if (artistMentor) {
            logIf.client && console.log("Setting artistic mentor", { artistMentor })
            const checkbox = form.querySelector(`input[name="artistMentor"]`)
            checkbox.checked = true
            // trigger change
            const event = new Event('change')
            checkbox.dispatchEvent(event)
        }
    }
}

function setSignatureForm(contract) {
    if (contract) {

        logIf.client || true && console.log("Setting up signature form", { contract })
        const form = document.querySelector('form#my-signature-form')
        const signature = contract.signature
        if (signature) {
            logIf.client && console.log("Setting signature", { signature })
            const input = form.querySelector(`input[name="signature"]`)
            input.value = signature
            // trigger change
            const event = new Event('change')
            input.dispatchEvent(event)
        } else {
            // clear the signature
            const input = form.querySelector(`input[name="signature"]`)
            input.value = ""
            // trigger change
            const event = new Event('change')
            input.dispatchEvent(event)
        }
    }
}

function setArtistDetailsForm(contract) {
    const form = document.querySelector('form#artist-details-form')
    if (!contract) return
    const artistDetails = contract.artistDetails
    logIf.client && console.log("Setting up artist details form", { artistDetails, contract })
    if (artistDetails) {
        logIf.client && console.log("Setting artist details", { artistDetails })
        const inputs = form.querySelectorAll('input, textarea')
        inputs.forEach(input => {
            const name = input.name
            input.value = artistDetails[name] || ""
            // trigger change
            const event = new Event('change')
            input.dispatchEvent(event)
        })
    }
}




/* TODO: Only allow payment if the rest of the contract has been filled */

async function setPaypalButton(contract) {
    logIf.client && console.log("setPaypalButton", { contract })
    if (!contract) {
        document.querySelector('.scholarship-btn-container').style.display = 'block';
        return
    };

    const membershipPaid = contract && contract.artistDetails && contract.artistDetails.membershipPaid === true || false

    // get scholarship status from scholarship data collection
    await CRUD.read('scholarship-applications', firebase.auth.currentUser.uid).then(scholarship => {

        // logIf.client && console.log("scholarship", {scholarship})
        true && console.log("scholarship", { scholarship })
        // use sandbox logic here.
        const scholarshipGranted = scholarship.scholarshipGranted
        const bypass = scholarship.bypass
        window.initializePaypalButtons(scholarshipGranted ? (bypass ? bypass : 125) : 225)
        // window.initializePaypalButtons(1)

        if (scholarshipGranted) {
            document.querySelector('.standard-fee').style['text-decoration'] = 'line-through'
            document.querySelector('.scholarship-fee').style['text-decoration'] = 'none'
            document.querySelector('.scholarship-fee').style.display = 'inline-block'
        }
        if (scholarship.name && !scholarship.hasBeenReviewed) {
            document.querySelector('.scholarship-pending').style.display = 'inline-block'
        }

        if (scholarship.name) { // If an application has been submitted
            document.querySelector('.scholarship-btn-container').style.display = 'none'
        } else {
            document.querySelector('.scholarship-btn-container').style.display = 'block'
        }

    })

    if (membershipPaid) {
        document.querySelector('.membership-paid').style.display = 'inline-block'
        document.querySelector('.membership-payment-due').style.display = 'none'

        // show recept 
        const membershipReceipt = contract.artistDetails.membershipReceipt
        if (membershipReceipt) {
            const paidOn = new Date(membershipReceipt.createdAt.seconds * 1000).toLocaleString();
            document.querySelector('.membership-receipt').innerText =
                `Transaction ID: ${membershipReceipt.transactionId} \nAmount: ${membershipReceipt.amount} \nStatus: ${membershipReceipt.status}` +
                `\nPaid on: ${paidOn}`;
        }
    }
}



function setEditContractEditor(myContract) {
    const myPrivileges = (myContract.committeeRoleId || []).map(roleId => roles[roleId].privileges).flat()

    // if the user has the privileges to edit the contract, show the editor
    if (myPrivileges.includes('editContract')) {

        // show a button for editing the contract
        const editButton = document.createElement('button')
        editButton.innerText = "Edit Contract"
        editButton.setAttribute('id', 'edit-contract-btn')
        editButton.setAttribute('type', 'button')
        editButton.classList.add('small', 'editor-control')
        editButton.setAttribute('title', "This button is only visible to users with the 'editContract' privilege")

        // editButton.addEventListener('click', handleEditContract)
        document.querySelector('#my-contract h1').insertAdjacentElement('afterend', editButton)


        const container = document.createElement('div')

        // invisible textarea for editing the contract
        const textarea = document.createElement('textarea')
        container.appendChild(textarea)

        textarea.setAttribute('id', 'contract-editor')
        container.style.display = 'none'
        document.querySelector('#my-contract #edit-contract-btn').insertAdjacentElement('afterend', container)

        editButton.addEventListener('click', async () => {


            const configDocument = await CRUD.read('app-settings', 'contractDetails').then(datum => {
                return {
                    contractDetails: datum.data
                }
            })

            console.log("editing contract", { configDocument })

            // hide the button
            editButton.style.display = 'none'


            /*
            
            CONFIG STEP: Approved domains on tinyMCE account (Point it to the Glitch deployment)

            */

            // show the editor
            container.style.display = 'block'

            // Check if the editor has been initialized
            const TinyMCEeditor = document.querySelector('.tox.tox-tinymce')
            if (TinyMCEeditor) {

                // show the editor
                container.style.display = 'block'
            } else {

                console.log("Initializing TinyMCE editor")

                tinymce.init({
                    plugins: 'paste',
                    paste_data_images: true,
                    setup: function (editor) {
                        // Kept as an example of adding a new button
                        // editor.ui.registry.addButton('saveButton', {
                        //     text: 'Save',
                        //     onAction: function () {
                        //         // Save action
                        //         console.log('Save button clicked');
                        //     }
                        // });
                        editor.on("blur", function (e) {
                            console.log("Editor was blurred", e);
                        });

                        editor.on("init", function () {
                            editor.setContent(configDocument.contractDetails || "");
                        });

                        editor.on("keyup", function (e) {
                            console.log("Editor was changed", e);
                            // update the content in the DOM
                            const html = editor.getContent()
                            document.querySelector('#my-signature-form #contractDetails').innerHTML = html
                        })
                    },
                    selector: '#contract-editor',
                    toolbar_mode: "wrap",
                    plugins: [
                        // Core editing features
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                    ],

                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | outdent indent',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                    init_instance_callback: function (editor) {
                        // Adding custom buttons to the editor footer

                        const editorContainer = editor.getContainer();
                        const footerContainer = document.querySelector('#my-contract > div > div > div.tox-statusbar')
                        footerContainer.style.height = "50px"
                        const footer = editorContainer.querySelector('#my-contract > div > div > div.tox-statusbar > div.tox-statusbar__text-container.tox-statusbar__text-container--flex-start');
                        const buttonContainer = document.createElement('div');
                        buttonContainer.style.textAlign = 'center';
                        buttonContainer.style.margin = '10px auto';

                        const saveButton = document.createElement('button');
                        saveButton.innerText = 'Save';
                        saveButton.onclick = function () {
                            // Save action
                            console.log('Save button clicked');
                            // capture the content
                            const content = editor.getContent();
                            // save the content to the database
                            CRUD.update('app-settings', 'contractDetails', { data: content }).then(() => {
                                // hide the editor
                                container.style.display = 'none';
                                // show the button
                                editButton.style.display = 'block';
                            });

                        };

                        const cancelButton = document.createElement('button');
                        cancelButton.innerText = 'Cancel';
                        cancelButton.onclick = function () {
                            // Cancel action
                            console.log('Cancel button clicked');
                            // hide the editor
                            container.style.display = 'none';
                            // show the button
                            editButton.style.display = 'block';
                        };

                        buttonContainer.appendChild(saveButton);
                        buttonContainer.appendChild(cancelButton);
                        footer.style.display = 'none';
                        footer.insertAdjacentElement('afterend', buttonContainer);

                        // For both of the buttons, implement these styles
                        saveButton.setAttribute('style', 'background-color: #272727; color: white; border: none; padding: 5px 10px; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer; transition: background-color 0.3s ease;');
                        cancelButton.setAttribute('style', 'background-color: #272727; color: white; border: none; padding: 5px 10px; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer; transition: background-color 0.3s ease;');



                    }

                });
            }

        })


    }
}

function updateMyContract(myContract) {
    if (!myContract) return
    // If all sections are complete, enable the paypal button
    // Check for Signature, Artist Details, Digital Images, Studio Sharing Details, Volunteer Responsibility, Artistic Demonstration

    // console.log("Checking if contract is complete", { myContract })
    const signature = myContract.signature
    const artistDetails = myContract.artistDetails
    const images = myContract.images
    const studioSharing = myContract.StudioSharingAnswer
    const volunteerResponsibility = myContract.committeeRoleId && myContract.committeeRoleId.length > 0
    const artisticDemonstration = myContract.artisticDemonstration

    const contractComplete = signature && artistDetails && images && studioSharing && volunteerResponsibility && artisticDemonstration && allImagesExist(images)
    console.log("Contract Complete", { contractComplete, committeeRoleId: myContract.committeeRoleId, signature, artistDetails, images, studioSharing, volunteerResponsibility, artisticDemonstration })
    if (contractComplete) {
        document.querySelector('.ifContractComplete').style.display = 'block'
        document.querySelector('.contractIncomplete').style.display = 'none'
    } else { // Contract is incomplete
        document.querySelector('.contractIncomplete').style.display = 'block'
        document.querySelector('.ifContractComplete').style.display = 'none'

        // select the items that are incomplete
        const incompleteItems = {
            signature: !signature,
            artistDetails: !artistDetails,
            images: !images,
            studioSharing: !studioSharing,
            volunteerResponsibility: !volunteerResponsibility,
            artisticDemonstration: !artisticDemonstration,
            allImagesExist: !allImagesExist(images)
        };

        document.querySelectorAll('.incomplete').forEach(item => {
            item.classList.remove('incomplete')
        })

        if (incompleteItems.signature) {
            document.querySelector('.signature-incomplete').classList.add('incomplete')
        }
        if (incompleteItems.artistDetails) {
            document.querySelector('.artistDetails-incomplete').classList.add('incomplete')
        }
        if (incompleteItems.images) {
            document.querySelector('.images-incomplete').classList.add('incomplete')
        }
        if (incompleteItems.studioSharing) {
            document.querySelector('.studio-sharing-incomplete').classList.add('incomplete')
        }
        if (incompleteItems.volunteerResponsibility) {
            document.querySelector('.volunteer-incomplete').classList.add('incomplete')
        }
        if (incompleteItems.artisticDemonstration) {
            document.querySelector('.demonstration-incomplete').classList.add('incomplete')
        }
        if (incompleteItems.allImagesExist) {
            const el = document.querySelector('.all-images-exist-incomplete')
            el.classList.add('incomplete')
            // show image count
            const imageCount = Object.values(images).filter(image => image).length
            el.querySelector('.image-count').innerText = `(${imageCount}/5)`

        }

    }
}

function setVolunteerResponsibilityEditor(myContract) {
    const myPrivileges = (myContract.committeeRoleId || []).map(roleId => roles[roleId].privileges).flat()

    // if the user has the privileges to edit the contract, show the editor
    if (myPrivileges.includes('editContract')) {
        Promise.all([
            fetch('modal/editRole/editRole.js').then(res => res.text()),
            fetch('modal/createCommittee/createCommittee.js').then(res => res.text()),
            fetch('modal/createRole/createRole.js').then(res => res.text()),
            fetch('modal/editCommittee/editCommittee.js').then(res => res.text())
        ]).then(scripts => {
            scripts.forEach(scriptText => {
                const script = document.createElement('script');
                script.innerHTML = scriptText;
                document.body.appendChild(script);
            });
            editRole();
            createCommitteePermission()
            createRoleSetUp()
            editCommitteeButtons()
            setUpDragula() // Imported via CDN in the /my-contract/index.html file
        });

    }
}


function allImagesExist(images) {
    return imageFields.every(field => images[field])
}


function setOverrideEditor(contracts) {
    const myContract = contracts.find(contract => contract.userId === firebase.auth.currentUser.uid)

    const myPrivileges = (myContract.committeeRoleId || []).map(roleId => roles[roleId].privileges).flat()

    // if the user has the privileges to edit the contract, show the editor
    if (myPrivileges.includes('overrideContract')) {
        const container = document.createElement('div')
        container.setAttribute('id', 'override-contract-select2-container')
        const label = document.createElement('div')
        label.setAttribute('id', 'override-contract-label')
        container.appendChild(label)

        // show a button for overriding the contract
        const overrideSelect = document.createElement('select')
        // add placeholder option
        const placeholderOption = document.createElement('option')
        placeholderOption.value = ""
        overrideSelect.appendChild(placeholderOption)
        container.appendChild(overrideSelect)
        overrideSelect.setAttribute('id', 'override-contract-select2')
        container.style.marginLeft = "auto"
        document.querySelector('#my-contract').insertAdjacentElement('beforebegin', container)

        function formatOption(option) {
            if (!option.id) {
                return option.text;
            }
            var $option = $(
                '<div style="display:flex; justify-content: between; align-items:center"><strong >' + option.text + '</strong><small style="margin-left:auto; display:block;font-size: 17px">' + option.description + '</small></div>'
            );
            return $option;
        }

        function formatSelection(option) {
            if (!option.id) {
                return option.text;
            }
            var $option = $(
                '<div style="display:flex; justify-content: between; align-items:center"><small style="margin-right:10px; display:block;font-size: 17px">' + option.description + '</small><strong >' + option.text + '</strong></div>'
            );
            return $option;
        }



        function isMembershipPaid(contract) {
            return contract.artistDetails && contract.artistDetails.membershipPaid === true;
        }
        $(overrideSelect).select2({
            placeholder: "Edit Member Contract",
            allowClear: true,
            width: 'fit-content',
            templateResult: formatOption,
            templateSelection: formatSelection,
            data: contracts.filter(c => c.artistDetails).sort(byLastName).map(contract => {
                return {
                    id: contract.userId,
                    text: `${contract.artistDetails.firstName} ${contract.artistDetails.lastName}`,
                    description: isMembershipPaid(contract) ? "😎" : "🤨"
                }
            })
        });

        function contractReset() {
            const contractReset = {
                images: imageFields.reduce((acc, curr) => {
                    acc[curr] = "No image set"
                    return acc
                }, {})
            }

            setDigitalImagesForm(contractReset)
            console.log({ contractReset })

        }

        function setIsEditingOtherContract(contract) {
            // update the title of the browser tab
            document.title = "Editing Contract: " + contract.artistDetails.firstName + " " + contract.artistDetails.lastName
            document.querySelector('#my-contract > h1').innerText = "Editing Contract: " + contract.artistDetails.firstName + " " + contract.artistDetails.lastName
            document.querySelector('#override-contract-select2-container #override-contract-label').style.display = "block"
            document.querySelector('#override-contract-select2-container #override-contract-label').innerText = "Editing Contract"
            document.querySelector('#override-contract-select2-container').classList.add('isEditing')
        }
        function setIsEditingMyContract() {
            // update the title of the browser tab
            document.title = "My Contract"
            document.querySelector('#my-contract > h1').innerText = "My Contract"
            document.querySelector('#override-contract-select2-container #override-contract-label').style.display = "none"
            document.querySelector('#override-contract-select2-container').classList.remove('isEditing')
        }


        $(overrideSelect).on('select2:select', function (e) {
            contractReset()
            const userId = e.params.data.id
            const selectedContract = contracts.find(contract => contract.userId === userId)
            if (selectedContract) {
                setIsEditingOtherContract(selectedContract)
                // Load the selected contract details into the form
                setSignatureForm(selectedContract)
                setArtistDetailsForm(selectedContract)
                setDigitalImagesForm(selectedContract)
                setUpStudioSharingForm(selectedContract)
                setArtisticDemonstrationForm(selectedContract)
                updateMyContract(selectedContract)
                setPaypalButton(selectedContract)
            }
        })
        $(overrideSelect).on('select2:clear', function () {
            setIsEditingMyContract()
            contractReset()
            const userId = firebase.auth.currentUser.uid;
            const myContract = contracts.find(contract => contract.userId === userId);
            if (myContract) {
                // Load the logged-in user's contract details into the form
                setSignatureForm(myContract);
                setArtistDetailsForm(myContract);
                setDigitalImagesForm(myContract);
                setUpStudioSharingForm(myContract);
                setArtisticDemonstrationForm(myContract);
                updateMyContract(myContract);
                setPaypalButton(myContract)
            }
        });
    }
}