// 1. Write a JavaScript program to display the current day and time in the following format.  

function displayCurrentDateAndTime(){
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date;
  let currentDay = daysOfWeek[date.getDay()]
  let currentTime = date.toLocaleTimeString()
  console.log(`Today is ${currentDay}. Current time is ${currentTime}`)
}
displayCurrentDateAndTime() // 
////////////////////////////////////////




//* COMPLETE
// Write a JavaScript program to check a pair of numbers and return true if 
// one of the numbers is 50 or if their sum is 50.  
function fiftyFunc(num1, num2){
  return num1 === 50 || num2 === 50 || (num1 + num2 === 50)
}
fiftyFunc(40, 40) // false
fiftyFunc(50, 20) // true
fiftyFunc(25, 25) // true
////////////////////////////////////////



//* COMPLETE
// Write a JavaScript program where the program takes a random integer between 1 and 10, 
// and the user is then prompted to input a guess number. 
// The program displays a message "Good Work" if the input matches 
// the guess number otherwise "Not matched". 

function numGenerator(num){
  let randomNumber = Math.floor(Math.random() * 10) + 1
  if(num === randomNumber) {
    console.log(`${randomNumber} was the random number! Good work.`)
  }
  else {
    console.log(`${randomNumber} was the random number--not matched`)
  }
}

numGenerator()
////////////////////////////////////////