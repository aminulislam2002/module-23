const num1 = [10, 20, 30, 40, 50];
const num2 = [60, 70, 80, 90, 100];

// Check array using Array.isArray
console.log(Array.isArray(num1)); // return true. That mens its array

// search an array element using includes
console.log(num1.includes(100)); // return false
console.log(num2.includes(100)); // return true

// add/ join two(2) array and their element
const num = num1.concat(num2);
console.log(num); // return [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100 ]
