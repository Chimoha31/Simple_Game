import React from "react";

const ResetButton = ({gameOver}) => {
  const reset = () => {
    window.location.reload();
  }

  return (
    <div className="button-div">
      {gameOver && (
        <button className="button" onClick={() => reset()}>
          Restart Game ?
        </button>
      )}
    </div>
  );
};

export default ResetButton;
