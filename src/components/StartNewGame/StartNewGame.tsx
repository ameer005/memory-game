import * as React from "react";

interface StartNewGame {
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
  gridsize: number;
  setGridSize: React.Dispatch<React.SetStateAction<number>>;
}

const StartNewGame: React.FC<StartNewGame> = ({
  setGameOn,
  gridsize,
  setGridSize,
}) => {
  return (
    <main className="bg-secondary flex flex-col gap-3 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-neutral2">memory</h1>

      <section className="flex flex-col justify-between bg-neutral2 w-full max-w-[28rem] rounded-xl min-h-[20rem] p-7">
        <div>
          <h3 className="font-bold text-customBlue2 text-xl mb-4">Grid Size</h3>

          <div className="flex gap-4 text-base">
            <button
              onClick={() => setGridSize(4)}
              className={`flex-1 text-neutral2 font-bold  py-[10px] ${
                gridsize === 4 ? "bg-secondaryLight" : "bg-customGrey2"
              } rounded-full   ut-animation`}
            >
              4*4
            </button>
            <button
              onClick={() => setGridSize(6)}
              className={`flex-1 text-neutral2 font-bold  py-[10px] ${
                gridsize === 6 ? "bg-secondaryLight" : "bg-customGrey2"
              } rounded-full   ut-animation`}
            >
              6*6
            </button>
          </div>
        </div>

        <div>
          <button
            onClick={() => setGameOn(true)}
            className="flex-1 w-full text-base text-neutral2 font-bold bg-primary py-3 rounded-full hover:bg-primaryLight ut-animation"
          >
            Start Game
          </button>
        </div>
      </section>
    </main>
  );
};

export default StartNewGame;
