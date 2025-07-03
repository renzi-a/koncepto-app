// Cart object to hold products
const cart = [];

// Function to add product to cart
function addToCart(productName, quantity = 1) {
  const existingProduct = cart.find(p => p.name === productName);
  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ name: productName, quantity });
  }
  console.log(`${quantity} ${productName}(s) added to cart.`);
}

// Function to remove a product from cart
function removeFromCart(productName) {
  const index = cart.findIndex(p => p.name === productName);
  if (index !== -1) {
    cart.splice(index, 1);
    console.log(`${productName} removed from cart.`);
  } else {
    console.log(`${productName} not found in cart.`);
  }
}

// Function to view all products in the cart
function viewCart() {
  console.log("🛒 Your Cart:");
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    cart.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - Quantity: ${product.quantity}`);
    });
  }
}
