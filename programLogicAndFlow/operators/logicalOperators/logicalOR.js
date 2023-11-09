// used to combine two or more expressions and returns true if at least one of the expressions is true. 

// If all of the expressions are false, it returns false. 

// It's often used to make decisions based on multiple conditions.

// EXAMPLE:
const isSunny = true;
const isWarm = false;

if (isSunny || isWarm) {
    console.log("It's a nice day!");
} else {
    console.log("The weather is not ideal.");
}