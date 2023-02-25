// Get all the buttons and input fields
const incButtons = document.querySelectorAll('.btn-inc');
const decButtons = document.querySelectorAll('.btn-dec');
const quantityFields = document.querySelectorAll('.fld-qty');
const prices = document.querySelectorAll('.price');
const cartItems = document.querySelector('.cart-items');

// Add click event listener to all the increment buttons
incButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get the current value of the quantity field
    let quantity = parseInt(quantityFields[index].value);

    // Increase the quantity value by 1
    quantity++;

    // Set the new value of the quantity field
    quantityFields[index].value = quantity;

    // Calculate and display the total price of the item
    const price = parseFloat(prices[index].innerText.replace('$', ''));
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toFixed(2);
    const cartItem = quantity + ' x ' + prices[index].parentElement.previousElementSibling.innerText + ' = $' + formattedPrice;
    cartItems.innerHTML += '<li>' + cartItem + '</li>';
  });
});

// Add click event listener to all the decrement buttons
decButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get the current value of the quantity field
    let quantity = parseInt(quantityFields[index].value);

    // Decrease the quantity value by 1 if it's greater than 0
    if (quantity > 0) {
      quantity--;
    }

    // Set the new value of the quantity field
    quantityFields[index].value = quantity;

    // Calculate and display the total price of the item
    const price = parseFloat(prices[index].innerText.replace('$', ''));
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toFixed(2);
    const cartItem = quantity + ' x ' + prices[index].parentElement.previousElementSibling.innerText + ' = $' + formattedPrice;
    cartItems.innerHTML += '<li>' + cartItem + '</li>';
  });
});
