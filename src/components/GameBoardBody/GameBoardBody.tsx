import * as React from "react";

interface GameBoardBodyProps {
  activeCards: number[];
  foundPairs: number[];
  board: number[];
  revealValue: (index: number) => void;
}

const GameBoardBody: React.FC<GameBoardBodyProps> = ({
  activeCards,
  foundPairs,
  revealValue,
  board,
}) => {
  const renderCircleList = (): JSX.Element[] => {
    return board.map((value, index) => {
      return (
        <div
          onClick={() => revealValue(index)}
          key={index}
          className={`flex justify-center items-center h-24 w-24  ${
            foundPairs.includes(index)
              ? "bg-customGrey2 cursor-auto"
              : "bg-primary cursor-pointer"
          } rounded-full text-3xl font-bold text-neutral2 relative
          after:absolute after:w-full after:h-full after:rounded-full after:bg-secondaryLight ${
            activeCards.includes(index) || foundPairs.includes(index)
              ? "after:scale-0 "
              : "after:scale-100"
          }
          after:transition-all after:duration-300`}
        >
          {value}
        </div>
      );
    });
  };

  return (
    <main className="px-5 mb-16 grid grid-cols-4 gap-4 justify-items-center">
      {renderCircleList()}
    </main>
  );
};

export default GameBoardBody;
