// use the post method to send data to a server to
// create or update a resource

// Creating a new book: POST /api/books

// SYNTAX using express:
app.post('/', (req, res) => {
  // Create a new book
})

// EXAMPLE using express:
import express from 'express';
const app = express();
const port = 8080;

app.use(express.json()); // express middleware that parses json 

app.post('/api/books', (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  })

  newBook.save()
    .then(book => {
      res.status(201).json(book)
    })
    .catch(err => {
      res.status(400).json({ error: 'Error Occurred'})
    })
})