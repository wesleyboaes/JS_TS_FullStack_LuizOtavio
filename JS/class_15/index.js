let num1 = 9.6564168687;
let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);

console.log(num2);
console.log(num3);
console.log(num4);

// Random rule for numbers between the max and min values => random * (max - min) + min
const rand = Math.round(Math.random() * (10 - 5) + 5);

console.log(Math.max(1, 2, 5, 4, 9, -6, 3, 0, -8));
console.log(Math.min(1, 2, 5, 4, 9, -6, 3, 0, -8));
console.log(rand);

console.log(Math.PI);
console.log(Math.pow(3, 2));
console.log(3 ** 2);
