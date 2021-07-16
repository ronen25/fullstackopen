import React from 'react';

const Notification = ({ message, error }) => {
  const messageStyle = {
    backgroundColor: 'grey',
    color: error ? 'maroon' : 'darkgreen',
    borderRadius: '4px',
    border: error ? '4px solid maroon' : '4px solid darkgreen',
    fontWeight: 'bold',
    margin: '3px',
    padding: '3px',
  };

  if (message === '') return <div></div>;

  return (
    <div style={messageStyle}>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
