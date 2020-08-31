import React, { useState } from 'react';
import './App.css';

import Contact from './components/Contact';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  const onNameChanged = (event) => setNewName(event.target.value);
  const onPhoneChanged = (event) => setNewPhone(event.target.value);
  const onFilterChanged = (event) => setFilter(event.target.value);

  const resetInputs = () => {
    setNewName("");
    setNewPhone("");

    document.getElementById("inputName").value = "";
    document.getElementById("inputPhone").value = "";
  };

  const onAddClick = (event) => {
    event.preventDefault();

    // Try to find a duplicate
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists in the phonebook.`);
      return;
    }
    else if (newName.length === 0) {
      alert("Contact name field is empty.");
      return;
    }
  
    const personDetails = {
      name: newName,
      number: newPhone
    };
  
    setPersons(persons.concat(personDetails));
    resetInputs();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input id="inputFilter" onChange={onFilterChanged} />
      </div>

      <h2>Add a new</h2>
      <form>
        <div>
          name: <input id="inputName" onChange={onNameChanged}/>
        </div>

        <div>
          phone: <input id="inputPhone" onChange={onPhoneChanged}/>
        </div>

        <div>
          <button type="submit" onClick={onAddClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons
          .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
          .map(person => <Contact key={person.name} contact={person} />)
      }
    </div>
  )
}

export default App;
