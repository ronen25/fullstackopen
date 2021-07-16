import React from 'react';

const Contact = ({ contact, onDeleteCallback }) => {
  return (
    <div>
      {contact.name} {contact.number}
      <span>&nbsp;</span>
      <button id={'btn_' + contact.id} type='submit' onClick={onDeleteCallback}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
