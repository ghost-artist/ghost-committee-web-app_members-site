import { getEmailAddresses } from './getEmailAddresses.js'
import { TESTING } from './sendTestEmail.js'

export function sendNotApprovedScholarshipEmail(ScholarshipEmail){
    
    // no TESTING mode needed here

    console.log("Sending 'NotApprovedScholarshipEmail' to " + ScholarshipEmail)

    window.sendMessageToParent({
      controller: 'gmailController',
      to: [TESTING.approvedScholarshipEmail ? 'william.owen.dev@gmail.com' : ScholarshipEmail].filter(Boolean).join(','),
      subject: 'Sorry, your application for a scholarship from Gig Harbor Open Studio Tour was not approved',
      body: `
         <div style="text-align:center; font-family:sans-serif;">
            <h1>Scholarship Application for Gig Harbor Open Studio Tour</h1>
            <p>Your scholarship application for the Gig Harbor Open Studio Tour has been declined.</p>
            <p>
                Your application did not meet our requirements for financial need.
            </p>
            <p>
                We wish you the best of luck in your art business.
            </p>
            <p>
                Thank you,<br>
                Gig Harbor Open Studio Tour board
            </p>
        </div>
        `
    })
}
