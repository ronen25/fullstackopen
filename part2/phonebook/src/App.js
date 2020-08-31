import React, { useState } from 'react';
import './App.css';

import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [filter, setFilter] = useState('');

  const onFilterChanged = (event) => setFilter(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} onFilterChanged={onFilterChanged} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
}

export default App;
