// Result => Your BMI is 24.69 (normal weigh)

function bmiScope() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  function receiveEventForm(event) {
    event.preventDefault();

    const weigh = form.querySelector(".input-weigh");
    const heigh = form.querySelector(".input-heigh");

    const bmi = weigh.value / heigh.value ** 2;

    if (bmi < 18.5) {
      bmiResult = "Low weigh";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiResult = "Normal weigh";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiResult = "Overweigh";
    } else if (bmi >= 30 && bmi < 34.9) {
      bmiResult = "Grade one Obesity";
    } else if (bmi >= 35 && bmi < 39.9) {
      bmiResult = "Grade two Obesity";
    } else {
      bmiResult = "Grade three Obesity";
    }

    result.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)} (${bmiResult})</p>`;
  }
  form.addEventListener("submit", receiveEventForm);
}

bmiScope();
