import './Main.scss';
import Loading from './common/Loading';
import SingleGuest from './common/SingleGuest';

export default function Main({ guests, isLoading }) {
  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <div className="Main">
      <div className="guests-list">
        <div className="guests-table">
          {guests.map((guest) => {
            return (
              <SingleGuest
                key={`guest-${guest.id}`}
                firstName={guest.firstName}
                lastName={guest.lastName}
                attending={guest.attending}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
