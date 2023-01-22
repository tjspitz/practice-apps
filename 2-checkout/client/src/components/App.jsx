import React from "react";
import { useState, useEffect } from 'react';
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

  // ======== EFFECTS ========
  useEffect(() => {
    setUserInfo([]);
    setAddressInfo([]);
    setPaymentInfo([]);
    setNextForm(0);
  }, [completed]);
  // ======== HELPERS ========


  // ======== HANDLERS ========


  // ======== COMPONENT ========
  return (
    <div>
      <div>Your cart is full of stuff...</div>
      <div>
        {!nextForm ?
          <button className="btn checkout" onClick={() => setNextForm(nextForm + 1)} >
            Buy The Things!
          </button>
          : null
        }
      </div>

      {nextForm > 0 && nextForm < 4 ?
        < UserForm
          userInfo={userInfo} setUserInfo={setUserInfo}
          nextForm={nextForm} setNextForm={setNextForm}
        />
        : null}

      {nextForm > 1  && nextForm < 4?
        < AddressForm
          addressInfo={addressInfo} setAddressInfo={setAddressInfo}
          nextForm={nextForm} setNextForm={setNextForm}
        />
        : null}

      {nextForm > 2 && nextForm < 4 ?
        < PaymentForm
          paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo}
          nextForm={nextForm} setNextForm={setNextForm}
        />
        : null}

      {nextForm > 3 ?
        < Confirmation
          userInfo={userInfo}
          paymentInfo={paymentInfo}
          addressInfo={addressInfo}
          nextForm={nextForm}
          completed={completed}
          setCompleted={setCompleted}
        />
        : null
      }

    </div>
  );

};

export default App;