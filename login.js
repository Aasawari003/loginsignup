// login.js
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        var usernameEmail = $('#usernameEmail').val().trim();
        var password = $('#password').val().trim();

        // Validate inputs
        if (usernameEmail === '' || password === '') {
            $('#errorMsg').text('Please enter username/email and password.').show();
            return;
        }

        // Send login request to backend
        $.ajax({
            type: 'POST',
            url: 'http://your-backend-url/login', // Replace with your actual backend URL
            contentType: 'application/json',
            data: JSON.stringify({ usernameEmail: usernameEmail, password: password }),
            success: function(response) {
                // Handle successful authentication
                if (response.success) {
                    window.location.href = 'dashboard.html'; // Redirect to dashboard on successful login
                } else {
                    $('#errorMsg').text('Invalid username/email or password.').show();
                }
            },
            error: function(xhr, status, error) {
                // Handle error response
                $('#errorMsg').text('Error occurred while logging in. Please try again.').show();
            }
        });
    });
});
