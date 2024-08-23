// use the a delete request to delete a specified resource

// deleting a book: DELETE /api/books/{id}

// SYNTAX using express:
app.delete('/', (req, res) => {
  // Delete the resource with the specified ID
})

// EXAMPLE using express
import express from 'express';
const app = express();

app.delete('api/books/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(deletedBook => {
    if(!deletedBook) {
      return res.status(404).json({ error: 'Book not found' })
    }
    res.json({ message: 'Book successfully created'})
  })
  .catch(err => {
    res.status(400).json({ error: 'Failed to delete book' })
  })
})