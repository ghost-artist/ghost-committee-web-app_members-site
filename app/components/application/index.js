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
    'digitalImage2',
    'digitalImage3',
    'digitalImage4',
    'artistStatement',
    'websiteSocialMedia',
    'fbId',
    'status'
  ]
});

document.addEventListener('DOMContentLoaded', function() {


window.updateReview = function (event, reviewAnswer) {
  // logIf.crud && console.log("updateReview", event)
   console.log("updateReview (test change code)", event)
    // update button to loading
    const button = event.target;
    const btnText = button.innerHTML
    button.setAttribute('disabled', 'disabled')
    button.innerHTML = 'Loading...'

    // get the fbId
    const fbId = button.getAttribute('data-fb-id');


    CRUD.update('new-applications', fbId, 
    {hasBeenReviewed: true, approved: reviewAnswer} )
  .then(() =>{
    // update the button text
    button.innerHTML = 'Review Submitted'
    setTimeout(() => {
      button.removeAttribute('disabled')
      button.innerHTML = btnText
    
      // collapse the application
        const application = button.closest('.artist-application-review')
        application.classList.toggle('expanded');
        
        // update status text
        application.querySelector('.status').innerHTML = reviewAnswer ? 'Approved' : 'Not Approved'
        
          
        const applicationComponent = button.closest('application-component')
        const newArtistEmail = applicationComponent.getAttribute("email")
        if(reviewAnswer == true){
          sendApprovedNewArtistEmail(newArtistEmail);
        } else {
          sendNotApprovedNewArtistEmail(newArtistEmail);

        }
      
    }, 3000)

    // move and collapse the application
  }).catch((err) => {
    console.error(err)
    button.innerHTML = btnText
    button.removeAttribute('disabled')
  })
}

})

