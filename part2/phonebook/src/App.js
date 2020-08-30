import React, { useState } from 'react';
import './App.css';

import Contact from './components/Contact';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const onNameChanged = (event) => setNewName(event.target.value);
  const onPhoneChanged = (event) => setNewPhone(event.target.value);

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
      phone: newPhone
    };
  
    setPersons(persons.concat(personDetails));
    resetInputs();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input id="inputName" onChangeCapture={onNameChanged}/>
        </div>

        <div>
          phone: <input id="inputPhone" onChangeCapture={onPhoneChanged}/>
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
