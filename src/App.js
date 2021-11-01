import logo from './logo.svg';
import './App.css';

import reactDom from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <React.Fragment>
     
     <header className="navbar">
     
     <button type="button" className="btn btn-dark">Home</button>
     <button type="button" className="btn btn-dark">Informacion</button>
     <button type="button" className="btn btn-dark">Contacto</button>
     <form class="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

     </header>
   </React.Fragment>
  );
}

export default App;
