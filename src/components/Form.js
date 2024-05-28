import './Form.scss';
import RemoveAllGuests from './RemoveAllGuests';

export default function Form({
  addOnSubmit,
  onRemoveClick,
  newGuest,
  onChange,
}) {
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      addOnSubmit().catch((error) => console.log(error));
    }
  }

  function handleChange(event) {
    const value = event.target.value;

    onChange({
      ...newGuest,
      [event.target.name]: value,
    });
  }

  return (
    <div className="section">
      <form className="Form" onSubmit={(event) => event.preventDefault()}>
        <h2>Add a new guest</h2>
        <label>
          First name{' '}
          <input
            required={true}
            name="firstName"
            value={newGuest.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name{' '}
          <input
            required={true}
            name="lastName"
            value={newGuest.lastName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button
          onClick={() => {
            addOnSubmit().catch((error) => console.log(error));
          }}
          className="add"
        >
          Add new guest
        </button>
        <div className="form-buttons">
          <button onClick={onRemoveClick} className="remove">
            Clear the form
          </button>

          <RemoveAllGuests />
        </div>
      </form>
    </div>
  );
}
