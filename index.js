var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let priceOfItem = Math.floor(Math.random() * 101); 
 fullItem = {itemName: item, itemPrice: priceOfItem};
 cart.push(fullItem);
 return (item + ' has been sdded to your cart.');
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
