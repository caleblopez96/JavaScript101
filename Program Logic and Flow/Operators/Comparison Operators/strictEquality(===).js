// The triple equals (===) operator performs a strict equality comparison. 
// It checks whether both the values and their types are the same. 

// This operator does not perform any type coercion and is generally considered safer for comparing values. For example:

console.log(5 === "5"); // false (number and string are of different types)

console.log(true === 1); // false (boolean and number are of different types)

console.log(null === undefined); // false (null and undefined are of different types)

// It is recommended to use the === (strict equality) operator whenever possible to avoid unexpected behavior and ensure accurate comparisons. 
// When you're comparing values for equality, you should consider both their values and their types to make the correct decision.