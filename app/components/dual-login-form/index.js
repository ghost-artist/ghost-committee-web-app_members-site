import dualLoginForm from './index.html.txt';
import { createCustomElement, evaluateTemplate } from '../../../utils/custom-element';
import './style.scss';

const logIf = require("../../../utils/logIf.js");



createCustomElement('dual-login-form-component', function () {

    setUXEventListeners.bind(this)();

}, dualLoginForm, '', {
    attributes: ['loginImage', 'signupImage']
});


function setUXEventListeners() {
    // Change form from signup to login
    const dividerEl = this.querySelector('.os-dual-form')
    this.querySelectorAll('.toggleAuthType').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation()
            dividerEl.getAttribute('auth-mode') === 'login' ? dividerEl.setAttribute('auth-mode', 'signup') : dividerEl.setAttribute('auth-mode', 'login')
            //  writeFriendlyMessage();
        })
    })

    // listener on reset password
    // this.querySelector('.reset-password').addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const email = prompt('Enter your email address')
    //     if (email) {
    //         firebase.sendPasswordResetEmail(firebase.auth, email).then(() => {
    //             alert('Password reset email sent')
    //         }).catch(() => {
    //             alert('There was an error sending the password reset email')
    //         })
    //     }
    // })

    // JavaScript
    this.querySelector('.reset-password').addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('reset-password-modal');
        modal.style.display = 'block';
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('reset-password-modal').style.display = 'none';
        document.getElementById('reset-password-modal-feedback').innerHTML = '';
    });


    // Handle reset password
    document.getElementById('resetSubmit').addEventListener('click', () => {
        const email = document.getElementById('resetEmail').value;
        console.log({email});
        if (email) {
            firebase.sendPasswordResetEmail(firebase.auth, email)
                .then(() => {
                    
                    const feedback = document.getElementById('reset-password-modal-feedback');
                    console.log({feedback});

                    // Update test to show success message
                    feedback.innerHTML = `
                    <div class="alert alert-success" role="alert" style="text-align: center">
                        Password reset email sent <br>
                        (Check your spam folder if you don't see it in your inbox)
                    </div>
                    `;


                  

                 

                })
                .catch(() => {
                    alert('There was an error sending the password reset email');
                });
        }
    });
    // handle submit event for login form
    this.querySelector('form#login').addEventListener('submit', function (e) {
        e.preventDefault();

        const form = this;

        // get the button
        const btnSubmit = form.querySelector('button[type="submit"]')

        // get the button text
        const btnText = btnSubmit.innerText
        // change the button text to loading
        btnSubmit.innerText = 'Loading...'
        // disable the button
        btnSubmit.disabled = true

        const email = form.querySelector('input[id="email-login"]').value.trim();
        const password = form.querySelector('input[id="password-login"]').value.trim();

        return firebase.signInWithEmailAndPassword(firebase.auth, email, password).then((user) => {
            // redirect to members
            logIf.auth && console.log('redirecting to members page');
            window.location.href = '/members'
        }).catch((err) => {
            // change the button text back to original
            btnSubmit.innerText = btnText
            // enable the button
            btnSubmit.disabled = false
            console.log("There was an error signing in to your account. ", { err })
            // show error message
            alert('There was an error signing in to your account. Please try again')
        })

    })

    // handle submit event for signup form
    this.querySelector('form#signup').addEventListener('submit', function (e) {
        e.preventDefault();
        const form = this;
        // get the button
        const btnSubmit = form.querySelector('button[type="submit"]')

        // get the button text
        const btnText = btnSubmit.innerText
        // change the button text to loading
        btnSubmit.innerText = 'Loading...'
        // disable the button
        btnSubmit.disabled = true



        const firstName = form.querySelector('input[id="firstName"]').value;
        const lastName = form.querySelector('input[id="lastName"]').value;
        const fullName = `${firstName} ${lastName}`
        const email = form.querySelector('input[id="email"]').value.trim()
        const password = form.querySelector('input[id="password"]').value.trim()
        const confirmPassword = form.querySelector('input[id="confirm-password"]').value.trim()

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            btnSubmit.innerText = btnText
            btnSubmit.disabled = false
            return
        }

        logIf.auth && console.log("about to create user with email and password", { email, password, auth: firebase.auth });

        return firebase.createUserWithEmailAndPassword(firebase.auth, email, password).then(function (result) {
            logIf.auth && console.log("result", result);
            return firebase.updateProfile(result.user, {
                displayName: fullName
            }).then(() => {
                logIf.auth && console.log("user profile updated")
                return result
            })
        }).then((result) => {
            // Update ghost-contracts/{userId} with user data
            firebase.setDoc(firebase.doc(firebase.collection(firebase.db, 'ghost-contracts'), result.user.uid), {
                userId: result.user.uid,
                artistDetails: {
                    firstName,
                    lastName,
                    scholarshipApplied: false,
                    membershipPaid: false,
                },
                createdAt: firebase.serverTimestamp()
            }).then(() => {
                // redirect to members
                logIf.auth && console.log('redirecting to members page');
                window.location.href = '/members'
            })

        }).catch((err) => {
            // change the button text back to original
            btnSubmit.innerText = btnText
            // enable the button
            btnSubmit.disabled = false
            // show error message
            console.log('There was an error creating your account.', { err })
            alert('There was an error creating your account. Please try again')
        })

    })



}