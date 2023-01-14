import logo from './logo.svg';
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>HELLO EVERYONE!!!!</h1>
        <Weather city="Tokyo"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://shecodes.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          SheCodes
        </a>
        
      </header>
    </div>
  );
}

export default App;
