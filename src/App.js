import './App.scss';
import Footer from './components/common/Footer';
import Form from './components/common/Form';
import Header from './components/common/Header';
import Main from './components/Main';

export default function App() {
  return (
    <div className="App">
      <Header>React Guest List</Header>
      <Form />
      <Main />
      <Footer />
    </div>
  );
}
