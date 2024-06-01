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
    async function removeAllGuestsById() {
      await allGuestsId.map(async (id) => {
        try {
          return await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
            method: 'DELETE',
          });
        } catch (error) {
          console.log(error);
        }
      });
      renderOnSubmit();
    }
    removeAllGuestsById().catch((error) => {
      console.log(error);
    });
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <button className="remove small" onClick={() => removeAll()}>
        Remove guests
      </button>
    </form>
  );
}
