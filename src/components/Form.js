import './Form.scss';
import { useEffect, useState } from 'react';

export default function Form() {
  const [newGuest, setNewGuest] = useState({
    firstName: '',
    lastName: '',
    attending: 0,
  });

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //   }
  // }

  // async function addNewGuest(newGuestData) {
  //   const response = await fetch('https://zy99yv-4000.csb.app/guests', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newGuestData),
  //   });
  //   const createdGuest = await response.json();
  //   console.log(createdGuest);
  // }

  function handleChange(event) {
    const value = event.target.value;

    setNewGuest({
      ...newGuest,
      [event.target.name]: value,
    });

    // addNewGuest(newGuest).catch((error) => {
    //   console.log(error);
    // });
  }

  console.log(newGuest);

  return (
    <div className="section">
      <form
        className="Form"
        // onSubmit={(event) => {
        // alert('test');
        // event.preventDefault();
        // addNewGuest(newGuest).catch((error) => {
        //   console.log(error);
        // });
        // console.log(newGuest);
        // }}
      >
        <h2>Add new guest</h2>
        <label>
          First name{' '}
          <input
            name="firstName"
            value={newGuest.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name{' '}
          <input
            name="lastName"
            value={newGuest.lastName}
            onChange={handleChange}
            // onKeyDown={(event) => {
            //   console.log(newGuest);
            //   addNewGuest(newGuest).catch((error) => {
            //     console.log(error);
            //   });
            // }}
          />
        </label>
      </form>
    </div>
  );
}
