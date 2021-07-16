import React from 'react';

import Contact from './Contact';

const Persons = ({ persons, filter, onDeleteCallback }) => {
  return persons
    .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map((person) => (
      <Contact key={person.name} contact={person} onDeleteCallback={onDeleteCallback} />
    ));
};

export default Persons;
