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
  
    const personDetails = {
      name: newName
    };
  
    setPersons(persons.concat(personDetails));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChangeCapture={onTextChanged}/>
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
