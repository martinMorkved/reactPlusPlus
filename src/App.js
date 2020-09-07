import React from 'react';

import './App.css';

const fname = "Martin";
const lname = "Mørkved";
const year = (new Date().getFullYear());


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Created by {fname} {lname}</p>
        <p>Copyright {year}</p>
      
      </header>
    </div>
  );
}

export default App;
