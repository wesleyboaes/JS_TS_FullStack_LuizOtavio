const students = ["Wesley", "Maiara", "Boaes"];

console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);

console.log(students.length);

students.push("Oliveira");
console.log(students);

students.unshift("Sofia");
console.log(students);

const lastRemoved = students.pop();
console.log(lastRemoved);

const firstRemoved = students.shift();
console.log(firstRemoved);
