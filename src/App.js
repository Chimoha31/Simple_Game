import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  // User と computerのhandを決める
  const handleClick = (choice) => {
    setUserChoice(choice);
    randomComputerChoice();
  };

  const randomComputerChoice = () => {
    const randomHand = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomHand)
  }

  // Reset game
  const reset = () => {
    window.location.reload();
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5){
          setResult('User Wins')
          setGameOver(true)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          setGameOver(true)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      {/* Both score */}
      <div>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      {/* Decide User & Computer hand */}
      <div className="choices">
        <div className="choice-user">
          <img
            src={`../images/${userChoice}.png`}
            style={{width: "100px", height: "100px"}}
            alt="janken-hands"
            className="user-hand"
          />
        </div>
        <div className="choice-computer">
          <img
            src={`../images/${computerChoice}.png`}
            style={{width: "100px", height: "100px"}}
            alt="janken-hands"
            className="computer-hand"
          />
        </div>
      </div>

      {/* Hands button */}
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

    {/* Final Result */}
      <div className="result">
      <h1>Turn Result: {turnResult} </h1>
      <h1>Final Result: {result} </h1>
      </div>

    {/* Reset button */}
      <div className="button-div">
        {gameOver && <button className="button" onClick={() => reset()}>Restart Game ?</button>}
      </div>
    </div>
  );
};

export default App;
