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
  const [editGuest, setEditGuest] = useState({
    display: 0,
    firstName: '',
    lastName: '',
    attending: false,
  });

  async function handleRemove() {
    const response = await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();

    setDeletedGuestInfo({
      display: 1,
      firstName: deletedGuest.firstName,
      lastName: deletedGuest.lastName,
    });
  }

  async function handleAttending(event) {
    if (event.target.name === 'attending' && attending === false) {
      await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attending: true,
        }),
      });
      renderOnSubmit();
    } else if (event.target.name === 'attending' && attending === true) {
      await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attending: false,
        }),
      });
      renderOnSubmit();
    }
  }

  function handleEdit() {
    if (!editGuest.display) {
      setEditGuest({ display: 1 });
    }
  }

  function saveGuestButton() {
    if (editGuest.display) {
      //   const response = await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       // TODO send user changes to API
      //     }),
      //   });
      //   const updatedGuest = await response.json();

      setEditGuest({ display: 0 });
    }
  }

  // TODO? change re-render to refreshing state-based array of guests
  // const updatedGuests = guests.filter(
  //   (guest) => guest.id !== deletedGuest.id,
  // );
  // setGuests(updatedGuests);

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
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="guest-info">
            <ul>
              {!editGuest.display ? (
                <>
                  <li>
                    First name: <strong>{firstName}</strong>
                  </li>
                  <li>
                    Last name: <strong>{lastName}</strong>
                  </li>
                </>
              ) : (
                <>
                  <label>
                    First name:
                    <input />
                  </label>
                  <label>
                    Last name:
                    <input />
                  </label>
                </>
              )}

              <li>
                <div className="attending">
                  {/* TODO add functionality */}
                  <input
                    type="checkbox"
                    name="attending"
                    checked={attending}
                    onChange={handleAttending}
                  />{' '}
                  attending
                </div>
                {attending}
              </li>
            </ul>
          </div>
          <div className="guest-buttons">
            {!editGuest.display ? (
              <button onClick={handleEdit} className="small">
                Edit guest
              </button>
            ) : (
              <button className="small" onClick={saveGuestButton}>
                Save guest
              </button>
            )}
            <button onClick={handleRemove} className="remove small">
              Remove guest
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
