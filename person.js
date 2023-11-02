import React, { useState } from 'react';

function Person() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />

      <h1>{fullName}</h1>
    </>
  );
}