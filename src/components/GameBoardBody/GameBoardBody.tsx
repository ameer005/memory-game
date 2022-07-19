import * as React from "react";

interface GameBoardBody {}

const GameBoardBody: React.FC<GameBoardBody> = (props) => {
  const [activeCards, setActiveCards] = React.useState<number[]>([]);
  const [foundPairs, setFoundPairs] = React.useState<number[]>([]);

  const revealValue = (index: number): void => {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
  };

  const renderCircleList = (): JSX.Element[] => {
    const fourByFour = [1, 2, 3, 4, 5, 6, 7, 8];

    const finalBoard = [...fourByFour, ...fourByFour];

    return finalBoard.map((value, index) => {
      return (
        <div
          onClick={() => revealValue(index)}
          key={index}
          className={`flex justify-center items-center h-24 w-24 bg-primary rounded-full text-3xl font-bold text-neutral2 relative
          after:absolute after:w-full after:h-full after:rounded-full after:bg-secondaryLight ${
            activeCards.includes(index) ? "after:scale-0 " : "after:scale-100"
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
