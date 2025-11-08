import { getEmailAddresses } from "./getEmailAddresses.js";
import { sendNewApplicationEmail } from "./newApplicationReceived.js";
import { sendNewContractSubmissionBoardEmail, sendNewContractSubmissionEmail } from "./newContractSubmission.js";
import { sendNewScholarshipEmail } from "./newScholarshipApplicant.js";
import { sendNotApprovedNewArtistEmail } from "./notApprovedNewArtist.js";

export const TESTING = {
    newApplication: false,
    newScholarship: false,
    newContract: false,
    approvedNewArtistEmail: false
};

export async function sendTestEmail() {


    // TEST #1: send email to the artist

    const user = {
        artistDetails: {
            firstName: 'William',
            lastName: 'Owen',
            email: 'william.owen.dev@gmail.com'
        }
    }

    const transaction = {
        id: '12345',
        amount: {
            value: 100,
            currency_code: 'USD'
        },
        status: 'Completed'
    }

    // sendNewContractSubmissionEmail(user, transaction)
// 
    // // TEST #2: send email to the board members

    // sendNewContractSubmissionBoardEmail(user, transaction)

    sendNotApprovedNewArtistEmail(user.artistDetails.email)


    // sendNewScholarshipEmail({
    //     name: 'William Owen',
    //     email: 'william.owen.dev@gmail.com'
    // })
    // sendNewApplicationEmail({
    //     firstName: 'William',
    //     lastName: 'Owen',
    //     email: 'william.owen.dev@gmail.com'
    // })

    // getEmailAddresses({
    //     roles: ["12"], // artist images chair
    //     committees: ['Board'],
    // }).then(emails => {
    //     console.log("would send emails to",{emails})
    // })

    // getEmailAddresses({  
    //     roles: ["24", "15"], // new applications chair, new recruitment chair
    //     committees: ['Board'],
    //  }).then(emails => emails.join(', ')).then(emails => {
    //     console.log("would send email to: ", emails)
    //  })

}

