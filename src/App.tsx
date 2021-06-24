import './App.css';
import Header from './components/header';
import SearchBar from './components/SearchBar';

/*
   App
   This component defines the main UI of the application.
 */
function App() {
  return (
      <div className="App">
          <Header content={ renderHeader() } />
          <SearchBar />
      </div>
  );
}

function renderHeader() {
  return <h1>Showtime!</h1>;
}

function sayHello() {
  return "Buongiorno";
}

export default App;
