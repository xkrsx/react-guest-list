import './SingleGuest.scss';

export default function SingleGuest({ firstName, lastName, attending }) {
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
        <button className="small">Edit guest</button>
        <button className="remove small">Remove guest</button>
      </div>
    </div>
  );
}
