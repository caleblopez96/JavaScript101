// 1. Write a JavaScript function that reverses a number.
function reverseNumber(number) {
  const reversedString = number.toString().split('').reverse().join('')
  return parseInt(reversedString, 10)
}
console.log(reverseNumber(512)); // 215
/////////////////////////////////////////////



//* COMPLETE
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
/////////////////////////////////////////////




//* COMPLETE
// 6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function longestWord(string) {

  let wordArray = string.split(" ")

  let longestWord = ''

  wordArray.forEach(word => {
    if(word.length > longestWord.length) {
      longestWord = word
    }
  });
  return longestWord
}
longestWord('test testing') // 'testing'
/////////////////////////////////////////////




//* COMPLETE
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowelCounter(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0

  let wordArray = string.toLowerCase().split("")
  wordArray.forEach(letter => {
    if(vowels.includes(letter)){
      count++
    }
  })
  return count
}
vowelCounter('aeiom') // 4
/////////////////////////////////////////////




//* COMPLETE
// 16. Write a JavaScript function to extract unique characters from a string.
function extractUniqueCharacters(string) {
  let uniqueCharacters = new Set(string)
  return [...uniqueCharacters].join('')
}

console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog")) //thequickbrownfxjmpsvlazydg





// Write a JavaScript function to get the number of occurrences of each letter in a specified string.






// Write a JavaScript function that returns array elements larger than a number.
function elLargerThan(array, n) {
  return array.filter(element => element > n)
}

elLargerThan([1,2,3],1) // [2, 3]