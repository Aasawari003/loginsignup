// Function to add a new product to the My Products section
function addProduct(name, imageUrl, price, description, productId) {
    var tbody = document.getElementById('productsList');

    var newRow = document.createElement('tr');
    newRow.setAttribute('data-product-id', productId); // Set productId as a data attribute for future reference
    newRow.innerHTML = `
        <td>${name}</td>
        <td><img src="${imageUrl}" alt="${name}" style="max-width: 100px;"></td>
        <td>${price}</td>
        <td>${description}</td>
        <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${productId})">Delete</button> <!-- Add onclick event for deleting -->
        </td>
    `;
    tbody.appendChild(newRow);


    //     Handle Product Addition: After the farmer successfully adds a product through the dashboard, you need to make an AJAX request to fetch the updated list of products from the backend and then update the UI on the products.html page.
    // Handle Product Deletion: If the farmer deletes a product from the dashboard, you should similarly update the UI on the products.html page to reflect the changes.
    //     The addProduct function now also calls a hypothetical loadProductsOnProductsPage function to reload the products list on the products.html page after adding a new product.
    // The deleteProduct function sends an AJAX DELETE request to the backend to delete the product and then calls removeProductFromUI to update the UI on the products.html page.
    // The addProductToBackend function sends an AJAX POST request to add the product to the backend and then calls addProduct to update the UI on the products.html page
    // After adding the product, reload the products list on products.html page
    loadProductsOnProductsPage(); // Assuming you have a function to load products on products.html
}


// Function to delete a product
function deleteProduct(productId) {
    // Implement AJAX call to delete product from backend
    // Example:
    // $.ajax({
    //     method: 'DELETE',
    //     url: `/api/products/${productId}`,
    //     success: function (response) {
    //         // Handle success response
    //         removeProductFromUI(productId);
    //     },
    //     error: function (xhr, status, error) {
    //         // Handle error response
    //         console.error(error);
    //     }
    // });

    // For demonstration purposes, remove the product immediately from UI without backend call
    removeProductFromUI(productId);
}

// Function to remove product from UI
function removeProductFromUI(productId) {
    var productRow = document.querySelector(`tr[data-product-id="${productId}"]`);
    if (productRow) {
        productRow.remove();
    }
}

// AJAX function to add a product to the backend
function addProductToBackend(name, imageUrl, price, description) {
    // Implement AJAX call to add product to backend
    // Example:
    // $.ajax({
    //     method: 'POST',
    //     url: '/api/products',
    //     data: {
    //         name: name,
    //         imageUrl: imageUrl,
    //         price: price,
    //         description: description
    //     },
    //     success: function (response) {
    //         // Handle success response
    //         addProduct(name, imageUrl, price, description, response.productId); // Assuming backend returns productId
    //     },
    //     error: function (xhr, status, error) {
    //         // Handle error response
    //         console.error(error);
    //     }
    // });
}

// Function to handle form submission for adding a new product
document.getElementById('postProductForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var productName = document.getElementById('productName').value;
    var productImageUrl = document.getElementById('productImage').value; // Changed to productImage
    var productPrice = document.getElementById('priceQuantity').value; // Changed to priceQuantity
    var productDescription = document.getElementById('productDescription').value;

    // Call the AJAX function to add the product to the backend
    addProductToBackend(productName, productImageUrl, productPrice, productDescription);

    // Add the new product to the frontend
    addProduct(productName, productImageUrl, productPrice, productDescription);

    // Reset the form
    this.reset();
});


