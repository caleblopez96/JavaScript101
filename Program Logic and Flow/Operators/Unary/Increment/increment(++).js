// The increment (++) operator increases the count of the variable by 1

// SYNTAX:
// (++)

// pre increment: ++x --> increments value prior to execution
// post increment: x++ --> increments value after execution

// EXAMPLE:
let x = 5;
let y = 3;
console.log(x++); // 5
console.log(++y); // 4

// EXAMPLE:
class Counter {
  counter = 1;
  next() {
    return ++this.counter;
  }
}

const counter = new Counter();
console.log(counter.next()); // 2
console.log(counter.next()); // 3

// EXAMPLE:
class Counter2 {
  counter = 1;
  next() {
    return this.counter++;
  }
}

const counter2 = new Counter2();
console.log(counter2.next()); // 1
console.log(counter2.next()); // 2

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40741622#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
