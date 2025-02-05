import React, { useState } from "react";
import "./App.css";

function App() {
  const [isValentine, setIsValentine] = useState(true);

  const handleYesClick = () => {
    setIsValentine(false);
  };

  const handleNoHover = (e) => {
    const x = Math.random() * (window.innerWidth - e.target.offsetWidth);
    const y = Math.random() * (window.innerHeight - e.target.offsetHeight);
    e.target.style.position = "absolute";
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Will you be my {isValentine ? "Valentine" : "Wife"}?</h1>
        <div className="buttons">
          <button className="yesButton" onClick={handleYesClick}>
            Yes
          </button>
          <button className="noButton" onMouseOver={handleNoHover}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;