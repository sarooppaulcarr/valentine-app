import React, { useState } from "react";
import caughtImage from "./images/caught.png"; // Import heart image
import congratsImage from "./images/congrats.png"; // Import congrats image
import "./App.css";

function App() {
  const [isValentine, setIsValentine] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [yesClickCount, setYesClickCount] = useState(0);

  const handleYesClick = () => {
    setYesClickCount(yesClickCount + 1);
    if (yesClickCount === 0) {
      setIsValentine(false);
      setShowImage(true);
    }
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
        {showImage && (
          <>
            {yesClickCount === 1 ? (
              <img src={caughtImage} alt="Heart" className="caught-image" />
            ) : (
              <>
                <img src={congratsImage} alt="Congrats" className="congrats-image" />
                <p className="congrats-text">CONGRATS! YOU ALREADY ARE!</p>
              </>
            )}
          </>
        )}
        <h1>
          Will you be my{" "}
          <span className={!isValentine ? "circled" : ""}>
            {isValentine ? "Valentine" : "Wife"}
          </span>
          ?
        </h1>
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