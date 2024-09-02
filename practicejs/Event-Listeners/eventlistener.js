// https://www.w3resource.com/javascript-exercises/event/index.php



//* COMPLETE
// 1. Write a JavaScript program that creates a button 
// and add a click event listener to log a message when it's clicked.
const button = document.createElement('button')
button.addEventListener('click', () => console.log('message'))
////////////////////////////////////////



//* COMPLETE
// Write a JavaScript function that changes the background color 
// of an element when a mouse enters it.
function changeBackgroundColor(element, color) {
  element.addEventListener('mouseover', () => {
    element.style.backgroundColor = color
  })
}
changeBackgroundColor('button', '#fafa')
////////////////////////////////////////



//* COMPLETE
// 9. Write a JavaScript program that adds a keydown event listener to a text input 
// to detect when the "Enter key" is pressed.
const input = document.createElement('input')
input.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    console.log('Enter pressed')
  }
})
////////////////////////////////////////



//* COMPLETE
// 10. Write a JavaScript function that listens for a 
// double click on an element and performs a specific action.
button.addEventListener('dblclick', () => {
  console.log('double click')
})
////////////////////////////////////////