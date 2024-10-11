document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value.trim();
    const price = parseFloat(document.getElementById('product-price').value);

    if (name && price >= 0) {
        // Retrieve existing products from localStorage
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Add new product
        products.push({ name, price });

        // Save back to localStorage
        localStorage.setItem('products', JSON.stringify(products));

        // Clear the form
        document.getElementById('add-product-form').reset();

        alert('Product added successfully!');
    } else {
        alert('Please enter valid product details.');
    }
});
