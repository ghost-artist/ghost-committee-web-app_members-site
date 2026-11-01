import { getApplicationMediums, renderApplicationMediums } from '../../../utils/application-mediums.mjs';

// Called after the review component has been connected and its template rendered.
window.populateApplicationMediums = function(component, application) {
    component.applicationMediums = getApplicationMediums(application);
    const options = component.querySelector('.medium-approval-options');
    options.replaceChildren();
    component.applicationMediums.forEach((medium, index) => {
        const label = document.createElement('label');
        label.style.cssText = 'display:block;margin:10px 0;';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.mediumIndex = String(index);
        // Older approved records have no per-medium decisions; keep their prior approval.
        const decision = application.mediumDecisions?.find(item => item.mediumIndex === index);
        checkbox.checked = decision ? decision.approved === true : application.approved === true;
        label.append(checkbox, document.createTextNode(` ${medium.medium || `Medium ${index + 1}`}`));
        options.append(label);
    });
    renderApplicationMediums(component.querySelector('.application-mediums'), application);
    component.querySelector('.app-preview h3').textContent = `${application.firstName || ''} ${application.lastName || ''}: ${getApplicationMediums(application).map(item => item.medium).join(', ')}`;
};
import applicationTemplate from './index.html.txt';
import { createCustomElement, evaluateTemplate } from '../../../utils/custom-element';
import './style.scss';
import { sendApprovedNewArtistEmail } from "../../outbound-emails/approvedNewArtist"
import { sendNotApprovedNewArtistEmail } from '../../outbound-emails/notApprovedNewArtist.js';
const logIf = require("../../../utils/logIf.js");



createCustomElement('application-component', function () {

        
    // Fot some reason whe nthe component is loaded via javascript, this call back doesnt fire.

    // events must be inline

}, applicationTemplate, '', {
  attributes:[
    'firstName',
    'lastName',
    'medium',
    'createdAt',
    'approved',
    'hasBeenReviewed',
    'email',
    'phone',
    'website',
    'studioAddress',
    'mailingAddress',
    'isWithinBoundaries',
    'randomId',
    'waStateBusinessLicenseUbiNumber',
    'studioSharingResponse',
    'artistMentor',
    'howDidYouHearAboutUs',
    'digitalImage1',
    'digitalImage1Info',
    'digitalImage2',
    'digitalImage2Info',
    'digitalImage3',
    'digitalImage3Info',
    'digitalImage4',
    'artistStatement',
    'websiteSocialMedia',
    'fbId',
    'status'
  ]
});

document.addEventListener('DOMContentLoaded', function() {

window.deleteApplication = function (event){

    if(confirm("Are you sure you want to delete this application?")){
    // update button to loading
      const button = event.target;
      button.setAttribute('disabled', 'disabled')
      button.innerHTML = 'Deleting...'

      // get the fbId
      const fbId = button.getAttribute('data-fb-id');


      // To Do, delete images from storage as well

      CRUD.delete('new-applications', fbId )
      .then(() => {
          const application = button.closest('application-component')
          application.remove()
      })
    }

}

// Save the exact decisions used for the email before sending any notification.
window.updateReview = async function (event, reviewAnswer) {
    const button = event.currentTarget || event.target;
    const component = button.closest('application-component');
    if (component.reviewPending) return;
    const error = component.querySelector('.review-error');
    error.textContent = '';
    const mediumDecisions = component.applicationMediums.map((medium, index) => ({
        mediumIndex: index,
        medium: medium.medium,
        approved: reviewAnswer === true && component.querySelector(`[data-medium-index="${index}"]`).checked
    }));
    if (reviewAnswer && !mediumDecisions.some(item => item.approved)) {
        error.textContent = 'Select at least one medium to approve this application, or use Disapprove.';
        return;
    }
    const controls = [...component.querySelectorAll('.approve-btn, .reject-btn, .delete-btn, [data-medium-index]')];
    const btnText = button.innerHTML;
    component.reviewPending = true;
    controls.forEach(control => control.disabled = true);
    button.textContent = 'Loading...';
    try {
        await CRUD.update('new-applications', button.getAttribute('data-fb-id'), {
            hasBeenReviewed: true, approved: reviewAnswer, mediumDecisions
        });
    } catch (err) {
        console.error(err);
        error.textContent = 'The review could not be saved. Please try again. No email was sent.';
        button.innerHTML = btnText;
        controls.forEach(control => control.disabled = false);
        component.reviewPending = false;
        return;
    }
    component.querySelector('.status').textContent = reviewAnswer ? 'Approved' : 'Not Approved';
    component.querySelectorAll('[data-medium-index]').forEach((checkbox, index) => {
        checkbox.checked = mediumDecisions[index].approved;
    });
    try {
        const email = component.getAttribute('email');
        if (reviewAnswer) sendApprovedNewArtistEmail(email, mediumDecisions);
        else sendNotApprovedNewArtistEmail(email);
        component.querySelector('.artist-application-review').classList.remove('expanded');
    } catch (err) {
        console.error(err);
        error.textContent = 'The review was saved, but the email could not be requested. Please contact the applicant.';
    } finally {
        button.innerHTML = btnText;
        controls.forEach(control => control.disabled = false);
        component.reviewPending = false;
    }
}

})
