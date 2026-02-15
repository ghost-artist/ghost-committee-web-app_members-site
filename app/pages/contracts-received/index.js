let roles;
document.addEventListener('DOMContentLoaded', async () => {
    roles = await CRUD.readAll('committee-roles').then(function (roles) {
        // return roles.sort(function (a, b) {
        //   return Number(a.fbId) - Number(b.fbId);
        // });
        return roles.reduce((acc, next) => {
            acc[next.fbId] = next
            return acc
        }, {})
      });

    CRUD.readAll('ghost-contracts').then(contracts => {
        return contracts.filter(c => c.artistDetails).filter(contract => contract.artistDetails.membershipPaid === true)
    }).then(renderContracts)
})

function renderContracts(contracts) {
    console.log("contracts", contracts)
    const contractsDiv = document.querySelector('#contracts')
    contractsDiv.innerHTML = ''
    contracts.forEach(contract => {
        // create a new contract-received element (THIS IS A CUSTOM ELEMENT)
        const contractDiv = document.createElement('contract-received')

        const contractData = {
            firstName: contract?.artistDetails?.firstName || '',
            lastName: contract?.artistDetails?.lastName || '',
            membershipPaid: contract?.artistDetails?.membershipPaid || '',
            scholarshipApplied: contract?.artistDetails?.scholarshipApplied || '',
            studioSharingAnswer: contract?.StudioSharingAnswer || '',
            artisticDemonstration: contract?.artisticDemonstration || '',
            artistStatement: contract?.artistDetails?.artistStatement || '',
            artistTagline: contract?.artistDetails?.artistTagline || '',
            businessEmail: contract?.artistDetails?.businessEmail || '',
            facebook: contract?.artistDetails?.facebook || '',
            instagram: contract?.artistDetails?.instagram || '',
            mailingAddress: contract?.artistDetails?.mailingAddress || '',
            personalEmail: contract?.artistDetails?.personalEmail || '',
            phone: contract?.artistDetails?.phone || '',
            studioAddress: contract?.artistDetails?.studioAddress || '',
            website: contract?.artistDetails?.website || '',
            committeeRoles: contract?.committeeRoleId && renderCommitteeRoles(contract) || '',
            artistInStudioImage: contract?.images?.artistInStudioImage || '',
            brochureImage: contract?.images?.brochureImage || '',
            digitalImage1: contract?.images?.digitalImage1 || '',
            digitalImage2: contract?.images?.digitalImage2 || '',
            digitalImage3: contract?.images?.digitalImage3 || '',
            signature: contract?.signature || '',
            medium: contract?.artistDetails?.medium || '',
            waStateUbi: contract?.artistDetails["wa-state-ubi"] || ''
        }

        console.log({ contractData, contract })

        // set each attribute
        Object.keys(contractData).forEach(key => {
            contractDiv.setAttribute(key, contractData[key])
        })




        contractDiv.init()

        const div=document.createElement('div')
        div.classList.add('container')
        div.appendChild(contractDiv)

        div.appendChild(document.createElement('hr'))
        contractsDiv.appendChild(div)
    })
}

function renderCommitteeRoles(contract) {

    const committeeRoleId = contract.committeeRoleId

    return committeeRoleId.map(role => {
        console.log({ role, roles, name: contract.artistDetails.firstName + " " + contract.artistDetails.lastName })
        const title = roles[role].title

        return `<li>${title}</li>`
    }).join('')
}


// /**
//  * Users are entering website urls without the https:// or www.
//  * If the rawUrl is formatted correctly. it doesn't need transformation
//  * If the rawUrl is incorrect, fix it.
//  * If the rawUrl is empty or null, return as-is
//  * Remove trailing whitespace
//  * 
//  * @param string rawUrl 
//  * @returns a processed url formatted correctly
//  */
// function enforceHttpsAndWWW(rawUrl) {

// }

// /**
//  * Url should have https://www.instagram.com/<username> format
//  * @param {*} rawUrl 
//  * @returns 
//  */
// function enforceInstagramLink(rawUrl){
//     rawUrl = enforceHttpsAndWWW(rawUrl)

//     return 
// }
