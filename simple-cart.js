const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 1000 },
  { name: "pant", price: 1100 },
  { name: "cover", price: 300 },
  { name: "pen", price: 120 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
  }
  return sum;
}
const totalPrice = totalCost(shoppingCart);
console.log("Total Price: ", totalPrice, "TK");
