// cart.js

// Dummy data to simulate cart items
const cartItems = [
    {
        id: 'product1',
        name: 'Product 1',
        price: 19.99,
        quantity: 2,
        image: './img/product1.jpg'
    },
    {
        id: 'product2',
        name: 'Product 2',
        price: 29.99,
        quantity: 1,
        image: './img/product2.jpg'
    }
];

// Function to update the cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Clear the existing cart items
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <p class="quantity">Quantity: ${item.quantity}</p>
                <p class="total">Total: $${itemTotal.toFixed(2)}</p>
            </div>
        `;

        cartContainer.appendChild(cartItem);
    });

    // Update the total
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to handle the checkout button
function handleCheckout() {
    alert('Proceeding to checkout...');
}

// Initialize the cart
updateCart();

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', handleCheckout);
