// The double equals (==) operator performs a loose or abstract equality comparison. 

// It attempts to convert the operands to the same type before making the comparison. 

// This can sometimes lead to unexpected results due to type coercion. For example:

console.log(5 == "5"); // true (number 5 is coerced to string "5")

console.log(true == 1); // true (boolean true is coerced to number 1)

console.log(null == undefined); // true (both are considered equal)