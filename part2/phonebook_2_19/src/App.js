import React, { useState, useEffect } from 'react';
import './App.css';

import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';

import { getAllData, deletePerson } from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');

  const onFilterChanged = (event) => setFilter(event.target.value);

  const onDeleteClicked = (event) => {
    const item_id = event.target.id.split('btn_')[1];
    const item = persons.find((item) => item.id === item_id);

    // Ask user for confirmation
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      deletePerson(item_id)
        .then((_) => {
          const newPersons = persons.filter((item) => item.id !== item_id);
          setPersons(newPersons);
        })
        .catch((err) => alert(err));
    }
  };

  // Hook the service
  useEffect(() => {
    getAllData()
      .then((result) => {
        setPersons(result);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h2>Phonebook (part 2.15)</h2>
      <SearchFilter filter={filter} onFilterChanged={onFilterChanged} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} onDeleteCallback={onDeleteClicked} />
    </div>
  );
};

export default App;
