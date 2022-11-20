import logo from './logo.svg';
import './App.css';
import ComponenteFuncion from './components/componenteFuncion';
import Clock from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteFuncion/> 

    </header>
    </div>
  );
}

export default App;
