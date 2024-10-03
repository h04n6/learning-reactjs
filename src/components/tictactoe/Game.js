import React, { useState } from "react";
import "./GameStyles.css";
import Board from "./Board";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  console.log(`Component Game re-render: ${winner}`);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy); // state changed => component re-render
    setXIsNext(!xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <p>Winner is {winner ?? "???"}</p>
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default Game;
