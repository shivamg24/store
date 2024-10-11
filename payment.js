// Payment processing logic
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const upiId = document.getElementById('upi-id').value.trim();

    // Regex for validating card number (16 digits)
    const cardNumberRegex = /^\d{16}$/;
    // Regex for validating expiry date (MM/YY)
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    // Regex for validating CVV (3 digits)
    const cvvRegex = /^\d{3}$/;
    // Simple regex for validating UPI ID (example@bank)
    const upiIdRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+$/;

    // Validate card details if provided
    if (cardNumber && expiryDate && cvv) {
        if (!cardNumberRegex.test(cardNumber)) {
            alert('Invalid card number. Please enter a 16-digit card number.');
            return;
        }
        if (!expiryDateRegex.test(expiryDate)) {
            alert('Invalid expiry date. Please use MM/YY format.');
            return;
        }
        if (!cvvRegex.test(cvv)) {
            alert('Invalid CVV. Please enter a 3-digit CVV.');
            return;
        }
        alert('Payment successful with card!');
        // Redirect to home page after alert is closed
        setTimeout(() => {
            window.location.href = 'index.html'; // Change to your home page URL
        }, 1000); // Wait 1 second before redirecting
    } 
    // Validate UPI ID if provided
    else if (upiId) {
        if (!upiIdRegex.test(upiId)) {
            alert('Invalid UPI ID. Please enter a valid UPI ID (e.g., example@bank).');
            return;
        }
        alert('Payment successful with UPI!');
        // Redirect to home page after alert is closed
        setTimeout(() => {
            window.location.href = 'index.html'; // Change to your home page URL
        }, 1000); // Wait 1 second before redirecting
    } 
    // If no payment details provided
    else {
        alert('Please fill in the payment details.');
    }
});
