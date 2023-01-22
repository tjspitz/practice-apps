import React from "react";
import { useState } from 'react';

const AddressForm = ({ addressInfo, setAddressInfo, nextForm, setNextForm }) => {

  // ======== STATES ========
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  // ======== HANDLERS ========
  const handleSubmit = () => {
    event.preventDefault();
    setAddressInfo([street, city, state, zip]);
    setNextForm(nextForm + 1);
  };

  // ======== COMPONENT ========
  return (
    <form onSubmit={handleSubmit} >
      <label>Street number:</label>
      <input value={street}
        placeholder="e.g. 1234 S Roady Rd"
        required={true}
        onChange={(e) => setStreet(e.target.value)}>
      </input>

      <label>City:</label>
      <input value={city}
        placeholder="e.g. Skagway" required={true}
        onChange={(e) => setCity(e.target.value)}>
      </input>

      <label>State:</label>
      <input value={state}
        placeholder="e.g. AK"
        required={true}
        onChange={(e) => setState(e.target.value)}>
      </input>

      <label>Zipcode:</label>
      <input value={zip}
        placeholder="e.g. 12345"
        required={true}
        onChange={(e) => setZip(e.target.value)}>
      </input>

      <button type="submit">Next</button>
    </form>
  );
  
};

export default AddressForm;