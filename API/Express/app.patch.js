// use a patch request to create partial resource updates

// partial resource update: PATCH /api/books/{id}

// SYNTAX using express:

app.patch('/', (req, res) => {
  // Create partial resource updates
})

// EXAMPLE using express:
import express from 'express';
const app = express();
const port = 8080;

app.use(express.json()); // express middleware that parses json 

app.patch('/api/books/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  Book.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
    .then(updatedBook => {
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(updatedBook);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error occurred while updating the book' });
    });
});

