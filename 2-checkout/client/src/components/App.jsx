import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm.jsx';
import AddressForm from './AddressForm.jsx';
import PaymentForm from './PaymentForm.jsx';
import Confirmation from './Confirmation.jsx';

const App = () => {
  // ======== STATES ========
  const [userInfo, setUserInfo] = useState([]);
  const [addressInfo, setAddressInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [nextForm, setNextForm] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [newSession, setNewSession] = useState(true);

  // ======== EFFECTS ========
  useEffect(() => {
    setUserInfo([]);
    setAddressInfo([]);
    setPaymentInfo([]);
    setNextForm(0);

    axios
      .get(`/checkout?cookie=${document.cookie}`)
      .then(({ data }) => {
        if (data.length) setNewSession(false);
        else setNewSession(true);
      })
      .catch((err) => console.error(err));
  }, [completed]);

  // ======== COMPONENT ========
  return (
    <div>
      <div>Your cart is full of stuff...</div>
      <div>
        {!newSession && (
          <div>Sorry, only one purchase per session is allowed!</div>
        )}
        {newSession && !nextForm && (
          <button
            className="btn checkout"
            onClick={() => setNextForm(nextForm + 1)}
            display={newSession}
          >
            Buy The Things!
          </button>
        )}
      </div>

      {nextForm > 0 && nextForm < 4 && (
        <UserForm
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          nextForm={nextForm}
          setNextForm={setNextForm}
        />
      )}

      {nextForm > 1 && nextForm < 4 && (
        <AddressForm
          addressInfo={addressInfo}
          setAddressInfo={setAddressInfo}
          nextForm={nextForm}
          setNextForm={setNextForm}
        />
      )}

      {nextForm > 2 && nextForm < 4 && (
        <PaymentForm
          paymentInfo={paymentInfo}
          setPaymentInfo={setPaymentInfo}
          nextForm={nextForm}
          setNextForm={setNextForm}
        />
      )}

      {nextForm > 3 && (
        <Confirmation
          userInfo={userInfo}
          paymentInfo={paymentInfo}
          addressInfo={addressInfo}
          nextForm={nextForm}
          completed={completed}
          setCompleted={setCompleted}
        />
      )}
    </div>
  );
};

export default App;
