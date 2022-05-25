import React from 'react';

//========CSS========//
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* import logo from './logo.svg'; */

//========IMPORT DE COMPONENTS========//
import FooterCV from './components/footer';
import HeaderCV from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderCV/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
      <FooterCV/>
    </div>
  );
}

export default App;
