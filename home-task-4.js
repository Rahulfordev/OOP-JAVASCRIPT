// Task 9: JavaScript Inheritance with Animals
class Animal {
  constructor(name, sound) {
    (this.name = name), (this.sound = sound);
  }

  makeSound() {
    return `The sound of the ${this.name} is ${this.sound}`;
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

const dogInfo = new Dog("Dash", "Barking");
const catInfo = new Dog("Oreo", "Meow");

console.log(dogInfo.makeSound());
console.log(catInfo.makeSound());
