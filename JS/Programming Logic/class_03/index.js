/*
FALSY
*false
0
''
""
``
null / undefined
NaN
*/

console.log("Wesley" && "Boaes");
console.log("Wesley" && NaN && "Boaes");
console.log("Wesley" && "" && "Boaes");
console.log("Wesley" && undefined && "Boaes");

function sayHi() {
  return "Hi";
}

const willRun = false;

console.log(willRun && sayHi());

console.log(0 || null || undefined || "Wesley" || NaN);
