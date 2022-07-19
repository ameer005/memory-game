import * as React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import GameBoardBody from "../GameBoardBody/GameBoardBody";
import ModalGameOver from "../ModalGameOver/ModalGameOver";

interface GameBoard {}

const GameBoard: React.FC<GameBoard> = (props) => {
  return (
    <main className="flex flex-col gap-16 min-h-screen bg-neutral2  justify-start items-center py-5">
      <Header />
      <section>
        <GameBoardBody />
        <Footer />
      </section>

      {/* <ModalGameOver /> */}
    </main>
  );
};

export default GameBoard;
