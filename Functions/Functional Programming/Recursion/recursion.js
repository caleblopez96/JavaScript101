// recursion is a function that calls itself

// recursive functions invoke the same function with a different input until you reach your base case

// a base case is the condition when the recursion ends.
// without a base case, you create the infinite loop equivalent of a function called a stack overflow

// EXAMPLE:
// step 1: if(num <= 0) {console.log("all done"); return;} --> skipped because the supplied num isnt 0. if it is, it just ends.
// step 2: console.log(num) --> num argument is logged to the console
// step 3: num-- --> subtract 1 from num
// step 4: call the countdown function again until the num <= 0
function countDown(num) {
  // base case: this doesnt run until num <= 0
  if (num <= 0) {
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  // recursive call
  countDown(num);
}
console.log(countDown(5)); // 5, 4, 3, 2, 1

// EXAMPLE: non-recursive factorial
function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= 1;
  }
  return result;
}

// EXAMPLE: recursive factorial
function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// REFERENCES:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746900#overview
// https://www.youtube.com/watch?v=lMBVwYrmFZQ

/* 
Martin and the Dragon:

the dragon can only evaluate the first number of martins list.

so martin decides to remove the first number each time and repeat the same task with a different list

no odds(3142 5798 6550 5914)
      no odds(5798 6550 5914)
            no odds(6550 5914)
                  no odds(5914)
*/
