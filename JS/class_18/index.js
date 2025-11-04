const person1 = {
  name: "Wesley",
  lastName: "Boaes",
  age: 33,

  speak() {
    console.log(
      `${this.name} ${this.lastName} is saying hello! ${this.name} is ${this.age} years old.`
    );
  },

  addAge() {
    this.age++;
  },
};

person1.speak();

person1.addAge();
person1.speak();
