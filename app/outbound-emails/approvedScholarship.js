import { getEmailAddresses } from './getEmailAddresses.js'
import { TESTING } from './sendTestEmail.js'

export function sendApprovedScholarshipEmail(ScholarshipEmail){
    
    // no TESTING mode needed here

    console.log("Sending 'ApprovedScholarshipEmail' to " + ScholarshipEmail)

    window.sendMessageToParent({
      controller: 'gmailController',
      to: [TESTING.approvedScholarshipEmail ? 'william.owen.dev@gmail.com' : ScholarshipEmail].filter(Boolean).join(','),
      subject: 'Ghost Artist Scholarship was approved!',
      body: `
         <div style="text-align:center; font-family:sans-serif;">
            <h1>Congratulations on behalf of the Gig Harbor Open Studio Tour!</h1>
            <p>Your application for a $100 scholarship towards the fee for the tour has been approved!</p>
            <p>
                When you log on to our website, the scholarship should be automatically applied to your fee.
            </p>
            <p>
                Let us know if you have any problems with this. You can email ghopenstudiotour@gmail.com
            </p>
            <p>
                Remember that this scholarship is a one time use only.
            </p>
        </div>
        `
    })
}
