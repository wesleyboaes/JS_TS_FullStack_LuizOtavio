const myName = "Wesley Pimenta Boaes";
const age = 33;
const weight = 94;
const height = 1.75;

const imc = weight / height ** 2;

console.log(
  myName,
  "has",
  age,
  "years old, weigh",
  weight + "kg. He is",
  height + "m tall and his IMC is",
  imc
);

console.log(
  `${myName} has ${age} years old, weigh ${weight}kg. He is ${height}m tall and his IMC is ${imc}`
);
