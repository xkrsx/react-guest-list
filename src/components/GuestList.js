import './GuestList.scss';
import Loading from './common/Loading';
import SingleGuest from './common/SingleGuest';

export default function GuestList({
  guests,
  isLoading,
  setGuests,
  renderOnSubmit,
}) {
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
                id={guest.id}
                firstName={guest.firstName}
                lastName={guest.lastName}
                attending={guest.attending}
                setGuests={setGuests}
                guests={guests}
                renderOnSubmit={renderOnSubmit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
