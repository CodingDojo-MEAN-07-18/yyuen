var mathlib = require('./mathlib')();
const num1 = 25;
const num2 = 35;

console.log("The answer is:", mathlib.add(num1,num2));
console.log("The answer is:", mathlib.multiply(num1,num2));
console.log("The answer is:", mathlib.square(num2));
console.log("The answer is:", mathlib.random(num1, num2));