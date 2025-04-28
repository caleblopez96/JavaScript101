// Objects of a superclass should be able to be replaced with objects of a subclass
// without affecting the correctness of the program

// EXAMPLE: the code below shows an example of violating LSP.
// All subclasses of bird can use the fly method except penguin

// creating a bird class
class Bird {
  fly() {
    console.log("This bird can fly");
  }
}

// creating duck class that extends bird
class Duck extends Bird {
  fly() {
    console.log("Duck flying");
  }
}

// creating a function that makes the "bird" fly
function makeBirdFly(bird) {
  bird.fly();
}

// create a new duck to use as an example
const duck1 = new Duck();
makeBirdFly(duck1); // Duck Flying!

// everything above works.
// nothing breaks the program.

// but lets say we have to add a bird that can't fly
// add a new bird that can't fly:
class Penguin extends Bird {
  // the method below is no longer needed because we updated the function tohave this logic. this class stays empty
  // fly() {
  //   throw new Error("Penguins cannot fly!");
  // }
}
const penguin1 = new Penguin();
makeBirdFly(penguin1); // Penguins cannot fly!

// The code above now violates the LSP because penguin is a subclass of bird
// but it cannot use the fly method

// you can fix this by doing something like this:
class Bird {}
class FlyingBird extends Bird {
  fly() {
    console.log("This bird can fly");
  }
}

// now just make duck extend flying bird
class Duck extends FlyingBird {
  fly() {
    console.log("Duck flying");
  }
}

// leave the Penguin class extending the Bird class

// update the makeBirdFly():

// function makeBirdFly(bird) {
//  if(bird instanceof FlyingBird) {
//    bird.fly();
//  } else {
//      console.log("This bird cannot fly")
//  }
// }

// now comment out the error thrown in the penguin class since its handled by the function now

// conclusion: since we're going to have multiple birds it makes sense to make two bird classes: Bird and FlyingBird to follow LSP

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/41043354#overview
