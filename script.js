$(document).ready(function() {
    // Show login modal
    $('#loginBtn').click(function() {
        $('#loginModal').modal('show');
    });

    // Show registration modal
    $('#registerBtn').click(function() {
        $('#registerModal').modal('show');
    });

    // Handle login form submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        // Perform login logic here
    });

    // Handle registration form submission
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        // Perform registration logic here
    });

    // Toggle content based on sidebar navigation
    $('.nav-link').click(function() {
        var target = $(this).attr('href');
        showSection(target);
    });

    // Example: Dynamically load crop advertisements
    function loadCropAdvertisements() {
        // Make AJAX request to fetch crop advertisements
        $.ajax({
            url: 'api/cropAdvertisements',
            method: 'GET',
            success: function(response) {
                // Process and display crop advertisements
                $('#cropAdsList').html(response);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }

    // Example: Dynamically load blogs
    function loadBlogs() {
        // Make AJAX request to fetch blogs
        $.ajax({
            url: 'api/blogs',
            method: 'GET',
            success: function(response) {
                // Process and display blogs
                $('#blogsList').html(response);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }

    // Example: Dynamically load products
    function loadProducts() {
        // Make AJAX request to fetch products
        $.ajax({
            url: 'api/products',
            method: 'GET',
            success: function(response) {
                // Process and display products
                $('#productsList').html(response);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    }

    // Call functions to load initial content
    loadCropAdvertisements();
    loadBlogs();
    loadProducts();

    // Function to show specific section based on target
    function showSection(target) {
        $('.container').children().hide();
        $(target).show();
    }
});
