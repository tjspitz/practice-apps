import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Confirmation = ({
  userInfo,
  paymentInfo,
  addressInfo,
  setNextForm,
  completed,
  setCompleted,
}) => {
  // ======== HANDLERS ========
  const handlePurchase = (e) => {
    e.preventDefault();

    axios
      .post('/checkout', {
        data: {
          cookie: document.cookie,
          firstname: userInfo[0],
          lastname: userInfo[1],
          email: userInfo[2],
          password: userInfo[3],
          street: addressInfo[0],
          city: addressInfo[1],
          state: addressInfo[2],
          zip: addressInfo[3],
          cc: paymentInfo[0],
          exp: paymentInfo[1],
          ccv: paymentInfo[2],
          bill_zip: paymentInfo[3],
        },
      })
      .then((response) => {
        alert('Hooray, you bought imaginary products!');
        setCompleted(!completed);
      })
      .catch((error) => alert(error.message));
  };

  const handleAbort = (e) => {
    e.preventDefault();
    alert("No buyer's remorse for you!");
    setCompleted(!completed);
  };

  // ======== COMPONENT ========
  return (
    <div>
      Please confirm your information:
      <table>
        <tbody>
          <tr>
            <td>User Info:</td>
            {userInfo.map((info) => (
              <td>{info}</td>
            ))}
          </tr>
          <tr>
            <td>Address Info:</td>
            {addressInfo.map((info) => (
              <td>{info}</td>
            ))}
          </tr>
          <tr>
            <td>Payment Info:</td>
            {paymentInfo.map((info) => (
              <td>{info}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <button onClick={handlePurchase}>Purchase my stuff!</button>
      <button onClick={handleAbort}>Abort!</button>
      <div>Don't worry, your information totally secure.</div>
    </div>
  );
};

export default Confirmation;
