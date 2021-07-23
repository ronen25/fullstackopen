require('dotenv').config();
const process = require('process');

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URL = `mongodb+srv://ronen:${MONGODB_PASSWORD}@cluster0.pydrn.mongodb.net/bloglist?retryWrites=true&w=majority`;
const SERVER_PORT = 3003;

module.exports = {
  MONGODB_URL,
  MONGODB_PASSWORD,
  SERVER_PORT,
};
