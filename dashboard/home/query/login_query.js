import { API_ENDPOINTS } from "/routes/routes.js";

/* -*-*- AJAX LOGIN QUERY -*-*- */
async function ajaxLoginQuery(emailInput, passwordInput) {
    // Check if server is connected
    try {
        // Get email and password values
        var email = emailInput.value;
        var password = passwordInput.value;

        // Send ajax query to login endpoint
        var response = await fetch(API_ENDPOINTS.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        });
        
        // Get response data
        var data = await response.json();
        
        // Check if response status is 200
        if(response.status === 200) {
            // Redirect to dashboard home page
            window.location.replace('/dashboard/home/home.html');
            // Set user id in local storage
            localStorage.setItem('userId', data.user.id)
        } else {
            // Display error message
            document.getElementById('error_api').style.display = 'block';
            document.getElementById('error_api').innerHTML = data.message;
        }
    } catch (error) {
        // Display error message
        document.getElementById('error_api').style.display = 'block';
        document.getElementById('error_api').innerHTML = "Une erreur s'est produite avec le serveur. Veuillez réessayer ultérieurement ou contacter un administrateur.";
    }
}
/* -*-*- END AJAX LOGIN QUERY -*-*- */

export { ajaxLoginQuery }