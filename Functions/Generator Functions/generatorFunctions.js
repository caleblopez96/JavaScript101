// EXAMPLE: Generator function that generates an unlimited sequence of even numbers

// SYNTAX:
// function* functionName() {}

// Uses `yield` instead of `return` to return values back

// RETURNS:
// A new generator object

// EXAMPLE: A generator that yields an infinite sequence of even numbers
function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}
const evenNumberGenerator = evens(10);
console.log(evenNumberGenerator.next()); // { done: false, value: 10 }
console.log(evenNumberGenerator.next()); // { done: false, value: 12 }
console.log(evenNumberGenerator.next()); // { done: false, value: 14 }
console.log(evenNumberGenerator.next()); // { done: false, value: 16 }
console.log(evenNumberGenerator.next()); // { done: false, value: 18 }

// EXAMPLE: A generator that yields a finite list of cat names
function* myCats() {
  yield "Blue";
  yield "Kitty";
  yield "Cream";
}
let catGenerator = myCats();
console.log(catGenerator.next()); // { done: false, value: 'Blue' }
console.log(catGenerator.next()); // { done: false, value: 'Kitty' }
console.log(catGenerator.next()); // { done: false, value: 'Cream' }
console.log(catGenerator.next()); // { done: true, value: undefined }

// EXAMPLE: Fibonacci sequence generator
function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let fiboSeqGen = fibonacci();
console.log(fiboSeqGen.next()); // { done: false, value: 0 }
console.log(fiboSeqGen.next()); // { done: false, value: 1 }
console.log(fiboSeqGen.next()); // { done: false, value: 1 }
console.log(fiboSeqGen.next()); // { done: false, value: 2 }
console.log(fiboSeqGen.next()); // { done: false, value: 3 }
console.log(fiboSeqGen.next()); // { done: false, value: 5 }
console.log(fiboSeqGen.next()); // { done: false, value: 8 }
console.log(fiboSeqGen.next()); // { done: false, value: 13 }
console.log(fiboSeqGen.next()); // { done: false, value: 21 }
console.log(fiboSeqGen.next()); // { done: false, value: 34 }
