require('dotenv').config();
const express = require('express');
const Database = require('./database');

const app = express();
const port = 3001;

async function main() {
  // Create database handle
  db = new Database();
  await db.connectToDatabase();

  app.use(express.json());

  app.get('/api/persons', async (request, response) => {
    const { results, error } = await db.fetchPersons();
    if (error) {
      return response.status(400).json(error);
    }

    return response.status(200).json(results);
  });

  app.get('/api/persons/:id', async (request, response) => {
    const { result, error } = await db.fetchPerson(request.body.id);
    if (error) {
      return response.status(400).json(error);
    }

    return response.status(200).json(result);
  });

  app.delete('/api/persons/:id', (request, response) => {});

  app.post('/api/persons', async (request, response) => {
    console.log(request.body);
    const { result, error } = await db.addPerson(request.body);
    if (error) {
      return response.status(400).json(error);
    }

    return response.status(200).json(result);
  });

  app.get('/info', (request, response) => {});

  // Start server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main();
