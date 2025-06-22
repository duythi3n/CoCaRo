import React from "react";

const Cell = ({ value, onClick, className }) => {
  // console.log(props);
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
