// .unshift() adds the specified elements to the beginning of an array.

// SYNTAX:
// .unshift()
// .unshift(element1)
// .unshift(element1, element2)
// .unshift(element1, element2, ..., elementN)

// PARAMETERS:
// element1, ..., elementN - the elements to add to the front of the array

// RETURNS:
// The new length of the array.

// MUTATION:
// Mutates the original array.

// EXAMPLE:
let chore1 = "Dishes";
let chore2 = "Trash";
let chore3 = "Laundry";

let toDoList = [chore1, chore2, chore3]; // ['Dishes', 'Trash', 'Laundry']

function addChore(chore) {
  toDoList.unshift(chore);
}

addChore("Homework");
console.log(toDoList); // ['Homework', 'Dishes', 'Trash', 'Laundry']

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
