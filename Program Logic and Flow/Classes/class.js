// classes are templates for creating objects.


// EXAMPLE: 
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  methodName() {

  }
}

console.log(new Person('Caleb', 'Lopez')); // Person {firstName: 'caleb', lastName: 'Lopez'}