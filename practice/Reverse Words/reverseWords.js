function reverseWords(sentence) {
  return sentence
    .split(' ')
    .reverse()
    .join(' ')
}

console.log(reverseWords('this sentence needs to be reversed')) // reversed be to needs sentence this