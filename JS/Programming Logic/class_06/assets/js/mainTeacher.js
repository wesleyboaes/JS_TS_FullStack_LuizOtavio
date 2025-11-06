// Stop form sending

// Capture the submit event of the form

const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputWeigh = e.target.querySelector("#input-weigh");
  const inputHeigh = e.target.querySelector("#input-heigh");

  const weigh = Number(inputWeigh.value);
  const heigh = Number(inputHeigh.value);

  if (!weigh) {
    setResult("Invalid weigh!", false);
    return;
  }

  if (!heigh) {
    setResult("Invalid heigh!", false);
    return;
  }

  const bmi = getBMI(weigh, heigh);
  const levelBMI = getLevelBMI(bmi);

  const msg = `Your BMI is ${bmi} (${levelBMI})`;
  console.log(msg);
  setResult(msg, true);
});

function getLevelBMI(bmi) {
  const level = [
    "Low weigh",
    "Normal weigh",
    "Overweigh",
    "Grade one Obesity",
    "Grade two Obesity",
    "Grade three Obesity",
  ];

  if (bmi > 40) return level[5];
  if (bmi >= 35) return level[4];
  if (bmi >= 30) return level[3];
  if (bmi >= 25) return level[2];
  if (bmi >= 18.5) return level[1];
  if (bmi < 18.5) return level[0];
}

function getBMI(weigh, heigh) {
  const bmi = weigh / heigh ** 2;
  return bmi.toFixed(2);
}

function createParagraph() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createParagraph();

  if (isValid) {
    p.classList.add("p-result-true");
  } else {
    p.classList.add("p-result-false");
  }

  p.innerHTML = msg;
  result.appendChild(p); // Const p
}
