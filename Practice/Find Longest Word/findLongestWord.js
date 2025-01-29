function findLongestWord(sentence) {
  const word = sentence.split(' ')
  let longestWord = ''

  word.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  return longestWord
}
console.log(findLongestWord('what is the longest word')) // 'longest



