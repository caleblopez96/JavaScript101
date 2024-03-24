// Returns new array of elements that filter.
// does NOT mutate original array.
//! returns NEW array.

// SYNTAX: 
// filter(callbackFn)
// filter(callbackFn, thisArg)
// array.filter((callbackFn) => {/.../});
// array.filter(callbackFn(arguments) {/.../});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// EXAMPLE: 
[ 1, 2, 3, 4, 5] .filter((num) => num % 2); // [1, 3, 5]

const products = [
    { name: 'Product A', category: 'Electronics', price: 50 },
    { name: 'Product B', category: 'Clothing', price: 50 },
    { name: 'Product C', category: 'Electronics', price: 150 },
    { name: 'Product D', category: 'Home', price: 75 }
]

const electronicsProducts = products.filter(product => product.category === 'Electronics');

console.log(electronicsProducts); // [{...}, {...}]
// 0: {name: 'Product A', category: 'Electronics', price: 50} 
// 1: {name: 'Product C', category: 'Electronics', price: 150}


// EXAMPLE: Copying array 
const original = [1, 2, 3];
const copy = original.filter(() => true);
console.log(original, copy);

// EXAMPLE:
const books = [{
    title: 'Good Omen',
    authors: ['terry pratchett', 'neil gaiman'],
    rating: 4.25,
    genre: ['fiction', 'fantasy']
},
{
    title: 'changing my mind', 
    authors: ['zadie smith'],
    rating: 3.83,
    genre: ['nonfiction', 'essay']
},
{
    title: 'bone the complete edition',
    authors: ['jeff smith'],
    rating: 4.42,
    genre: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'american gods',
    authors: ['neil gaiman'],
    rating: 4.11,
    genre: ['fiction', 'fantasy']
},
{
    title: 'a gentleman in moscow',
    authors: ['amor towles'],
    rating: 4.54,
    genre: ['fiction', 'historical fiction']
},
{
    title: 'the name of the wind',
    authors: ['patrick rothfuss'],
    rating: 4.54,
    genre: ['fiction', 'fantasy']
},
{
    title: 'the overstory',
    authors: ['richard powers'],
    rating: 4.19,
    genre: ['fiction', 'short stories']
},
{
    title: 'the way of kings',
    authors: ['brandon sanderson'],
    rating: 4.65,
    genre: ['fantasy', 'epic']
}
];

const highRating = books.filter(function(book) {
    return book.rating > 4.3
});

console.log(highRating);
// {title: 'bone the complete edition', authors: Array(1), rating: 4.42, genre: Array(3)}
// {title: 'a gentleman in moscow', authors: Array(1), rating: 4.54, genre: Array(2)}
// {title: 'the name of the wind', authors: Array(1), rating: 4.54, genre: Array(2)}
// {title: 'the way of kings', authors: Array(1), rating: 4.65, genre: Array(2)}