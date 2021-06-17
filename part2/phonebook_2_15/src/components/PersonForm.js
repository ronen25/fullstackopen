import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import { addNewPerson } from '../services/phonebook';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const onNameChanged = (event) => setNewName(event.target.value);
  const onPhoneChanged = (event) => setNewPhone(event.target.value);

  const resetInputs = () => {
    setNewName('');
    setNewPhone('');

    document.getElementById('inputName').value = '';
    document.getElementById('inputPhone').value = '';
  };

  const onAddClick = (event) => {
    event.preventDefault();

    // Try to find a duplicate
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} already exists in the phonebook.`);
      return;
    } else if (newName.length === 0) {
      alert('Contact name field is empty.');
      return;
    }

    const personDetails = {
      name: newName,
      number: newPhone,
      id: nanoid(),
    };

    // Put the data in the server
    addNewPerson(personDetails)
      .then((_) => {
        persons = persons.concat(personDetails);
        setPersons(persons);
      })
      .catch((err) => alert(err));

    resetInputs();
  };

  return (
    <form>
      <div>
        name: <input id='inputName' onChange={onNameChanged} />
      </div>

      <div>
        phone: <input id='inputPhone' onChange={onPhoneChanged} />
      </div>

      <div>
        <button type='submit' onClick={onAddClick}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
