function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please enter a number";
  }
  return num1 + num2;
}
const result = add(15, "man");
console.log(result);
