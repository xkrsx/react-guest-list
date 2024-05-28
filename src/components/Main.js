import './Main.scss';
// import { useEffect, useState } from 'react';
import Loading from './common/Loading';
import RemoveAllGuests from './RemoveAllGuests';

export default function Main({ guests, isLoading }) {
  // async function fetchGuests() {
  //   const response = await fetch('https://zy99yv-4000.csb.app/guests', {
  //     method: 'GET',
  //   });

  //   const data = await response.json();
  //   setGuests(data);
  //   setIsLoading(false);
  // }

  // useEffect(() => {
  //   fetchGuests().catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <div className="Main">
      <div className="guests-list">
        <div className="guests-table">
          {guests.map((guest) => {
            return (
              <div key={`guest-${Number(guest.id)}`} className="single-guest">
                <ul>
                  <li>
                    First name: {}
                    {guest.firstName}
                  </li>
                  <li>
                    Last name: {}
                    {guest.lastName}
                  </li>
                  <li>
                    Attending? {}
                    {guest.attending}
                  </li>
                  <li>
                    <button className="remove small">Remove guest</button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <RemoveAllGuests />
      </div>
    </div>
  );
}
