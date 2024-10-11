// Sample product data
const products = [
    { id: 1, name: 'Apple', price: 0.99, image: 'apple.jpg' },
    { id: 2, name: 'Banana', price: 0.59, image: 'banana.jpg' },
    { id: 3, name: 'Orange', price: 1.29, image: 'orange.jpg' },
    { id: 4, name: 'Milk', price: 1.99, image: 'milk.jpg' },
    { id: 5, name: 'Bread', price: 2.49, image: 'bread.jpg' },
    { id: 6, name: 'Eggs', price: 3.99, image: 'eggs.jpg' },
    { id: 7, name: 'Cheese', price: 4.99, image: 'cheese.jpg' },
    { id: 8, name: 'Chicken', price: 5.99, image: 'chicken.jpg' },
    { id: 9, name: 'Tomato', price: 1.59, image: 'tomato.jpg' },
    { id: 10, name: 'Potato', price: 0.79, image: 'potato.jpg' },
    { id: 11, name: 'Carrot', price: 0.89, image: 'carrot.jpg' },
    { id: 12, name: 'Lettuce', price: 1.19, image: 'lettuce.jpg' },
    { id: 13, name: 'Cucumber', price: 1.09, image: 'cucumber.jpg' },
    { id: 14, name: 'Pepper', price: 1.39, image: 'pepper.jpg' },
    { id: 15, name: 'Spinach', price: 2.49, image: 'spinach.jpg' },
    { id: 16, name: 'Onion', price: 0.99, image: 'onion.jpg' },
    { id: 17, name: 'Garlic', price: 1.49, image: 'garlic.jpg' },
    { id: 18, name: 'Ginger', price: 2.29, image: 'ginger.jpg' },
    { id: 19, name: 'Broccoli', price: 1.99, image: 'broccoli.jpg' },
    { id: 20, name: 'Mushrooms', price: 3.49, image: 'mushrooms.jpg' },
    { id: 21, name: 'Strawberries', price: 2.99, image: 'strawberries.jpg' },
    { id: 22, name: 'Blueberries', price: 4.49, image: 'blueberries.jpg' },
    { id: 23, name: 'Raspberries', price: 5.99, image: 'raspberries.jpg' },
    { id: 24, name: 'Grapes', price: 3.99, image: 'grapes.jpg' },
    { id: 25, name: 'Pineapple', price: 2.99, image: 'pineapple.jpg' },
    { id: 26, name: 'Watermelon', price: 7.99, image: 'watermelon.jpg' },
    { id: 27, name: 'Coconut', price: 1.79, image: 'coconut.jpg' },
    { id: 28, name: 'Avocado', price: 1.99, image: 'avocado.jpg' },
    { id: 29, name: 'Peach', price: 2.49, image: 'peach.jpg' },
    { id: 30, name: 'Plum', price: 1.89, image: 'plum.jpg' },
    { id: 31, name: 'Cherries', price: 6.99, image: 'cherries.jpg' },
    { id: 32, name: 'Kiwi', price: 1.09, image: 'kiwi.jpg' },
    { id: 33, name: 'Papaya', price: 4.99, image: 'papaya.jpg' },
    { id: 34, name: 'Mango', price: 2.49, image: 'mango.jpg' },
    { id: 35, name: 'Lemon', price: 0.79, image: 'lemon.jpg' },
    { id: 36, name: 'Lime', price: 0.69, image: 'lime.jpg' },
    { id: 37, name: 'Cabbage', price: 1.39, image: 'cabbage.jpg' },
    { id: 38, name: 'Celery', price: 1.99, image: 'celery.jpg' },
    { id: 39, name: 'Corn', price: 0.99, image: 'corn.jpg' },
    { id: 40, name: 'Beef', price: 7.99, image: 'beef.jpg' },
    { id: 41, name: 'Pork', price: 6.99, image: 'pork.jpg' },
    { id: 42, name: 'Fish', price: 8.99, image: 'fish.jpg' },
    { id: 43, name: 'Shrimp', price: 12.99, image: 'shrimp.jpg' },
    { id: 44, name: 'Tofu', price: 2.99, image: 'tofu.jpg' },
    { id: 45, name: 'Rice', price: 1.59, image: 'rice.jpg' },
    { id: 46, name: 'Pasta', price: 1.19, image: 'pasta.jpg' },
    { id: 47, name: 'Cereal', price: 3.99, image: 'cereal.jpg' },
    { id: 48, name: 'Yogurt', price: 0.89, image: 'yogurt.jpg' },
    { id: 49, name: 'Juice', price: 3.49, image: 'juice.jpg' },
    { id: 50, name: 'Soda', price: 1.09, image: 'soda.jpg' }
];

// Function to load products dynamically
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        // Create product card
        const productCard = document.createElement('div');
        productCard.className = 'product';

        // Product Image
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        // Product Name
        const productName = document.createElement('h3');
        productName.innerText = product.name;

        // Product Price
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price.toFixed(2)}`;

        // Add to Cart Button
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to Cart';
        addToCartBtn.addEventListener('click', () => addToCart(product));

        // Append to card
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartBtn);

        // Append card to product list
        productList.appendChild(productCard);
    });
}

// Cart handling
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart`);
}

// Load products on page load
window.onload = loadProducts;
