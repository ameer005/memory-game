import * as React from "react";

interface GameBoardBodyProps {
  activeCards: number[];
  foundPairs: number[];
  board: number[];
  gridsize: number;
  revealValue: (index: number) => void;
}

const GameBoardBody: React.FC<GameBoardBodyProps> = ({
  activeCards,
  foundPairs,
  revealValue,
  board,
  gridsize,
}) => {
  const renderCircleList = (): JSX.Element[] => {
    return board.map((value, index) => {
      if (gridsize === 4) {
        return (
          <div
            onClick={() => {
              if (!activeCards.includes(index)) {
                revealValue(index);
              }
            }}
            key={index}
            className={`flex justify-center items-center h-24 w-24 md:h-20 md:w-20  ${
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
      } else {
        return (
          <div
            onClick={() => {
              if (!activeCards.includes(index)) {
                revealValue(index);
              }
            }}
            key={index}
            className={`flex justify-center items-center h-16 w-16 md:h-14 md:w-14  ${
              foundPairs.includes(index)
                ? "bg-customGrey2 cursor-auto"
                : "bg-primary cursor-pointer"
            } rounded-full text-xl font-bold text-neutral2 relative
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
      }
    });
  };

  return (
    <main
      className={`px-5 md:px-0 grid ${
        gridsize === 4 ? "grid-cols-4 gap-4" : "grid-cols-6 gap-3"
      }   justify-items-center`}
    >
      {renderCircleList()}
    </main>
  );
};

export default GameBoardBody;
