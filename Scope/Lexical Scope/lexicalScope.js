// Javascript uses lexical (static) scoping meaning the scope is not dynamic.

// The scope of the variable is determined when its declared.

// EXAMPLE:

let animal = "owl";

function printAnimal() {
  console.log(animal);
}

function alsoPrintAnimal() {
  let animal = "dog";
  printAnimal();
}

alsoPrintAnimal(); // owl
