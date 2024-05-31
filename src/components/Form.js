import './Form.scss';
import RemoveAllGuests from './RemoveAllGuests';

export default function Form({
  addOnSubmit,
  onRemoveClick,
  newGuest,
  onChange,
  isLoading,
}) {
  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     addOnSubmit().catch((error) => console.log(error));
  //   }
  // }

  function handleChange(event) {
    const value = event.target.value;

    onChange({
      ...newGuest,
      [event.target.name]: value,
    });
  }

  return (
    <div className="section">
      <form
        className="Form"
        onSubmit={(event) => event.preventDefault()}
        required
      >
        <h2>Add a new guest</h2>
        <label>
          First name{' '}
          <input
            required
            name="firstName"
            value={newGuest.firstName}
            onChange={handleChange}
            disabled={isLoading}
          />
        </label>
        <label>
          Last name{' '}
          <input
            required
            name="lastName"
            value={newGuest.lastName}
            onChange={handleChange}
            // onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
        </label>

        <button
          onClick={() => {
            addOnSubmit().catch((error) => console.log(error));
          }}
          className="add"
          disabled={isLoading}
        >
          Add new guest
        </button>
      </form>

      <div className="form-buttons">
        <button onClick={onRemoveClick} className="remove small">
          Clear the form
        </button>

        <RemoveAllGuests />
      </div>
    </div>
  );
}
