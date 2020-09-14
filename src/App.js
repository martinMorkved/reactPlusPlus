import React from 'react';

import './App.css';

const fname = "Martin";
const lname = "Mørkved";
const year = (new Date().getFullYear());
const img ="https://picsum.photos/200";

const customStyle = {
  color:"red",
  fontSize: "20px",
  border: "1px solid black",
}


customStyle.color = "blue";


function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      
    <h1 style={customStyle}>Hello World!</h1>






      {/* test with random picture
    <h1 className="heading" contentEditable="false" spellCheck="false">My Favorite Foods</h1>
      <div>
        <img src={img} alt="random img"/>
      </div>

      <br/>

      <div>
        <p>Created by {fname} {lname}</p>
        <p>Copyright {year}</p>
      </div>
     */}
    </div>
  );
}

export default App;
