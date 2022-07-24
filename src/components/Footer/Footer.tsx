import React, { FC, useState, useEffect } from "react";

interface FooterProps {
  moves: number;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const Footer: FC<FooterProps> = ({ moves, setTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let timer: NodeJS.Timer;

  // `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`

  return (
    <main className="flex items-center gap-7 w-full max-w-[32rem]">
      <div className="flex-1 flex items-center justify-between bg-customGrey2/40 px-4 py-5 rounded-lg">
        <div className="text-customBlue2">Time</div>
        <div className="text-secondary font-bold">09:51</div>
      </div>
      <div className="flex-1 px-4 py-5 flex items-center justify-between bg-primary text-neutral2  rounded-lg pointer">
        <div>Moves</div>
        <div className="font-bold">{String(moves).padStart(2, "0")}</div>
      </div>
    </main>
  );
};

export default Footer;
