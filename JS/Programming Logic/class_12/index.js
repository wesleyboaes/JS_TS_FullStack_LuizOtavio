const num = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Assignment via destructuring
const [first, second] = num;
// const [first, second, ...rest] = num;

console.log(`${first}, ${second}`);

// console.log(rest);

const num2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const [list1, list2, list3] = num2;

console.log(list3[0]);
