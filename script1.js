let cart = [];

// Add to Cart
function addToCart(name, price) {

    let item = cart.find(item => item.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

// Remove Item
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// Update Quantity
function updateQuantity(name, quantity) {

    let item = cart.find(item => item.name === name);

    if (item) {
        item.quantity = parseInt(quantity);

        if (item.quantity <= 0) {
            removeFromCart(name);
        }
    }

    updateCart();
}

// Update Cart Display
function updateCart() {

    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - Rs.${item.price} x 
            <button onclick="removeFromCart('${item.name}')">Remove</button>
            <input type="number"
                   value="${item.quantity}"
                   min="0"
                   onchange="updateQuantity('${item.name}', this.value)">
        `;

        cartItems.appendChild(li);
    });

    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    document.getElementById("totalPrice").innerHTML =
        "Total Price: Rs." + total;
}
