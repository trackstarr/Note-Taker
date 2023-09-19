const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// API Routes
app.get('/api/notes', (req, res) => {
  const notesData = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  res.json(notesData);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notesData = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  newNote.id = Date.now().toString(); // Assign a unique ID to the note
  notesData.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(notesData));
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const notesData = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
  const updatedNotesData = notesData.filter((note) => note.id !== noteId);
  fs.writeFileSync('db/db.json', JSON.stringify(updatedNotesData));
  res.json({ message: 'Note deleted' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
