// register.js
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var contactinfo = document.getElementById('contactinfo').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var role = document.getElementById('role').value;

    // Check if name, email, password, role, and contact info are not empty
    if (name === '' || email === '' || password === '' || role === '' || contactinfo === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Prepare data to send to the backend
    var userData = {
        name: name,
        email: email,
        password: password,
        role: role,
        contactinfo: contactinfo
    };

    // Submit the form data to the backend
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        alert('User registered successfully');
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to register user');
    });

    return true; // Form is valid, proceed with submission
}
