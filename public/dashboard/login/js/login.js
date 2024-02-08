import { ajaxLoginQuery } from "/dashboard/home/query/login_query.js";

document.addEventListener('DOMContentLoaded', () => {
    // Variables for show and mask password
    var showPassword = document.querySelector('.fa-eye');
    var maskPassword = document.querySelector('.fa-eye-slash');
    var password = document.querySelector('#password');

    /* -*-*- SHOW PASSWORD TEXT -*-*- */
    showPassword.addEventListener('click', () => {
        showPassword.style.display = 'none';
        maskPassword.style.display = 'block';
        password.setAttribute('type', 'text');
    })
    /* -*-*- END SHOW PASSWORD TEXT -*-*- */

    /* -*-*- MASK PASSWORD TEXT -*-*- */
    maskPassword.addEventListener('click', () => {
        maskPassword.style.display = 'none';
        showPassword.style.display = 'block';
        password.setAttribute('type', 'password');
    })
    /* -*-*- END MASK PASSWORD TEXT -*-*- */
    
    // Variables for submit input
    var submitInput = document.querySelector('#submit');

    // Variables for email input
    var emailInput = document.querySelector('#email');
    var emailEmptyMessage = document.querySelector('#email-empty');
    var emailInvalidMessage = document.querySelector('#email-invalid');

    // Variables for password input
    var passwordInput = document.querySelector('#password');
    var passwordEmptyMessage = document.querySelector('#password-empty');
    var passwordInvalidMessage = document.querySelector('#password-invalid');

    /* -*-*- SUBMIT INPUT ACTION -*-*- */
    submitInput.addEventListener('click', (e) => {
        // Prevent form submission
        e.preventDefault();
        
        // Display error message if email is empty
        if (emailInput.value === '') {
            emailEmptyMessage.style.display = 'block';
        } else {
            emailEmptyMessage.style.display = 'none';
        }

        // Display error message if email is invalid
        if (!emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) && emailInput.value !== '') {
            emailInvalidMessage.style.display = 'block';
        } else {
            emailInvalidMessage.style.display = 'none';
        }

        // Display error message if password is empty
        if (passwordInput.value === '') {
            passwordEmptyMessage.style.display = 'block';
        } else {
            passwordEmptyMessage.style.display = 'none';
        }

        // Display error message if password is invalid
        if (passwordInput.value.length < 6 && passwordInput.value !== '') {
            passwordInvalidMessage.style.display = 'block';
        } else {
            passwordInvalidMessage.style.display = 'none';
        }
        
        // Get initial values of email and password
        const initialValues = {
            email: emailInput.value,
            password: passwordInput.value
        }

        // If new email or password is entered, hide api error message
        emailInput.addEventListener('input', () => {
            if (initialValues.email !== emailInput.value) {
                document.getElementById('error_api').style.display = 'none';
            }
        })
        passwordInput.addEventListener('input', () => {
            if (initialValues.password !== passwordInput.value) {
                document.getElementById('error_api').style.display = 'none';
            }
        })

        // If email and password are valid, submit form
        if (emailInput.value !== '' && emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) && passwordInput.value !== '' && passwordInput.value.length >= 6) {
            // Send ajax query to login
            ajaxLoginQuery(emailInput, passwordInput);
        }
    })
    /* -*-*- END SUBMIT INPUT ACTION -*-*- */
    
    /* -*-*- EMAIL INPUT ACTION -*-*- */
    emailInput.addEventListener('input', () => {
        // Hide error message if email is not empty
        if (emailInput.value === '') {
            emailEmptyMessage.style.display = 'block';
        } else {
            emailEmptyMessage.style.display = 'none';
        }

        // Hide error message if email is valid
        if (!emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) && emailInput.value !== '') {
            emailInvalidMessage.style.display = 'block';
        } else {
            emailInvalidMessage.style.display = 'none';
        }
    })
    /* -*-*- END EMAIL INPUT ACTION -*-*- */

    /* -*-*- PASSWORD INPUT ACTION -*-*- */
    passwordInput.addEventListener('input', () => {
        // Hide error message if password is not empty
        if (passwordInput.value === '') {
            passwordEmptyMessage.style.display = 'block';
        } else {
            passwordEmptyMessage.style.display = 'none';
        }

        // Hide error message if password is valid
        if (passwordInput.value.length < 6 && passwordInput.value !== '') {
            passwordInvalidMessage.style.display = 'block';
        } else {
            passwordInvalidMessage.style.display = 'none';
        }
    })
    /* -*-*- END PASSWORD INPUT ACTION -*-*- */
});