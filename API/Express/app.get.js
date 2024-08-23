// use a get request to 'get' resources from a server

// retrieve a list of books: GET /api/books

// SYNTAX using express:
app.get('/', (req, res) => {
  // Retrieve and return a resource 
})

// EXAMPLE using express:
import express from 'express';
const app = express();

app.get('/api/books', (req, res) => {
  Book.find({})
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error occurred'});
    });
});
