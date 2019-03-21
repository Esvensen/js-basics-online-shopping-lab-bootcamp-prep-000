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
 return (item + ' has been added to your cart.');
}

function viewCart() {
  if (cart.length === 0){
    return 'Your cart is empty.'
  } else {
    var i;
    for (i = 0; i < cart.length; i++) { 
    text += cars[i] + "<br>";
    }
    return 'In your cart, you have'
  }
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
