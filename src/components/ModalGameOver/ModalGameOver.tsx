import * as React from "react";
import ReactDom from "react-dom";

interface ModalGameOver {}

const ModalGameOver: React.FC<ModalGameOver> = (props) => {
  return ReactDom.createPortal(
    <main
      // onClick={() => props.setShowAddBalanceModal(false)}
      className="fixed top-0 bottom-0 right-0 left-0 bg-black/80 flex items-center justify-center z-50"
    >
      <div
        // onClick={(e) => e.stopPropagation()}
        className="bg-neutral2 rounded-xl text-neutralMain w-full max-w-[40rem] font-normal text-xs px-10 py-12"
      >
        <header className="flex flex-col gap-1 items-center mb-8">
          <div className="text-4xl font-bold text-secondary">You did it!</div>
          <div className="text-lg font-bold text-customBlue2">
            Game over! Here's how you got on...
          </div>
        </header>

        {/* section stats */}
        <section className="flex flex-col gap-5 mb-10">
          <div className="flex items-center justify-between bg-customGrey2/40 px-8 py-5 font-bold rounded-lg">
            <div className="text-xl text-customBlue2">Time Elapsed</div>
            <div className="text-3xl text-secondaryLight">0:15</div>
          </div>
          <div className="flex items-center justify-between bg-customGrey2/40 px-8 py-5 font-bold rounded-lg">
            <div className="text-xl text-customBlue2">Moves Taken</div>
            <div className="text-3xl text-secondaryLight">25 Moves</div>
          </div>
        </section>

        {/* Sections Buttons */}
        <section className="flex gap-4 text-xl">
          <button className="flex-1 text-neutral2 font-bold bg-primary py-3 rounded-full hover:bg-primaryLight ut-animation">
            Restart
          </button>
          <button className="flex-1 text-secondaryLight font-bold bg-customGrey2/40 py-3 rounded-full hover:bg-customBlue hover:text-neutral2 ut-animation">
            Set Up New Game
          </button>
        </section>
      </div>
    </main>,
    document.getElementById("modal-gameover") as HTMLElement
  );
};

export default ModalGameOver;
