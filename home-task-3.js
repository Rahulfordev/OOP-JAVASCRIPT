// Task 5: Understanding Polymorphism
class Shape {
  constructor(shape) {
    this.shape = shape;
  }

  draw() {
    return `There is a ${this.shape} shape.`;
  }
}

class Circle extends Shape {
  constructor(shape) {
    super(shape);
  }
}

class Square extends Shape {
  constructor(shape) {
    super(shape);
  }
}

const shape1 = new Circle("circle");
const shape2 = new Circle("square");

console.log(shape1.draw());
console.log(shape2.draw());
