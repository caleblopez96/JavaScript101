// .append() appends a new value onto an exisiting header

// SYNTAX:
// .append(name, value)

// PARAMETERS:
// name - the name of the HTTP header you want to add
// value - the value of the HTTP header you want to add

// RETURNS:
// none

// EXAMPLE:
const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers/append
