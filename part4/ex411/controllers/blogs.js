const mongoose = require('mongoose');

class Blogs {
  constructor(mongoUrl) {
    mongoose
      .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('Connected to MongoDB.');
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  }
}

module.exports = { Blogs };
