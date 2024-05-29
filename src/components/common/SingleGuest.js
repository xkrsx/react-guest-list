import './SingleGuest.scss';
import { useState } from 'react';

export default function SingleGuest({
  id,
  firstName,
  lastName,
  attending,
  renderOnSubmit,
  // guests,
}) {
  const [deletedGuestInfo, setDeletedGuestInfo] = useState({
    display: 0,
    firstName: '',
    lastName: '',
  });

  async function handleRemove() {
    const response = await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    // TODO show div with deletedGuest info

    setDeletedGuestInfo({
      display: 1,
      firstName: deletedGuest.firstName,
      lastName: deletedGuest.lastName,
    });

    // renderOnSubmit();

    // const updatedGuests = guests.filter(
    //   (guest) => guest.id !== deletedGuest.id,
    // );
    // console.log(updatedGuests);
    // // TODO FIX: create a function in app.js that changes state
    // // setGuests(updatedGuests);
  }

  return (
    <div className="single-guest">
      {deletedGuestInfo.display ? (
        <div className="guest-info">
          <span>
            <strong>
              {deletedGuestInfo.firstName} {deletedGuestInfo.lastName}
            </strong>{' '}
            has been <strong>deleted</strong>.
          </span>
          <button className="small" onClick={() => renderOnSubmit()}>
            Refresh the list.
          </button>
        </div>
      ) : (
        <>
          <div className="guest-info">
            <ul>
              <li>
                First name: {}
                <strong>{firstName}</strong>
              </li>
              <li>
                Last name: {}
                <strong>{lastName}</strong>
              </li>
              <li>
                <div className="attending">
                  <input type="checkbox" /> attending
                </div>
                {attending}
              </li>
            </ul>
          </div>
          <div className="guest-buttons">
            <form onSubmit={(event) => event.preventDefault()}>
              <button className="small">Edit guest</button>
              <button onClick={handleRemove} className="remove small">
                Remove guest
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
