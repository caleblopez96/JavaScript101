// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php



//* COMPLETE
// 1. Write a JavaScript program that displays the largest integer among two integers.
function largerInt(num1, num2) {
  return num1 > num2 ? num1 : num2
  // if(num1 > num2) {
  //   return num1
  // } else {
  //   return num2
  // }
}
largerInt(5, 12) // 12

// OR

function largerInt2(...numbers) {
  return Math.max(...numbers)
}
console.log(largerInt2(2,3,4,1,22,55,230,21,5,55)) // 230
////////////////////////////////////////



//* COMPLETE
// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the
for(let i = 0; i <= 15; i++) {
  console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`)
  // if(i % 2 === 0) {
  //   console.log(`${i} is even`)
  // } else {
  //   console.log(`${i} is odd`)
  // }
}
////////////////////////////////////////




// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *

for (let i = 1; i <= 5; i++) {  // Outer loop for rows (from 1 to 5)
  let stars = '';  // Initialize an empty string for each row
  for (let j = 1; j <= i; j++) {  // Inner loop to append asterisks
    stars += '* ';
  }
  console.log(stars);
}