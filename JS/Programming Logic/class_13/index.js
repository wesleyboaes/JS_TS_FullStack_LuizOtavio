const person = {
  name: "Wesley",
  lastName: "Boaes",
  age: "33",
  address: {
    street: "Dr. March",
    number: 329,
    neighborhood: "Barreto",
    city: "Niterói",
  },
};

console.log(person.address.number);

// Assignment via destructuring
const {
  name,
  lastName,
  age,
  address: { street, number },
  address,
} = person;

console.log(name, lastName, age, street, address);
