import { getEmailAddresses } from './getEmailAddresses.js'
import { TESTING } from './sendTestEmail.js'

export function sendNotApprovedNewArtistEmail(newArtistEmail){
    
    // no TESTING mode needed here

    console.log("Sending 'NotApprovedNewArtistEmail' to " + newArtistEmail)

    window.sendMessageToParent({
      controller: 'gmailController',
      to: [TESTING.notApprovedNewArtistEmail ? 'william.owen.dev@gmail.com' : newArtistEmail].filter(Boolean).join(','),
      subject: 'Sorry, your application to Gig Harbor Open Studio Tour was not approved',
      body: `
          <div style="text-align:center; font-family:sans-serif;">
          <h1>Thank you for your application to the Gig Harbor Open Studio Tour</h1>
          <p style="max-width:575px">
            I am sorry to inform you that, at this time, your application to join the Gig Harbor Open Studio Tour has been declined because it does not meet our artistic standards for professional work. <br> If you would like any feedback about our decision, please contact me at <a href="mailto:degoede@aol.com">degoede@aol.com</a>.
          </p>
          <p>
            We appreciate your interest and would encourage you to continue to work on your art and to reapply in future years.
          </p>
          <p>
            Thank you,<br>
            Andrew Van DeGoede,<br>
            Screening Chair of GHOST (Gig Harbor Open Studio Tour)
          </p>
        </div>
        `
    })
}
