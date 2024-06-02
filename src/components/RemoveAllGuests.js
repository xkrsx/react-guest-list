import './RemoveAllGuests.scss';

export default function RemoveAllGuests({ renderOnSubmit }) {
  async function removeAll() {
    const response = await fetch('https://zy99yv-4000.csb.app/guests', {
      method: 'GET',
    });
    const allGuests = await response.json();
    const allGuestsId = allGuests.map((guest) => {
      return guest.id;
    });
    function removeAllGuestsById() {
      allGuestsId.map(async (id) => {
        await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
          method: 'DELETE',
        });
      });
    }

    removeAllGuestsById();

    setTimeout(() => {
      renderOnSubmit();
    }, 500);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <button className="remove small" onClick={() => removeAll()}>
        Remove guests
      </button>
    </form>
  );
}
