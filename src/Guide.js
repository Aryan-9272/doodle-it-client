import React from "react";

const Guide = () => {
  return (
    <div
      className="h-full w-full flex flex-col justify-around items-center text-slate-100 text-sm px-3 p-1
    sm:text-base
    md:text-lg
    lg:text-base
    xl:text-lg"
    >
      <div className="flex justify-start items-start w-full gap-2">
        <span>&bull;</span>
        <h1>
          WELCOME TO DOODLE-IT! GET READY TO UNLEASH YOUR CREATIVITY AND COMPETE
          WITH OTHER PLAYERS IN THIS FUN DRAWING GAME.
        </h1>
      </div>
      <div className="flex justify-start items-start w-full gap-2">
        <span>&bull;</span>
        <h1>
          TO START, CLICK ON THE "CREATE A ROOM" BUTTON TO SET UP YOUR OWN ROOM
          AND SHARE THE ROOM CODE WITH YOUR FRIENDS.
        </h1>
      </div>
      <div className="flex justify-start items-start w-full gap-2">
        <span>&bull;</span>
        <h1>
          IN THE GAME, YOU'LL BE GIVEN A PROMPT AND A LIMITED AMOUNT OF TIME TO
          DOODLE YOUR INTERPRETATION OF IT.
        </h1>
      </div>
      <div className="flex justify-start items-start w-full gap-2">
        <span>&bull;</span>
        <h1>
          ONCE TIME IS UP, THE DOODLENET MODEL WILL EVALUATE YOUR DRAWING,
          ASSIGNING SCORES BASED ON ITS ASSESSMENT.
        </h1>
      </div>
      <div className="flex justify-start items-start w-full gap-2">
        <span>&bull;</span>
        <h1>
          FEEL FREE TO PRACTICE YOUR DOODLING SKILLS HERE BEFORE JOINING A
          COMPETITIVE ROOM. LET YOUR IMAGINATION RUN WILD AND ENJOY THE WORLD OF
          DOODLE-IT!
        </h1>
      </div>
    </div>
  );
};

export default Guide;
