$(document).ready(function() {
    // Function to handle logout
    $('#logoutBtn').click(function() {
        // Send AJAX request to logout endpoint
        $.ajax({
            url: '/logout', // Replace with your actual logout endpoint
            method: 'POST',
            success: function(response) {
                // Handle logout success
                alert('You have been logged out successfully.');
                // Redirect to signup page or homepage
                window.location.href = '/signup'; // Replace with your signup page URL
            },
            error: function(xhr, status, error) {
                // Handle logout error
                console.error('Logout failed:', error);
                alert('Logout failed. Please try again.');
            }
        });
    });
});
