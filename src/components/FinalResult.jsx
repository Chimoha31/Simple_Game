import React from "react";

const FinalResult = ({turnResult, result}) => {
  return (
    <div className="result">
      <h1>Turn Result: {turnResult} </h1>
      <h1>Final Result: {result} </h1>
    </div>
  );
};

export default FinalResult;
