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
 let fullItem = {itemName: item, itemPrice: priceOfItem};
 cart.push(fullItem);
 return (item + ' has been added to your cart.');
}

function viewCart() {
  let currentCart = []
  if (cart.length === 0){
    return 'Your cart is empty.'
  } else if (cart.length === 1) {
    return 'In your cart, you have ' + cart[0].itemName + ' at $' + cart[0].priceOfItem + '.'
  } else {
    var i = 0;
    while (i === 0) {
      currentCart.push(cart[0].itemName + ' at $' + cart[0].priceOfItem)
    }
    for (i = 1; i < cart.length; i++) { 
      currentCart.push('and '+ cart[i].itemName + ' at $' + cart[i].priceOfItem)
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
