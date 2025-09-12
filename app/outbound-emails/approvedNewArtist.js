import { getEmailAddresses } from './getEmailAddresses.js'
import { TESTING } from './sendTestEmail.js'

export function sendApprovedNewArtistEmail(newArtistEmail){
    
    // no TESTING mode needed here

    window.sendMessageToParent({
      controller: 'gmailController',
      to: [TESTING.approvedNewArtistEmail ? 'william.owen.dev@gmail.com' : newArtistEmail].filter(Boolean).join(','),
      subject: 'Your application to gig Harbor Open Studio Tour was approved!',
      body: `
         <div style="text-align:center; font-family:sans-serif;">
            <h1>Congratulations on behalf of the Gig Harbor Open Studio Tour!</h1>
            <p>Your application to join the tour has been approved!</p>
            <p>
                <strong>The next step:</strong> Please fill out our online contract and submit your payment. You are not officially part of the tour until we receive both!
            </p>
            <p>
                For the contract due date, check our website under the “Join” button and look under FAQ's.<br>
                Once accepted, you do not need to reapply, but <strong>you must submit an annual contract</strong>.
            </p>
            <fieldset style="width:fit-content; margin:auto; text-align:left;">
                <legend>How to Complete Your Contract & Payment</legend>
                <ol>
                    <li>Go to our website, Gig Harbor Open Studio Tour, and click the "Members" button.</li>
                    <li>A password page will open. The password is <strong>openhand</strong> (write this down).</li>
                    <li>On the login page, click "Register New Account" (pink button on the left). Enter your email and a password (save these).</li>
                    <li>Access your Member page. Click "My Contract" on the left and fill out each section, saving as you go. You can exit and return later.</li>
                    <li>Follow directions for uploading images (correct size and labeling required).</li>
                    <li>Image saving may take a few minutes depending on your internet speed. Saved images will say "Saved."</li>
                    <li>Complete the payment section at the end of your contract. Once submitted, you'll receive a confirmation email.</li>
                </ol>
            </fieldset>
            <p>
                We hold three General Meetings each year: mid-March, mid-August, and early October.<br>
                You'll receive email notifications (via MailChimp) about meetings and important info. Please check your spam or other folders if you don't see these emails.
            </p>
            <p>
                If you have any questions, call or email me:<br>
                Phone: 253-514-1865<br>
                Email: <a href="mailto:ghopenstudiotour@gmail.com">ghopenstudiotour@gmail.com</a>
            </p>
            <p>Thank you,<br>Beth Owen, President of GHOST (Gig Harbor Open Studio Tour)</p>
        </div>
        `
    })
}
