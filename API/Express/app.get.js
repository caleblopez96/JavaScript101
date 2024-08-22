// use a get request to 'get' resources from a server

// retrieve a list of books: GET /api/books

// EXAMPLE:
app.get('/api/books', (res, rej) => {
  Book.find({}
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error occurred'})
    })
  )
})