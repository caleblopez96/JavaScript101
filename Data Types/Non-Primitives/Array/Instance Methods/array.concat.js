// use .concat() to concatenate arrays

// SYNTAX:
// .concat()
// .concat(value1, value2 /*...*/ valueN)

// PARAMETERS:
// value1, ..., valueN - arrays and/or values to concatenate to array

// RETURNS:
// new concatenated array instance

// EXAMPLE:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayA = ["a", "b", "c"];
const arrayB = ["d", "e", "f"];

function arrayConcatenate(...arrays) {
  return [].concat(...arrays);
}

console.log(arrayConcatenate(array1, array2, arrayA, arrayB)); // [1, 2, 3, 4, 5, 6, "a", "b", "c" "d", "e", "f"]
