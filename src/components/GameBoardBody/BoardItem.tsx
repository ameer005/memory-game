import * as React from "react";

interface BoardItemProps {
  value: number;
}

const BoardItem: React.FunctionComponent<BoardItemProps> = ({ value }) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      onClick={() => {
        console.log("yes");
        setClicked(true);
      }}
      className={`flex justify-center items-center h-24 w-24 bg-primary rounded-full text-3xl font-bold text-neutral2 relative
      after:absolute after:w-full after:h-full after:rounded-full after:bg-secondaryLight ${
        clicked ? "after:scale-0 " : "after:scale-100"
      }
      after:transition-all after:duration-300`}
    >
      {value}
    </div>
  );
};

export default BoardItem;
