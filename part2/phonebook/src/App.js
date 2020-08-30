import React, { useState } from 'react';
import './App.css';

import Contact from './components/Contact';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [newName, setNewName] = useState('');

  const onTextChanged = (event) => {
    setNewName(event.target.value);
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
      name: newName
    };
  
    setPersons(persons.concat(personDetails));
    setNewName('');
    document.getElementById("inputName").value = "";
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input id="inputName" onChangeCapture={onTextChanged}/>
        </div>
        <div>
          <button type="submit" onClick={onAddClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(person => <Contact key={person.name} contact={person} />)
      }
    </div>
  )
}

export default App;
