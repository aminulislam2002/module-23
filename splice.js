// splaice()
const num = [00, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const numSplice = num.splice(3, 5); // return [ 30, 40, 50, 60, 70 ]
console.log(numSplice);
console.log(num); // return [ 0, 10, 20, 80, 90, 100 ]

const num1 = [00, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const numSplice1 = num1.splice(3, 5, 1, 2, 3, 4, 5); // return [ 30, 40, 50, 60, 70 ]
console.log(numSplice1);
console.log(num1); // return [0, 10, 20,  1,  2, 3,  4,  5, 80, 90, 100]
