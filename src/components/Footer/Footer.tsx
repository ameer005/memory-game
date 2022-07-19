import * as React from "react";

interface Footer {}

const Footer: React.FC<Footer> = (props) => {
  return (
    <main className="flex items-center gap-7">
      <div className="flex-1 flex items-center justify-between bg-customGrey2/40 px-4 py-5 rounded-lg">
        <div className="text-customBlue2">Time</div>
        <div className="text-secondary font-bold">09:51</div>
      </div>
      <div className="flex-1 px-4 py-5 flex items-center justify-between bg-primary text-neutral2  rounded-lg pointer">
        <div>Moves</div>
        <div className="font-bold">05</div>
      </div>
    </main>
  );
};

export default Footer;
