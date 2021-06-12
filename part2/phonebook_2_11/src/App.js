import React, { useState, useEffect } from 'react';
import './App.css';

import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';

const axios = require('axios');

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');

  const onFilterChanged = (event) => setFilter(event.target.value);

  // Hook for fetching data from json server
  const effectGetData = () => {
    axios
      .get('http://localhost:3001/persons')
      .catch(error => alert(error))
      .then(response => setPersons(response.data));
  };

  useEffect(effectGetData, []);

  return (
    <div>
      <h2>Phonebook (part 2.11)</h2>
      <SearchFilter filter={filter} onFilterChanged={onFilterChanged} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  );
}

export default App;
