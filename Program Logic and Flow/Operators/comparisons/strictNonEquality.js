// use strict non equality to compare two values or expressions for inequality without performing type coercion. 
// checks whether two values are not equal in both value and data type.

5 !== 5;      // false, the values are equal and of the same type
5 !== "5";    // true, because the values are equal, but not of same type
"Hello" !== "World";  // true, because both strings are different
true !== false;      // true, because the types are the same (both are booleans), but the values are different
null !== undefined // true , the null and undefined are not the same type