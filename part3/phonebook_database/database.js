const mongoose = require('mongoose');
const { customAlphabet } = require('nanoid');

const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_CONNECTION =
  `mongodb+srv://ronen:${MONGODB_PASSWORD}@cluster0.pydrn.mongodb.net/phonebook?` +
  `retryWrites=true&w=majority`;

class Database {
  nanoid = null;
  Contact = null;

  constructor() {
    this.nanoid = customAlphabet('123456789abcdefghijklmnopqrstuvwxy', 16);
  }

  #createModel() {
    this.Contact = mongoose.model('Contact', {
      _id: {
        type: String,
        default: () => this.nanoid(),
      },
      name: String,
      number: String,
    });
  }

  async connectToDatabase() {
    return mongoose
      .connect(MONGODB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connected to MongoDB');
        this.#createModel();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async fetchPersons() {
    return this.Contact.find({})
      .then((results) => {
        return { results: results, error: null };
      })
      .catch((err) => {
        console.error(err);
        return { results: null, error: err };
      });
  }

  async fetchPerson(id) {
    return this.Contact.findById(id)
      .then((result) => {
        return { results: result, error: null };
      })
      .catch((err) => {
        return { results: null, error: err };
      });
  }

  async addPerson(details) {
    const newPerson = new this.Contact({ ...details });
    return newPerson
      .save(details)
      .then((savedRecord) => {
        return { result: savedRecord, error: null };
      })
      .catch((error) => {
        return { result: null, error };
      });
  }
}

module.exports = Database;
