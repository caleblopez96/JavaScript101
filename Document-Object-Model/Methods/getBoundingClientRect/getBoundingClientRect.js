// Use element.getBoundingClientRect() to obtain the position of an element 
// relative to the clients viewport.

// getBoundingClientRect() returns a DOMRect object with accessible
// properties about the position of the object


// SYNTAX: 
element.getBoundingClientRect();


// EXAMPLE:

const button = document.querySelector('button');

const buttonPosition = button.getBoundingClientRect(); // buttonPosition becomes the DOMRect

console.log(buttonPosition); 
/* 
{
  "x": 355.70001220703125,
  "y": 202.10000610351562,
  "width": 75,
  "height": 35,
  "top": 202.10000610351562,
  "right": 430.70001220703125,
  "bottom": 237.10000610351562,
  "left": 355.70001220703125
}







*/