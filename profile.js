// profile.js
$(document).ready(function() {
// Function to handle form submission for saving user profile
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form input values
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;

    // Make AJAX request to save profile data
    saveProfile(name, address, contact, email);
});

// Function to save user profile data to the database
function saveProfile(name, address, contact, email) {
    // Make an AJAX POST request to the backend to save profile data
    $.ajax({
        method: 'POST',
        url: '/api/profile',
        data: {
            name: name,
            address: address,
            contact: contact,
            email: email
        },
        success: function (response) {
            // Handle success response
            console.log('Profile saved successfully');
        },
        error: function (xhr, status, error) {
            // Handle error response
            console.error(error);
            alert('Failed to save profile. Please try again.');
        }
    });
    // For demonstration purposes, log the profile data to the console
    console.log('Profile data:');
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Contact:', contact);
    console.log('Email:', email);
}
});


// Function to fetch and display user profile data
function displayProfile() {
    // Make an AJAX GET request to fetch user profile data
    $.ajax({
        method: 'GET',
        url: '/api/profile',
        success: function (response) {
            // Handle success response and display profile data in UI
            document.getElementById('name').value = response.name;
            document.getElementById('address').value = response.address;
            document.getElementById('contact').value = response.contact;
            document.getElementById('email').value = response.email;
        },
        error: function (xhr, status, error) {
            // Handle error response
            console.error(error);
            alert('Failed to fetch profile data. Please try again.');
        }
    });

    // For demonstration purposes, mock profile data and display in UI
    var profileData = {
        name: 'John Doe',
        address: '123 Street, City',
        contact: '9876543210',
        email: 'johndoe@example.com'
    };

    document.getElementById('name').value = profileData.name;
    document.getElementById('address').value = profileData.address;
    document.getElementById('contact').value = profileData.contact;
    document.getElementById('email').value = profileData.email;
}

// Call displayProfile function to fetch and display profile data when the page loads
displayProfile();



// In this profile.js file:

// The saveProfile function handles the form submission and makes an AJAX POST request to the backend to save the user's profile data to the database.
// The displayProfile function fetches the user's profile data from the database using an AJAX GET request and displays it in the UI.
// For demonstration purposes, the AJAX requests are simulated using comments. You'll need to replace the comments with actual AJAX requests that communicate with your backend server's API endpoints for saving and fetching profile data.
// Remember to replace the mock profile data and AJAX endpoints (/api/profile) with your actual backend implementation details.