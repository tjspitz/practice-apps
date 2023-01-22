import React from "react";
import { useState } from 'react';

const UserForm = ({ userInfo, setUserInfo, nextForm, setNextForm }) => {

  // ======== STATES ========
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ======== HANDLERS ========
  const handleSubmit = () => {
    event.preventDefault();
    setUserInfo([firstname, lastname, email, password])
    setNextForm(nextForm + 1);
  };

  // ======== COMPONENT ========
  return (
    <form onSubmit={handleSubmit} >
      <label>First name:</label>
      <input value={firstname}
        placeholder="e.g. bob"
        required={true}
        onChange={(e) => setFirstname(e.target.value)}>
      </input>

      <label>Last name:</label>
      <input value={lastname}
        placeholder="e.g. bobberson" required={true}
        onChange={(e) => setLastname(e.target.value)}>
      </input>

      <label>Email:</label>
      <input value={email}
        placeholder="e.g. bob@bobmail.com"
        required={true}
        onChange={(e) => setEmail(e.target.value)}>
      </input>

      <label>Password:</label>
      <input value={password}
        placeholder="e.g. secretbob"
        required={true}
        onChange={(e) => setPassword(e.target.value)}>
      </input>

      <button type="submit">Next</button>
    </form>
  );

};

export default UserForm;