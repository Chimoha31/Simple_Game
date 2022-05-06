import React from "react";

const Score = ({userPoints, computerPoints}) => {
  return (
    <div>
      <h1>User Points: {userPoints}</h1>
      <h1>Computer Points: {computerPoints}</h1>
    </div>
  );
};

export default Score;
