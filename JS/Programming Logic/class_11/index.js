const truth = true;

// LET has bock scope {...block...}
// VAR just has function scope

let name = "Wesley"; // Creating
var name2 = "Boaes"; // Creating

var name2 = "Oliveira"; // Redeclared
console.log(name, name2);

if (truth) {
  let name = "Maiara"; // Creating
  var name2 = "Pimenta"; // Redeclared
  console.log(name, name2);
}

console.log(name, name2);
