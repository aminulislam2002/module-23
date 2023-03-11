const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 1000, quantity: 3 },
  { name: "pant", price: 1100, quantity: 2 },
  { name: "brush", price: 300, quantity: 5 },
  { name: "pen", price: 10, quantity: 12 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal;
  }
  return sum;
}
const totalPrice = totalCost(shoppingCart);
console.log("Total Price: ", totalPrice, "TK");
