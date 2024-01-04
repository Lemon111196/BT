// import React from 'react'
import { useState } from "react";

export default function Dashboard() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState<string>('');

  function handleFirstNameChange(e: any) {
    setFirstName(e.target.value);
    console.log(e.target.value);
  }

  function handleLastNameChange(e: any) {
    setLastName(e.target.value);
    console.log(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

