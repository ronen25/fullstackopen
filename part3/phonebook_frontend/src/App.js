import React, { useState, useEffect } from 'react';
import './index.css';

import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';

import { getAllData, deletePerson } from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const setStatusInfo = (message, isError) => {
    setStatus(message);
    setIsError(isError);

    setTimeout(() => {
      setStatus('');
      setIsError(false);
    }, 4000);
  };

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
          setStatusInfo(`Deleted ${item.name}`, false);
        })
        .catch((err) => setStatusInfo(`Could not delete ${item.name}: ${err}`, true));
    }
  };

  // Hook the service
  useEffect(() => {
    getAllData()
      .then((result) => {
        setPersons(result);
        setStatusInfo('', false);
      })
      .catch((err) => setStatusInfo(`Could not get data: ${err}`, true));
  }, []);

  return (
    <div>
      <h2>Phonebook (part 2.15)</h2>
      <Notification message={status} error={isError} />

      <SearchFilter filter={filter} onFilterChanged={onFilterChanged} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} onDeleteCallback={onDeleteClicked} />
    </div>
  );
};

export default App;
