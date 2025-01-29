// use setInterval to execute code over an interval

// SYNTAX:
// setInterval(() => { }, interval);

// EXAMPLE:
const interval = 3000

const intervalExample = setInterval(() => {
  console.log('Hello, world!')
}, interval)

// clear interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalExample)
}, 10000);

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval