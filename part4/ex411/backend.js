const config = require('./utils/config');

const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const { router } = require('./utils/middleware');
const { Blogs } = require('./controllers/blogs');

// Construct controller class
new Blogs(config.MONGODB_URL);

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(config.SERVER_PORT, () => {
  console.log(`Server running on port ${config.SERVER_PORT}`);
});
