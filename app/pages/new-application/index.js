import '../../../utils/logIf.js';
import { sendNewApplicationClientConfirmationEmail } from '../../outbound-emails/newApplicationClientConfirmation.js';

// Duplicate of the function in the my-contract.js file
function setDigitalImagesCommitteeMember(contracts){
    const digitalImageCommitteeMember = contracts.find(contract => contract.committeeRoleId && contract.committeeRoleId.includes('12'))
    const target = document.querySelector('#digitalImageCommitteeMember #img-chair-member-details:empty')
    if (digitalImageCommitteeMember && target) {
        target.appendChild(document.createTextNode("(" + digitalImageCommitteeMember.artistDetails.firstName + ' ' + digitalImageCommitteeMember.artistDetails.lastName + " - " + (digitalImageCommitteeMember.artistDetails.personalEmail || "") + ")"))
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form  = document.querySelector('form#new-application-form')
    logIf.client && console.log({form, CRUD})

    // fetch all contracts
    CRUD.readAll('ghost-contracts').then(setDigitalImagesCommitteeMember)


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const { values, form } = getFormValues('form#new-application-form')
        logIf.client || true && console.log({ values, form })
       

        values.hasBeenReviewed = false

        // Process images
        // Get urls
        // Update data to have urls instead of files
        // Save data to firebase

        const promises = Object.entries(values).map(([key, value]) => {
            if (value instanceof File) {

                let newFileName = value.nameTemplate

                newFileName = newFileName.replace("{{randomNumber}}", Math.random() * 100000)

                // const name = values.name
                // for each file, create a new file with correct name
                value = new File([value], newFileName, { type: value.type })


                return new Promise((resolve, reject) => {
                    CRUD.saveImage(value, 'new-applications').then(url => {
                        values[key] = url
                    }).then(() => {
                        resolve()
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }
        })
        
        /**
         * Potential enhancements... Don't redirect.
         * after save, record the id.. If applicant re-save, just update the record
         */


        Promise.all(promises).then(() => {  
            CRUD.create('new-applications', values).then(async () => {

                sendNewApplicationClientConfirmationEmail(values)
    
                  window.addEventListener("message", (event) => {
                    // if (event.data.dispatch !== 'gmailController-response') return
    
                    // if (event.data.error) {
                    //   document.querySelector('.processPayment').innerText = "<div style='color:red; font-weight: bold'>Payment successful but error sending email</div>"
                    //   return
                    // }
    
                    // // You can add additional logic here to handle the message
                    // // show success message
    
                    // document.querySelector('.processPayment').innerText = "Payment Successful - Email Sent"
    
                    // setTimeout(() => {
                    //   // redirect to the dashboard
                    //   window.location.href = '/members'
                    // }, 3000)
                  });

            }).then(() => {
                const button = document.querySelector('button[type="submit"]')
                button.innerText = 'Application Submitted!'
                button.setAttribute("disabled", true)
                button.insertAdjacentHTML("beforebegin", `
                <h2 style="background: yellow; padding: 30px;">Your application has been successfully submitted. Please check that you've received email about this. Check spam and unread emails.</h2>
                    `)
            })
        })
    })
})