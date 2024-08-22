// use the post method to send data to a server to
// create or update a resource

// Creating a new book: POST /api/books

app.post('/api/books', (res, rej) => {
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