// Task 3: Using new Keyword
class Dog {
  constructor(name, breed) {
    (this.name = name), (this.breed = breed);
  }
}

const dog1 = new Dog("Lilibet", "French Bulldogs");
console.log(dog1);
