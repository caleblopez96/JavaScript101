function isPalindrome(string) {
  return string.split('').reverse().join('') === string
}

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('taco')) // false