// use the join() method to concatenate all elements of an array into a string.

// SYNTAX:
// array.join()
// array.join(separator)


const colorArray = ['red', 'green', 'white', 'black']

function joinAllEl(array) {
  return array.join(', ')
}

joinAllEl(colorArray) // 'red, green, white, black'
