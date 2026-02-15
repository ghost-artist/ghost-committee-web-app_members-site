import contractReceived from './index.html.txt';
import { createCustomElement, evaluateTemplate } from '../../../utils/custom-element';
import './style.scss';




createCustomElement('contract-received', function () {

    setTimeout(() => {
        // get all image elements
        const images = Array.from(this.querySelectorAll('img'));
        console.log("images", images)

        images.forEach(function (image) {
            image.addEventListener('load', function () {
                var filePath = this.src;
                const regex = /\/o\/([^?]+)/;
                var fileName;
                const match = filePath.match(regex);
                if (match) {
                    fileName = match[1];
                }
                var fileNameDiv = document.createElement('span');
                fileNameDiv.classList.add('file-name');
                fileNameDiv.innerText = fileName;
                const target = this.closest('div').querySelector('b')
                target.insertAdjacentHTML('beforeend', '<br>');
                target.insertAdjacentElement('beforeend', fileNameDiv);
            });
        });

    }, 0)

}, contractReceived, '', {
    attributes: [
        'firstName',
        'lastName',
        'membershipPaid',
        'scholarshipApplied',
        'studioSharingAnswer',
        'artisticDemonstration',
        'artistStatement',
        'artistTagline',
        'businessEmail',
        'facebook',
        'instagram',
        'mailingAddress',
        'membershipPaid',
        'personalEmail',
        'phone',
        'studioAddress',
        'website',
        'committeeRoles',
        'artistInStudioImage',
        'brochureImage',
        'digitalImage1',
        'digitalImage2',
        'digitalImage3',
        'signature',
        'medium',
        'waStateUbi'
    ],
});
