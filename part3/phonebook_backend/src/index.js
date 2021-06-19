const express = require('express');

const app = express();
const port = 3001;

let notes = [
  {
    id: 1,
    name: 'Ronen L',
    number: '375-3478235',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '33-67-242424',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '53-346536',
  },
];

app.get('/api/persons', (request, response) => {
  response.json(notes);
});

app.get('/api/persons/:id', (request, response) => {
  // Find the ID in the notes
  const note = notes.find((item) => item.id === Number(request.params.id));
  if (!note) {
    return response.status(404).end();
  }

  response.json(note);
});

app.delete('/api/persons/:id', (request, response) => {
  const note = notes.find((item) => item.id === Number(request.params.id));
  if (!note) {
    return response.status(404).end();
  }

  notes = notes.filter((item) => item.id !== note.id);

  response.status(204).end();
});

app.get('/info', (request, response) => {
  const thisDate = new Date();
  response.set('Content-Type', 'text/html');

  response.write(`Phonebook has info for ${notes.length} people.`);
  response.write('\r\n\r\n');
  response.end(thisDate.toString());
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
