// 1. Write a JavaScript function that reverses a number.
function reverseNumber(number) {
  const reversedString = number.toString().split('').reverse().join('')
  return parseInt(reversedString, 10)
}
console.log(reverseNumber(512)); // 215
/////////////////////////////////////////////




// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
function alphabetize(string) {
  return Array.from(string).sort().join('')
}

console.log(alphabetize('a, b, e, c, d'))
/////////////////////////////////////////////





// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function capitalizeTheFirstLetter(string){
  const wordArray = string.split()
  const capitalizeLetters = wordArray.map((word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return capitalizeLetters.join('')
}
capitalizeTheFirstLetter('hello there')