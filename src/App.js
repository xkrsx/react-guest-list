import './App.scss';
import { useEffect, useState } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Form from './components/Form';
import Main from './components/Main';

export default function App() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newGuest, setNewGuest] = useState({
    firstName: '',
    lastName: '',
    attending: 0,
  });

  async function fetchGuests() {
    const response = await fetch('https://zy99yv-4000.csb.app/guests', {
      method: 'GET',
    });

    const data = await response.json();
    setGuests(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchGuests().catch((error) => {
      console.log(error);
    });
  }, []);

  function clearForm() {
    setNewGuest({ firstName: '', lastName: '', attending: 0 });
  }

  async function addNewGuest() {
    const response = await fetch('https://zy99yv-4000.csb.app/guests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGuest),
    });
    const createdGuest = await response.json();
    clearForm();
    setGuests([...guests, createdGuest]);
  }

  return (
    <div className="App">
      <Header>React Guest List</Header>
      <Form
        addOnSubmit={addNewGuest}
        renderOnSubmit={fetchGuests}
        onRemoveClick={clearForm}
        newGuest={newGuest}
        onChange={setNewGuest}
        isLoading={isLoading}
      />
      <Main
        guests={guests}
        isLoading={isLoading}
        onRemove={setGuests}
        // renderOnSubmit={fetchGuests}
      />
      <Footer />
    </div>
  );
}
