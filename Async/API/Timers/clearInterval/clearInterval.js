// clear interval allows you to stop an interval

// SYNTAX:
// clearInterval(intervalId)

// PARAMETERS:
// intervalId - id of the interval to clear

// RETURNS:
// None (undefined)

// EXAMPLE:
function startCountdown(duration) {
  // theoretical h1
  const h1 = document.querySelector("h1");
  let secondsRemaining = duration;
  const intervalId = setInterval(() => {
    h1.innerText = secondsRemaining;
    secondsRemaining -= 1;

    if (secondsRemaining < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// REFERENCES:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746850#overview

// MDN:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746850#overview
