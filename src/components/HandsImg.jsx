import React from "react";

const HandsImg = ({userChoice, computerChoice}) => {
  return (
    <div className="choices">
      <div className="choice-user">
        <img
          src={`../images/${userChoice}.png`}
          style={{ width: "100px", height: "100px" }}
          alt="janken-hands"
          className="user-hand"
        />
      </div>
      <div className="choice-computer">
        <img
          src={`../images/${computerChoice}.png`}
          style={{ width: "100px", height: "100px" }}
          alt="janken-hands"
          className="computer-hand"
        />
      </div>
    </div>
  );
};

export default HandsImg;
