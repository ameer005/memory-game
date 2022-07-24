import React, { useState, FC, useEffect } from "react";
import GameBoard from "./components/GameBorad/GameBoard";
import StartNewGame from "./components/StartNewGame/StartNewGame";

const App: FC = () => {
  const [gameOn, setGameOn] = useState(false);
  const [gridsize, setGridSize] = useState(4);
  return (
    <div>
      {gameOn && (
        <GameBoard gameOn={gameOn} setGameOn={setGameOn} gridsize={gridsize} />
      )}
      {!gameOn && (
        <StartNewGame
          setGameOn={setGameOn}
          gridsize={gridsize}
          setGridSize={setGridSize}
        />
      )}
    </div>
  );
};

export default App;
