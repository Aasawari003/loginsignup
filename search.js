// Define an array of products
var products = [
    { name: 'Product 1', price: '$10' },
    { name: 'Product 2', price: '$15' },
    { name: 'Product 3', price: '$20' },
    { name: 'Product 4', price: '$25' },
];

function searchProducts() {
    var searchInput = document.getElementById('searchInput').value.trim();
    var searchResults = document.getElementById('searchResults');

    // Clear previous search results
    searchResults.innerHTML = '';

    // Display search results
    products.forEach(function(product) {
        if (product.name.toLowerCase().includes(searchInput.toLowerCase())) {
            var productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: ${product.price}</p>
            `;
            searchResults.appendChild(productDiv);
        }
    });
}