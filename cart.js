// Load cart from localStorage or initialize it
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    const cartTotal = document.getElementById('cart-total');
    cartTableBody.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = item.name;

        const tdPrice = document.createElement('td');
        tdPrice.textContent = `$${item.price.toFixed(2)}`;

        const tdQuantity = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = '1';
        quantityInput.addEventListener('change', function() {
            item.quantity = parseInt(this.value);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
        tdQuantity.appendChild(quantityInput);

        const tdSubtotal = document.createElement('td');
        const subtotal = item.price * item.quantity;
        tdSubtotal.textContent = `$${subtotal.toFixed(2)}`;

        const tdAction = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
        tdAction.appendChild(removeButton);

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQuantity);
        tr.appendChild(tdSubtotal);
        tr.appendChild(tdAction);

        cartTableBody.appendChild(tr);

        total += subtotal;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Checkout button event listener
document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        // Proceed to payment
        window.location.href = 'payment.html';
    }
});

updateCart();
