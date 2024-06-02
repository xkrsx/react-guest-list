import './SingleGuest.scss';
import { useState } from 'react';

export default function SingleGuest({
  id,
  firstName,
  lastName,
  attending,
  renderOnSubmit,
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
    renderOnSubmit();
    // setTimeout(() => {
    //   renderOnSubmit();
    // }, 1000);
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

  function handleEditClick() {
    if (!editGuest.display) {
      setEditGuest({ display: 1 });
    }
  }

  function handleChange(event) {
    const value = event.target.value;

    setEditGuest({
      ...editGuest,
      [event.target.name]: value,
    });
  }

  async function saveGuestButton() {
    if (editGuest.display) {
      // const response =
      await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: editGuest.firstName,
          lastName: editGuest.lastName,
          attending: editGuest.attending,
        }),
      });

      setEditGuest({ display: 0 });
      renderOnSubmit();
    }
  }

  return (
    <div className="single-guest" data-test-id="guest">
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
        <form
          onSubmit={(event) => event.preventDefault()}
          className="edit-guest-form"
        >
          <div className="guest-info">
            {!editGuest.display ? (
              <ul>
                <li>
                  First name: <strong>{firstName}</strong>
                </li>
                <li>
                  Last name: <strong>{lastName}</strong>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <label>
                    First name:
                    <input
                      required
                      name="firstName"
                      value={editGuest.firstName}
                      onChange={handleChange}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Last name:
                    <input
                      required
                      name="lastName"
                      value={editGuest.lastName}
                      onChange={handleChange}
                    />
                  </label>
                </li>
              </ul>
            )}
          </div>

          <div className="attend-buttons">
            <div className="attending">
              <input
                type="checkbox"
                name="attending"
                checked={attending}
                onChange={handleAttending}
                aria-label="attending"
              />{' '}
              attending
            </div>

            <div className="guest-buttons">
              {!editGuest.display ? (
                <button onClick={handleEditClick} className="small">
                  Edit guest
                </button>
              ) : (
                <button className="small" onClick={saveGuestButton}>
                  Save guest
                </button>
              )}
              <button
                onClick={handleRemove}
                aria-label="Remove"
                className="remove small"
              >
                Remove guest
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
