import React, { useState, FC, useEffect } from "react";
import * as _ from "lodash";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameBoardBody from "../GameBoardBody/GameBoardBody";
import ModalGameOver from "../ModalGameOver/ModalGameOver";

import { fourByFour } from "../../utils/boardArray";

interface GameBoard {
  gameOn: boolean;
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameBoard: FC<GameBoard> = ({ gameOn, setGameOn }) => {
  const [board, setBord] = React.useState([...fourByFour, ...fourByFour]);
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [time, setTime] = useState("");

  // game over logic
  useEffect(() => {
    if (foundPairs.length === board.length) {
      setGameOver(true);
    }
  }, [foundPairs]);

  // card matching logic
  const revealValue = (index: number): void => {
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
      // const timeout = setTimeout(() => {
      //   setActiveCards([]);
      // }, 500);
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
    <main className="flex flex-col gap-16 min-h-screen bg-neutral2  justify-start items-center py-5">
      <Header restartGame={restartGame} setGameOn={setGameOn} />
      <section>
        <GameBoardBody
          revealValue={revealValue}
          foundPairs={foundPairs}
          activeCards={activeCards}
          board={board}
        />
        <Footer setTime={setTime} moves={moves} />
      </section>

      {gameOver && (
        <ModalGameOver time={time} restartGame={restartGame} moves={moves} />
      )}
    </main>
  );
};

export default GameBoard;
