// A class should not be forced to implement interfaces it does not use

// Violating ISP: In the example below, the Robot class is forced to implement the eat
// method even though it doesn't need it, which violates the Interface Segregation Principle (ISP).

interface Worker {
  work(): void;
  eat(): void;
}

// @ts-ignore
class Manager implements Worker {
  work() {
    console.log("Managing people and projects");
  }

  eat() {
    console.log("Eating lunch during break");
  }
}

// @ts-ignore
class Developer implements Worker {
  work() {
    console.log("Writing code");
  }

  eat() {
    console.log("Eating at my desk");
  }
}

// @ts-ignore
// A new class that violates the ISP
class Robot implements Worker {
  work() {
    console.log("Working without rest");
  }

  eat() {
    // robots can't eat, but the method still has to be implemented
    throw new Error("Robots don't eat!");
  }
}
// @ts-ignore
const manager = new Manager();
manager.work();
manager.eat();

// @ts-ignore
const developer = new Developer();
developer.work();
developer.eat();

// @ts-ignore
const robot = new Robot();
robot.work();
robot.eat(); // throws error
// In this case, the Robot class is forced to implement the eat method even though it doesn't need it, which violates the Interface Segregation Principle (ISP).

// Following ISP: Separate interfaces for `work` and `eat`

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}
// @ts-ignore
class Manager implements Workable, Eatable {
  work() {
    console.log("Managing people and projects");
  }

  eat() {
    console.log("Eating lunch during break");
  }
}
// @ts-ignore
class Developer implements Workable, Eatable {
  work() {
    console.log("Writing code");
  }

  eat() {
    console.log("Eating at my desk");
  }
}
// @ts-ignore
class Robot implements Workable {
  work() {
    console.log("Working without rest");
  }
}
// @ts-ignore
const manager = new Manager();
manager.work();
manager.eat();
// @ts-ignore
const developer = new Developer();
developer.work();
developer.eat();
// @ts-ignore
const robot = new Robot();
robot.work(); // no error now as robot isnt forced to implement the method

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/41043356#overview
