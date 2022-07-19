import * as React from "react";

interface Header {}

const Header: React.FC<Header> = (props) => {
  return (
    <main className="w-full max-w-[75rem]">
      <section className="flex justify-between items-center">
        <h1 className="text-secondary font-bold text-4xl">memory</h1>
        <div className="flex items-center gap-5">
          <button className="bg-customGrey2/40 font-bold bg-primary py-[10px] rounded-full w-[7rem] hover:bg-primaryLight ut-animation">
            Restart
          </button>
          <button className="text-secondary font-bold bg-neutral py-[10px] rounded-full w-[7rem] hover:bg-customBlue hover:text-neutral2 ut-animation">
            Restart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Header;
