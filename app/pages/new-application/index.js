import { addMediumGroup, collectMediums, uploadMediums } from '../../../utils/application-mediums.mjs';
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


    const mediumsContainer = document.querySelector('#application-mediums');
    addMediumGroup(mediumsContainer);
    document.querySelector('#add-medium').addEventListener('click', () => {
        addMediumGroup(mediumsContainer).querySelector('input').focus();
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const button = form.querySelector('button[type="submit"]');
        if (button.disabled) return;
        const error = document.querySelector('#application-error');
        error.textContent = '';
        const mediums = collectMediums(mediumsContainer);
        const { values } = getFormValues('form#new-application-form');
        try {
            // Group controls have no names: they are serialized as nested data explicitly.
            values.mediums = await uploadMediums(mediums, CRUD.saveImage);
            values.schemaVersion = 2;
            values.hasBeenReviewed = false;
            // The studio/booth image remains application-wide.
            for (const [key, value] of Object.entries(values)) {
                if (!(value instanceof File)) continue;
                const file = new File([value], `${crypto.randomUUID()}-studio-image`, { type: value.type });
                values[key] = await CRUD.saveImage(file, 'new-applications');
            }
            await CRUD.create('new-applications', values);
            button.innerText = 'Application Submitted!';
            form.querySelectorAll('input, textarea, button').forEach(input => input.disabled = true);
            button.insertAdjacentHTML('beforebegin', '<h2 style="background: yellow; padding: 30px;">Your application has been successfully submitted. Please check that you have received an email, including spam and unread emails.</h2>');
            // Email failure must not invite resubmission of an already saved application.
            try {
                await sendNewApplicationClientConfirmationEmail(values);
            } catch (emailError) {
                console.error(emailError);
                error.textContent = 'Your application was saved, but the confirmation email could not be sent. Please contact GHOpenStudioTour@gmail.com.';
            }
        } catch (err) {
            console.error(err);
            button.disabled = false;
            button.innerText = 'Submit Application';
            error.textContent = 'Your application could not be submitted. Your entries are still here. Please try again.';
        }
    });
});
