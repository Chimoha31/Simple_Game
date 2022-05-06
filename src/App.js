import React, { useState } from "react";
import "./App.css";
// import rock from "./images"

const App = () => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissor"];

  const handleClick = (choice) => {
    setUserChoice(choice);
    randomComputerChoice();
  };

  const randomComputerChoice = () => {
    const randomHand = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomHand)
  }


  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {userPoints}</h1>
      </div>

      <div className="choices">
        <div className="choice-user">
          <img
            src={`../images/${userChoice}.png`}
            alt="janken-hands"
            className="user-hand"
          />
        </div>
        <div className="choice-computer">
          <img
            src={`../images/${computerChoice}.png`}
            alt="janken-hands"
            className="computer-hand"
          />
        </div>
      </div>

      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleClick(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
