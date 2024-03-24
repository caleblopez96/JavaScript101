// spread extracts values from iterables into individual elements.

// EXAMPLE: unpacking array of objects
const arrayOfObject = [
    {key: 'value' },
    {key: 'value2'},
    {key: 'value3'}
]
console.log(arrayOfObject); // [{...}, {...}, {...}] leaves objects inside of array
console.log(...arrayOfObject); // {key: 'value'} {key: 'value'} {key: 'value'} 

// EXAMPLE: Combining objects
const firstName = {first: 'first'}
const lastName = {last: 'last'}
const fullName = {...firstName, ...lastName}
console.log(fullName); // {first: 'first', last: 'last'}