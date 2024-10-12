function removeDuplicates(string) {
  return [...new Set(string)].join('')
}
console.log(removeDuplicates('faang')) // fang