function isPalindrome(string) {
  return string.split('').reverse().join('') === string
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('taco'))

// function capitalizeWords(string) {
//   return string
//   .split('')
//   .map(word => word.charAt(0).toUpperCase())
// }

