import { TESTING } from './sendTestEmail.js'

export async function sendNewApplicationClientConfirmationEmail(newArtist){

    const emailAddresses = newArtist.email

    if(TESTING.newApplication) console.log("Would send email to", emailAddresses)

    window.sendMessageToParent({
        controller: 'gmailController',
        // every one on board, new artist applications chair, new artist recruitment chair and the person who applied
        to: TESTING.newApplication ? 'william.owen.dev@gmail.com' : emailAddresses,
        subject: `GHOST New Artist Application Confirmation`,
        body: `
         <div style="text-align:center">
          <h1>A GHOST New Artist Application has been submitted!</h1>
            <p>
           This is confirmation that the Gig Harbor Open Studio Tour has received your New Artist Application.  After our screening committee meets, you will be receiving a follow up email with those results. 
            </p>


            <p>Thank you for your interest!</p>
            <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>

        </div>
          `
      })

}