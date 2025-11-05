// function myScope() {
//   const form = document.querySelector(".form");

//   form.onsubmit = (event) => {
//     event.preventDefault();
//     alert(1);
//     console.log("Not sent");
//   };

//   let counter = 1;

//   function receiveEventForm(event) {
//     event.preventDefault();
//     console.log(`Form was not send ${counter}`);
//     counter++;
//   }

//   form.addEventListener("submit", receiveEventForm);
// }

// myScope();

function myScope() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const people = [];

  function receiveEventForm(event) {
    event.preventDefault();

    const name = form.querySelector(".name");
    const lastName = form.querySelector(".lastName");
    const weigh = form.querySelector(".weigh");
    const heigh = form.querySelector(".heigh");

    const person = {
      name: name.value,
      lastName: lastName.value,
      weigh: weigh.value,
      heigh: heigh.value,
    };

    people.push(person);

    console.log(people);

    result.innerHTML += `<p>${person.name} ${person.lastName} ${person.weigh} ${person.heigh}</p>`;
  }

  form.addEventListener("submit", receiveEventForm);
}

myScope();
