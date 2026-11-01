import { suppressApplicationEmails, getApplicationEmailRecipientOverride } from './local-email-settings.js';
import { getEmailAddresses } from './getEmailAddresses.js';


export async function sendNewApplicationEmail(newArtist){
    if (suppressApplicationEmails()) return;
    const recipientOverride = getApplicationEmailRecipientOverride();


    // get all board members
    // plus new artist applications chair
    // new artist recruitment chair

    const newApplicationEventId = '1Iig2hZFN7MgyFUpjG0q' // A timeline event id for some date in the future
    const specialTimelineEvent  = await CRUD.read('ghost-timeline', newApplicationEventId)

    let date;
    if(typeof specialTimelineEvent.date === 'string'){
        const [year, month, day] = specialTimelineEvent.date.split('-');
        date = new Date(year, month - 1, day); 
        date = date.toLocaleDateString('en-us', {month: 'long', day: 'numeric'})
    } else {
        date = specialTimelineEvent.date.toDate().toLocaleDateString('en-us', {month: 'long', day: 'numeric'})
    }

    const emailAddresses = recipientOverride || await getEmailAddresses({
        roles: ["17", "15"], // artist applications chair, new artist recruitment chair
        committees: ['Board'],
    }).then(emails => emails.join(',') + ',' + newArtist.email)


    window.sendMessageToParent({
        controller: 'gmailController',
        // every one on board, new artist applications chair, new artist recruitment chair and the person who applied
        to: recipientOverride || emailAddresses,
        subject: `GHOST New Artist Application sent from ${newArtist.firstName} ${newArtist.lastName}`,
        body: `
         <div style="text-align:center">
          <h1>A GHOST New Artist Application has been submitted!</h1>
            <p>
            The committee will be reviewing the application from <b>${newArtist.firstName} ${newArtist.lastName}</b>.<br>
            The new artist applicant will receive a notification once the application has been reviewed. 
            </p>
            <p>Application must be received no later than ${date}.
            </p>


            <p>Thank you for your membership.</p>
            <p>Best Regards, <br>Gig Harbor Open Studio Tour</p>



        </div>
          `
      })

}