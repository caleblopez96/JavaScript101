// The .requestAnimationFrame() method tells the browser you wish to perform an animation.
// It requests the browser to call a user-supplied callback function before the next repaint.

// SYNTAX:
// requestAnimationFrame(callback)

// PARAMETERS:
// callback - the function to call when its time to update the animation
// timestamp (optional) - gives you the timestamp --> useful for calculating time between animations

// RETURNS:
// the request ID - can be passed to .requestAnimationFrame() to cancel the refresh callback request

// EXAMPLE:
// codepen working example:
// https://codepen.io/caleblopez/pen/YPzVRbr

const boxInterval = document.querySelector("#boxInterval");
const animationFrame = document.querySelector("#boxAnimationFrame");

let intervalAngle = 0;
let animationAngle = 0;

// animation without animationFrame
function animateWithInterval() {
  boxInterval.style.transform = "rotate(" + intervalAngle + "deg)";
  intervalAngle += 2;
}

// animation with requestAnimationFrame
function animateWithAnimationFrame() {
  boxAnimationFrame.style.transform = "rotate(" + animationAngle + "deg)";
  animationAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);
}

setInterval(animateWithInterval, 16); // 16 simulates 60 fps

requestAnimationFrame(animateWithAnimationFrame);

// REFERENCE:
// COLT STEELE:
// https://www.udemy.com/course/pro-javascript/learn/lecture/40746870#overview

// MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
