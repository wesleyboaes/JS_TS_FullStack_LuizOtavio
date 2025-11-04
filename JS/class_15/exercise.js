const num = Number(prompt("Type a number: "));
const numTitle = document.getElementById("num-title");
const text = document.getElementById("text");

// const text1 = document.getElementById("text1");
// const text2 = document.getElementById("text2");
// const text3 = document.getElementById("text3");
// const text4 = document.getElementById("text4");
// const text5 = document.getElementById("text5");
// const text6 = document.getElementById("text6");

numTitle.innerHTML = num;

// text1.innerHTML = `Square root of ${num} is ${Math.sqrt(num)}`;
// text2.innerHTML = `${num} is integer? ${Number.isInteger(num)}`;
// text3.innerHTML = `${num} is Nan? ${Number.isNaN(num)}`;
// text4.innerHTML = `${num} rounded down: ${Math.floor(num)}`;
// text5.innerHTML = `${num} rounded up: ${Math.ceil(num)}`;
// text6.innerHTML = `${num} with 2 decimal places: ${Number(num.toFixed(2))}`;

text.innerHTML = "";
text.innerHTML += `<p>Square root of ${num} is: ${num ** 0.5}</p>`;
text.innerHTML += `<p>${num} is integer: ${Number.isInteger(num)}</p>`;
text.innerHTML += `<p>${num} is Nan? ${Number.isNaN(num)}</p>`;
text.innerHTML += `<p>${num} rounded down: ${Math.floor(num)}</p>`;
text.innerHTML += `<p>${num} rounded up: ${Math.ceil(num)}</p>`;
text.innerHTML += `<p>${num} with two decimal places: ${Number(
  num.toFixed(2)
)}</p>`;
