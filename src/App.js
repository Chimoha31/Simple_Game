import React, { useEffect, useState } from "react";
import "./App.css";
import HandsButton from "./components/button/HandsButton";
import ResetButton from "./components/button/ResetButton";
import Score from "./components/button/Score";
import FinalResult from "./components/FinalResult";
import HandsImg from "./components/HandsImg";

const App = () => {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);

 
  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if (updatedUserPoints === 5) {
          setResult("User Wins");
          setGameOver(true);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer gets the point!");
        if (updatedComputerPoints === 5) {
          setResult("Computer Wins");
          setGameOver(true);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <Score userPoints={userPoints} computerPoints={computerPoints} />
      <HandsImg userChoice={userChoice} computerChoice={computerChoice} />
      <HandsButton setUserChoice={setUserChoice} setComputerChoice={setComputerChoice} gameOver={gameOver} />
      <FinalResult turnResult={turnResult} result={result} />
      <ResetButton gameOver={gameOver} />
    </div>
  );
};

export default App;
