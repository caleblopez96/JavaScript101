// use setTimeout() to set a timer which executes some code after the timeout

// SYNTAX: 
setTimeout(() => { }, timeout)

function waitBeforeRunning(timeout) {
  setTimeout(() => {
    console.log("this should happen three seconds after function call")
  }, timeout);
}

waitBeforeRunning(3000) 