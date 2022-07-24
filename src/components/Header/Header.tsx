import * as React from "react";

interface HeaderProps {
  restartGame: () => void;
  setGameOn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ restartGame, setGameOn }) => {
  return (
    <main className="w-full max-w-[75rem]">
      <section className="flex justify-between items-center">
        <h1 className="text-secondary font-bold text-4xl md:text-3xl">
          memory
        </h1>
        <div className="flex items-center gap-5 md:gap-2">
          <button
            onClick={() => restartGame()}
            className="bg-customGrey2/40 md:text-sm text-neutral2 font-bold bg-primary py-[10px] md:py-2 rounded-full w-[7rem] md:w-[6rem] hover:bg-primaryLight ut-animation"
          >
            Restart
          </button>
          <button
            onClick={() => setGameOn(false)}
            className="text-secondary md:text-sm font-bold bg-customGrey2/40 py-[10px] md:py-2 rounded-full w-[7rem] md:w-[6rem] hover:bg-customBlue hover:text-neutral2 ut-animation"
          >
            New Game
          </button>
        </div>
      </section>
    </main>
  );
};

export default Header;
