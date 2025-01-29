function countVowels(string) {
  const vowels = 'aeiouAEIOU'
  let count = 0

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++
    }
  }
  return count
}

console.log(countVowels('tearoust')) // 4
