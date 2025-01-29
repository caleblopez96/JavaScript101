function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
console.log(capitalizeWords('hello world im caleb')) // 'Hello World Im Caleb'