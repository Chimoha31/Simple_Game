import React from "react";

const HandsButton = ({setUserChoice, setComputerChoice, gameOver}) => {
  const choices = ["rock", "paper", "scissors"];

  // User と computerのhandを決める
  const handleClick = (choice) => {
    setUserChoice(choice);
    randomComputerChoice();
  };

  const randomComputerChoice = () => {
    const randomHand = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomHand);
  };

  return (
    <div className="button-div">
      {choices.map((choice, index) => (
        <button
          className="button"
          key={index}
          onClick={() => handleClick(choice)}
          disabled={gameOver}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default HandsButton;
