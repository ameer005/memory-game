import React, { useState, FC, useEffect } from "react";
import * as _ from "lodash";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameBoardBody from "../GameBoardBody/GameBoardBody";
import ModalGameOver from "../ModalGameOver/ModalGameOver";

import { fourByFour, sixBysix } from "../../utils/boardArray";

interface GameBoard {
  gameOn: boolean;
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  gridsize: number;
}

const GameBoard: FC<GameBoard> = ({ gameOn, setGameOn, gridsize }) => {
  const [board, setBord] = React.useState<number[]>(
    _.shuffle([...fourByFour, ...fourByFour])
  );
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (gridsize === 4) setBord(_.shuffle([...fourByFour, ...fourByFour]));
    else setBord(_.shuffle([...sixBysix, ...sixBysix]));
  }, []);

  // game over logic
  useEffect(() => {
    if (foundPairs.length === board.length) {
      setGameOver(true);
    }
  }, [foundPairs]);

  // card matching logic
  const revealValue = (index: number): void => {
    let timeout;

    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const index1 = activeCards[0];
      const index2 = index;

      if (board[index1] === board[index2]) {
        setFoundPairs([...foundPairs, ...activeCards, index]);
      }

      setActiveCards([...activeCards, index]);
      setMoves((prev) => prev + 1);

      // removing indexes from active card after 500ms
      timeout = setTimeout(() => {
        setActiveCards([]);
      }, 500);
    }

    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
  };

  const restartGame = (): void => {
    setActiveCards([]);
    setFoundPairs([]);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <main className="flex flex-col justify-between min-h-screen bg-neutral2  items-center py-5 lg:py-7 mx-7">
      <Header restartGame={restartGame} setGameOn={setGameOn} />

      <GameBoardBody
        revealValue={revealValue}
        foundPairs={foundPairs}
        activeCards={activeCards}
        board={board}
        gridsize={gridsize}
      />
      <Footer setTime={setTime} moves={moves} />

      {gameOver && (
        <ModalGameOver
          setGameOn={setGameOn}
          time={time}
          restartGame={restartGame}
          moves={moves}
        />
      )}
    </main>
  );
};

export default GameBoard;
