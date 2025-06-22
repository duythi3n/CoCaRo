import React, { useState } from "react";
import { checkWinner } from "./data";
import Borad from "./Board";
import "./GameStyle.css";
const Game = () => {
  const [board, setBorad] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = checkWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBorad(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBorad(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div className="game">
      <Borad cells={board} onClick={handleClick}></Borad>
      <div className="winner">
        {winner ? `${!xIsNext ? "X" : "O"} Đã thắng` : ""}
      </div>
      <button onClick={handleResetGame}>Reset</button>
    </div>
  );
};

export default Game;
