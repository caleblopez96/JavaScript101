// var - legacy keyword used to declare variables.

// SYNTAX:
// var name1;
// var name1 = value1;

// FUNCTION SCOPED - hoisted

// variables declared with var can be reassigned.

// var can conflict with window methods

var color = "red";

function blah() {
  console.log(color); // red
  var animal = "animal";
  console.log(animal); // animal
}
blah();
// console.log(animal); --> animal is not defined

// if blocks dont create a new scope
if (true) {
  var food = "chicken";
}
console.log(food); // chicken

// var can conflict with window methods and window properties
// EXAMPLE: overwriting the window proprety .origin
console.log(window.origin); // chrome://new-tab-page
var origin = "America";
console.log(window.origin); // America
