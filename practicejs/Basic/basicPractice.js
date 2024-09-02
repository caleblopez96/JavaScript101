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




// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  





// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  