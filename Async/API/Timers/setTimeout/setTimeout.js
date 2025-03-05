// Use setTimeout() to set a timer that executes a function after a specified delay

// Helps in delaying execution, scheduling tasks, or creating timed events

// SYNTAX:
// setTimeout(function, timeout)
// setTimeout(() => {}, timeout)

// PARAMETERS:
// function - the function to execute after the delay
// timeout (optional) - the time in milliseconds that the timer should wait before execution

// RETURNS:
// A timeout ID that can be used with clearTimeout() to cancel the timeout

// EXAMPLE:
setTimeout(() => {
  console.log("hello");
}, 5000); // "hello" --> 5 seconds after execution

// EXAMPLE:
function showNotification(message, duration) {
  const notification = document.createElement("div");
  notification.innerText = message;
  notification.className = "notification";
  document.body.appendChild(notification);

  setTimeout(function () {
    notification.remove();
  }, duration);
}

showNotification("Welcome Back!", 2000);

// REFERENCE:

// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746842#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
