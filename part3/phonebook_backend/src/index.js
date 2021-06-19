const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3001;

const generateID = () => {
  return Math.floor(Math.random() * 100000) + 1;
};

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

app.use(express.json());

// Configure morgan
app.use(
  morgan((tokens, request, response) => {
    return [
      tokens.method(request, response),
      tokens.url(request, response),
      tokens.status(request, response),
      tokens.res(request, response, 'content-length'),
      '-',
      tokens['response-time'](request, response),
      'ms',
      request.method === 'POST' ? JSON.stringify(request.body) : '',
    ].join(' ');
  })
);

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

app.post('/api/persons', (request, response) => {
  const payload = request.body;

  // Name or number missing
  if (!payload.hasOwnProperty('name') || !payload.hasOwnProperty('number')) {
    response.status(400).send({ error: 'Missing name or number' });
  }

  // Check for duplicate name
  if (notes.findIndex((item) => item.name === payload.name) != -1) {
    response.status(400).send({ error: `Duplicate entry for name ${payload.name}` });
  }

  const contact = { ...payload, id: generateID() };
  notes = notes.concat(contact);

  response.status(200).end();
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
