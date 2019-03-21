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
  let currentCart = []
  if (cart.length === 0){
    return 'Your cart is empty.'
  } else if (cart.length === 1) {
    return 'In your cart, you have ' + cart[]
  } else {
    var i = 0;
    
    for (i = 1; i < cart.length; i++) { 
    
    }
  }
  return 'In your cart, you have' + currentCart + '.'
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
