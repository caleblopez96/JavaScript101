// In JavaScript, every object has an internal reference to a prototype (__proto__ in chrome).

// The prototype contains shared methods and properties, preventing them from being duplicated for each instance.

// EXAMPLE: OLD VS NEW
// OLD
function Vehicle1(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function () {
    return `Starting`;
  };

  Vehicle1.prototype.honk = function () {
    return `Beep`;
  };
}
const vehicle1 = new Vehicle1("Ford", "F-150", "2025");
const vehicle2 = new Vehicle1("Honda", "Civic", "2018");
// references the same function thanks to prototype
console.log(vehicle1.honk === vehicle2.honk); // true

// EXAMPLE: NEW
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function () {
      return `Starting`;
    };
  }
  honk() {
    return `Beep`;
  }
}

const vehicle3 = new Vehicle1("Ford", "F-150", "2025");
const vehicle4 = new Vehicle1("Honda", "Civic", "2018");
// class syntax allows for this behavior by default
console.log(vehicle3.honk === vehicle4.honk); // true
