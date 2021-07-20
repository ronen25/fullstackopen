require('dotenv').config();
const express = require('express');
const cors = require('cors');

const Database = require('./database');

const app = express();
const port = 3001;

async function main() {
  // Create database handle
  db = new Database();
  await db.connectToDatabase();

  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:3000',
    })
  );

  app.get('/persons', async (request, response) => {
    const { results, error } = await db.fetchPersons();
    if (error) {
      return response.status(400).json(error);
    }

    return response.status(200).json(results);
  });

  app.get('/persons/:id', async (request, response) => {
    const { result, error } = await db.fetchPerson(request.body.id);
    if (error) {
      return response.status(400).json(error);
    }

    return response.status(200).json(result);
  });

  app.delete('/persons/:id', async (request, response) => {
    const { result, error } = await db.deletePerson(request.body.id);
    if (error) {
      return response.status(500).json(error);
    }
  });

  app.post('/persons', async (request, response) => {
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
