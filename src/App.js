import logo from './logo.svg';
import './App.css';
import Weather from './Weather'; // Importer le composant Weather

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Éditez <code>src/App.js</code> et enregistrez pour recharger.
        </p>
        <Weather /> {/* Ajouter le composant Weather ici */}
      </header>
    </div>
  );
}

export default App;
