// import roles from "../my-contract/committee-roles.js"; // <--special import (see the server file)
import { getEmailAddresses } from './getEmailAddresses.js'
import { TESTING } from './sendTestEmail.js'

export function sendNewContractSubmissionEmail(user, transaction){
    
    const personalEmail = user.artistDetails.personalEmail || ""
    const businessEmail = user.artistDetails.businessEmail || ""
    const email = firebase.auth.currentUser.email

    // no TESTING mode needed here

    window.sendMessageToParent({
      controller: 'gmailController',
      to: [email, personalEmail, businessEmail].filter(Boolean).join(','),
      subject: 'GHOST Contract Invoice',
      body: `
       <div style="text-align:center">
        <h1>Congratulations on joining the Gig Harbor Open Studio Tour</h1>
        <p>Here is your invoice for the membership fee. 
        <br> Your contract has been submitted. 
        <br> You will be able to make changes to the contract up until March 2nd, 2026
         </p>
      
        <fieldset style="width:fit-content; margin:auto;">
        
        <legend>Invoice</legend>
        
        <p style="margin:0; text-align:start;">Transaction ID: ${transaction.id}</p>
        <p style="margin:0; text-align:start;">Amount: ${transaction.amount.value}</p>
        <p style="margin:0; text-align:start;">Currency: ${transaction.amount.currency_code}</p>
        <p style="margin:0; text-align:start;">Status: ${transaction.status}</p>
        <p style="margin:0; text-align:start;">Created At: ${new Date().toLocaleString()}</p>
        </fieldset>

        <p>Thank you for your membership payment.</p>
         <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>
      </div>
        `
    })
}


export async function sendNewContractSubmissionBoardEmail(user, transaction){
    
    const contracts  = await CRUD.readAll('ghost-contracts')

    const email = user.artistDetails.personalEmail || user.artistDetails.businessEmail || firebase.auth.currentUser.email


    
    const roles = await CRUD.readAll('committee-roles').then(function (roles) {
      return roles.reduce((acc, next) => {
          acc[next.fbId] = next
          return acc
      }, {})
    });

    console.log("sendNewContractSubmissionBoardEmail",{roles})

    const newArtist = {
        name: `${user.artistDetails.firstName} ${user.artistDetails.lastName}`,
        email: email
      }
     
      const emailAddresses = await getEmailAddresses({
        roles: ["12"], // artist images chair
        committees: ['Board'],
      }).then(emails => emails.join(','))

      if(TESTING.newContract) console.log("Would send email to", emailAddresses)

      window.sendMessageToParent({
        controller: 'gmailController',
        // To all the board member and artist images chair emails
        // to: welcomeEmailAddress,
        to: TESTING.newContract ? 'william.owen.dev@gmail.com' : emailAddresses,
        subject: `GHOST Contract Payment Submitted by ${newArtist.name}`,
        body: `
         <div style="text-align:center">
          <h1>The Gig Harbor Open Studio Tour is Growing</h1>
          <p>${newArtist.name} has submitted their membership payment.
          <br> Reach out to them to welcome them to the tour.
          <br> You can reach them at ${newArtist.email}
           </p>
        
          <fieldset style="width:fit-content; margin:auto;">
          
          <legend>Invoice</legend>
          
          <p style="margin:0; text-align:start;">Transaction ID: ${transaction.id}</p>
          <p style="margin:0; text-align:start;">Amount: ${transaction.amount.value}</p>
          <p style="margin:0; text-align:start;">Currency: ${transaction.amount.currency_code}</p>
          <p style="margin:0; text-align:start;">Status: ${transaction.status}</p>
          <p style="margin:0; text-align:start;">Created At: ${new Date().toLocaleString()}</p>
          </fieldset>

          <p>Thank you for your membership.</p>
           <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>
        </div>
          `
      })
}