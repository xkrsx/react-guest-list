import './SingleGuest.scss';

export default function SingleGuest({
  id,
  firstName,
  lastName,
  attending,
  renderOnSubmit,
}) {
  async function handleRemove() {
    const response = await fetch(`https://zy99yv-4000.csb.app/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();

    renderOnSubmit().catch((error) => {
      console.log(error);
    });

    return <div>Guest deleted</div>;
  }

  return (
    <div className="single-guest">
      <div className="guest-info">
        <ul>
          <li>
            First name: {}
            {firstName}
          </li>
          <li>
            Last name: {}
            {lastName}
          </li>
          <li>
            Attending? {}
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
    </div>
  );
}
