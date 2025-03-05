// use setInterval to execute a function repeatedly

// SYNTAX:
// setInterval(function() {}, interval)
// setInterval(() => {}, interval);

// PARAMETERS:
// function - the function to execute after the delay
// timeout (optional) - the time in milliseconds that the timer should wait before execution

// RETURNS:
// an interval id used to clear the interval
//* its common to capture the id in a variable (intervalId)

// EXAMPLE:
setInterval(() => {
  console.log("it's been 2 seconds");
}, 2000);

// EXAMPLE:
function startCountdown(duration) {
  const h1 = document.querySelector("h1");
  let secondsRemaining = duration;
  let intervalId = setInterval(() => {
    h1.innerText = secondsRemaining;
    secondsRemaining -= 1;
  }, 1000);
}

// EXAMPLE:
const interval = 3000;

const intervalExample = setInterval(() => {
  console.log("Hello, world!");
}, interval);

// clear interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalExample);
}, 10000);

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746846#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval
