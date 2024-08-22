// use the put method to replace an existing resource with an updated version.

// updating an existing book: PUT /api/books{id}

app.put('/api/books:id', (res, rej) => {
  Book.findByIdUpdate(res.params.id, res.body, { new: true })
  .then(updatedBook => {
    if(!updatedBook) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.json(updatedBook)
  })
  .catch(err => {
    res.status(404).json({ error: 'Failed to update book, please try again' })
  })  
})