import { useEffect, useState } from 'react';
import Loading from './common/Loading';

export default function GuestsTable() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function firstRenderFetch() {
      const response = await fetch('https://zy99yv-4000.csb.app/guests', {
        method: 'GET',
      });

      const data = await response.json();

      setGuests([data]);

      setIsLoading(false);
    }

    firstRenderFetch().catch((error) => {
      console.log(error);
    });
  }, []);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <div>
      {guests.map((guest) => {
        return (
          <div key={`guest-${Number(guest.id)}`}>
            <h2>
              {guest.firstName} {guest.lastName}
            </h2>
            <div>{guest.attending}</div>
          </div>
        );
      })}
    </div>
  );
}
