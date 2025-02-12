// static methods are methods that live within the class. Often referred to class methods in other languages.
// Used for grouping related functionality together (like the Math object)

// inside a static method, 'this' refers to the class itself, not an instance.

// another way static methods are used is in factories (example 3)

// EXAMPLE:
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static species = "feline catus";

  // static method --> cannot be called on an instance
  static meow() {
    return `Meow! Meow! Meow!`;
  }

  // same function, but an instance method --> can be called on an instance
  instanceMeow() {
    return `Meow! Meow! Meow!`;
  }
}
const myCat = new Cat("blue", "scottish fold"); // new cat instance
// myCat.meow(); //! myCat.meow is not a function --> static class being called on an instance
Cat.meow(); // 'Meow! Meow! Meow!' static class being called on class.
myCat.instanceMeow(); // 'Meow! Meow! Meow!' --> using the instance method

// EXAMPLE 2:
// The Math object is a great example of a class that uses static methods.
// Its a good example because instances of the Math object are never created.
// You just work with the Math class itself and its static methods.

class myMath {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }
}
console.log(myMath.add(2, 3)); // 5

// trying to use the static method on an instance of the class:
let calebsMath = new myMath();
// calebsMath.add(3, 5); //! calebsMath.add is not a function

// EXAMPLE 3:
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = ["Fido", "Jeff", "Buddy", "Speed", "Joe"];
    const name = randChoice(names);
    return new Dog(name, "unknown");
  }

  bark() {
    return `${this.breed} says WOOF WOOF!`;
  }
}
console.log(Dog.registerStray()); // Dog {breed: unknown, name: fido}
console.log(Dog.registerStray()); // Dog {breed: unknown, name: jeff}

// func to pick random name from array (used inside registerStray())
function randChoice(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
// instead of writing the registerStray() func outside of the class,
// make it a static method inside of the class

// function registerStray() {
//   const names = ["Fido", "Jeff", "Buddy", "Speed", "Joe"];
//   const name = randChoice(names);
//   return new Cat(name, "unknown");
// }
