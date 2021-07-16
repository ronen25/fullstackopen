const mongoose = require('mongoose');

// We should have 3 commandline args: password, name and phone number.
const [_node, _file, password, name, phone] = process.argv;

const CONNECTION_STRING =
  `mongodb+srv://ronen:${password}@cluster0.pydrn.mongodb.net` +
  `/phonebook?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

const Contact = mongoose.model('Contact', {
  name: String,
  phone: String,
});

// No arguments = find all in collection
if (process.argv.length === 3) {
  Contact.find({}).then((result) => {
    console.log(`Total ${result.length} results`);
    result.forEach((contact) => {
      console.log(`${contact.name}\t${contact.phone}`);
    });

    mongoose.connection.close();
  });
} else {
  const newContact = new Contact({
    name,
    phone,
  });

  newContact.save().then((result) => {
    mongoose.connection.close();
  });
}
