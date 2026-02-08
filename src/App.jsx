import React, { useState } from "react";
import "./App.css";

// IMPORT MEMES
import meme1 from "./assets/meme1.jpeg";
import meme2 from "./assets/meme2.jpeg";
import meme3 from "./assets/meme3.jpg";
import meme4 from "./assets/meme4.jpg";
import meme5 from "./assets/meme5.jpg";
import meme6 from "./assets/meme6.jpeg";
import meme7 from "./assets/meme7.jpeg";
import meme8 from "./assets/meme8.JPG";

import finalMeme from "./assets/final-meme.gif";

const memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8];

const noMessages = [
  "No",
  "Are you sure?",
  "Really sure??",
  "Think again 🥺",
  "Don’t do this to me 💔",
  "I’m crying rn",
  "Please?",
  "Last chance 😭",
  "You’re being mean now",
  "Okay this is just rude",
  "JUST PRESS YES ALREADY ❤️"
];

const dateDetails = {
  date: "Saturday, February 14th",
  time: "11:00 AM",
  attire: ""
};

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [saidYes, setSaidYes] = useState(false);
  const isFinalStage = noCount >= memes.length;


  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
    setYesSize((prev) => prev + 0.25);
  };

  const handleYesClick = () => {
    setSaidYes(true);
  };

  const currentNoText =
    noMessages[Math.min(noCount, noMessages.length - 1)];

  const currentMeme = memes[noCount % memes.length];

  return (
    <div className="container">
      {!saidYes ? (
        <>
          <h1 className="title"> Des, will you be my valentine? 💌</h1>

          {/* MEME IMAGE */}
          <img src={currentMeme} alt="funny meme" className="meme" />

          <div className="buttons">
            <div className={`buttons ${isFinalStage ? "finalButtons" : ""}`}>
              <button
                className={`yesBtn ${isFinalStage ? "yesMega" : ""}`}
                style={!isFinalStage ? { transform: `scale(${yesSize})` } : {}}
                onClick={handleYesClick}
              >
                YES 💖
              </button>

              {!isFinalStage && (
                <button className="noBtn" onClick={handleNoClick}>
                  {currentNoText}
                </button>
              )}
            </div>


          </div>
        </>
      ) : (
        <div className="success">
          <h1>Wooooooo!!! </h1>
          <div className="dateCard">
            <h2>Our Date Details</h2>
            <p><strong>📅 Date:</strong> {dateDetails.date}</p>
            <p><strong>⏰ Pick-up Time:</strong> {dateDetails.time}</p>
            <p><strong>👗 Attire: Brunch vibess  </strong> {dateDetails.attire}</p>
          </div>

          <img src={finalMeme} alt="celebration meme" className="meme" />
        </div>
      )}
    </div>
  );
}
