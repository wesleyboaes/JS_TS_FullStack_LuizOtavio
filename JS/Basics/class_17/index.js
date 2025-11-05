function welcome(name) {
  return console.log(`Welcome to JavaScript, ${name}.`);
}

welcome("Wesley");

function sum(x, y) {
  const result = x + y;
  return result;
}

console.log(sum(10, 20));

// Common function
// const sqrt = function (n) {
//   return n ** 0.5;
// };

// Arrow function
// const sqrt = (n) => {
//   return n ** 0.5;
// };

// Simplified arrow function
const sqrt = (n) => n ** 0.5;

console.log(sqrt(25));

const person = {
  name: "Wesley",
  lastName: "Boaes",
  age: 33,
};

console.log(person.name);
console.log(person.lastName);

// function createPerson(name, lastName, age) {
//   return {
//     name: name,
//     lastName: lastName,
//     age: age,
//   };
// }
function createPerson(name, lastName, age) {
  return {
    name,
    lastName,
    age,
  };
}

const personOne = createPerson("Wesley", "Boaes", 33);
console.log(personOne.name);
