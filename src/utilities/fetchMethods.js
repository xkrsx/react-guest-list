export default async function firstRenderFetch() {
  const response = await fetch('https://zy99yv-4000.csb.app/guests', {
    method: 'GET',
  });

  const data = await response.json();

  setGuests([data]);

  setIsLoading(false);
}
