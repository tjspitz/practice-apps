import React from "react";
import {useState} from 'react';

const PaymentForm = ({paymentInfo, setPaymentInfo, nextForm, setNextForm}) => {

    // ======== STATES ========
    const [cc, setCc] = useState('');
    const [exp, setExp] = useState('');
    const [ccv, setCcv] = useState('');
    const [billZip, setBillZip] = useState('');

    // ======== HANDLERS ========
    const handleSubmit = () => {
      event.preventDefault();
      setPaymentInfo([cc, exp, ccv, billZip]);
      setNextForm(nextForm + 1);
    };

    // ======== COMPONENT ========
    return (
      <form onSubmit={handleSubmit} >
        <label>Credit Card #:</label>
        <input value={cc}
          placeholder="e.g. 12345678901234"
          required={true}
          onChange={(e) => setCc(e.target.value)}>
        </input>

        <label>Expiration Date:</label>
        <input value={exp}
          placeholder="e.g. 02/02/2023" required={true}
          onChange={(e) => setExp(e.target.value)}>
        </input>

        <label>CCV Digits:</label>
        <input value={ccv}
          placeholder="e.g. 123"
          required={true}
          onChange={(e) => setCcv(e.target.value)}>
        </input>

        <label>Billing Zipcode:</label>
        <input value={billZip}
          placeholder="e.g. 12345"
          required={true}
          onChange={(e) => setBillZip(e.target.value)}>
        </input>

        <button type="submit">Next</button>
      </form>
    );

};

export default PaymentForm;