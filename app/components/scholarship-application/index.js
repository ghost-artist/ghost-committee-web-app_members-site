import applicationTemplate from './index.html.txt';
import { createCustomElement, evaluateTemplate } from '../../../utils/custom-element';
import './style.scss';
import { sendApprovedScholarshipEmail } from '../../outbound-emails/approvedScholarship.js';
import { sendNotApprovedScholarshipEmail } from '../../outbound-emails/notApprovedScholarship.js';
const logIf = require("../../../utils/logIf.js");



createCustomElement('scholarship-application-component', function () {


  // Fot some reason whe nthe component is loaded via javascript, this call back doesnt fire.

  // events must be inline

}, applicationTemplate, '', {
  attributes: [
    'createdAt',
    'scholarshipGranted',
    'hasBeenReviewed',
    'approved',
    'email',
    'hasNotReceivedScholarshipPreviously',
    'needForScholarship',
    'fbId',
    'name',
    'disabled',
    'firstName',
    'lastName',
  ]
});

document.addEventListener('DOMContentLoaded', function () {


  window.updateScholarship = function (event, reviewAnswer) {
    console.log("updateScholarship", event, {reviewAnswer})
    // update button to loading
    const button = event.target;
    const btnText = button.innerHTML
    button.setAttribute('disabled', 'disabled')
    button.innerHTML = 'Loading...'

    // get the fbId
    const fbId = button.getAttribute('data-fb-id');


    CRUD.update('scholarship-applications', fbId,
      { hasBeenReviewed: true, scholarshipGranted: reviewAnswer })
      .then(() => CRUD.update('ghost-contracts', fbId,
        {
          artistDetails: {
            scholarshipApplied: reviewAnswer
          }
        }))
      .then(() => {
        const scholarshipComponent = button.closest('scholarship-application-component')
        const scholarshipEmail = scholarshipComponent.getAttribute("email")
        if(reviewAnswer == true) {
          sendApprovedScholarshipEmail(scholarshipEmail)
        } else {
          sendNotApprovedScholarshipEmail(scholarshipEmail)
        }
      })
      .then(() => {

        // update the button text
        button.innerHTML = 'Review Submitted'
        setTimeout(() => {
          button.removeAttribute('disabled')
          button.innerHTML = btnText

          // collapse the application
          const application = button.closest('.artist-application-review')
          application.classList.toggle('expanded');

          // update status text
          application.querySelector('.status').innerHTML = reviewAnswer ? 'Scholarship Granted' : 'Not Approved for Scholarship'

          // move to new spot?

        }, 3000)

        // move and collapse the application
      })
  }

})

