import React from "react";

const Lobby = (props) => {
  return (
    <div
      className="border-white border-[1px] min-w-[370px] h-[320px] relative bg-gray-900/50 z-[5] flex justify-between items-center flex-col
      sm:w-[472px] sm:h-[350px]
      md:w-[552px] md:h-[400px]
      lg:w-[422px] lg:h-[300px] lg:ml-2
      xl:w-[522px] xl:h-[350px] xl:ml-3"
    >
      <h1
        className="text-white w-full h-[20%] border-white border-b-[1px] text-[2.2rem] flex justify-center items-center
      sm:text-[2.4rem]
      md:text-[2.8rem]
      lg:text-[2.2rem]
      xl:text-[2.5rem]"
      >
        ROOM CODE : {props.details.code}
      </h1>
      <div
        className="w-full h-[65%] bg-[#00000076] flex justify-between items-center flex-col py-2
      lg:py-3"
      >
        <div
          className="text-white w-full text-[2rem] flex justify-center items-center flex-col
        sm:text-[2.3rem]
        md:text-[2.5rem]
        lg:text-[1.9rem]
        xl:text-[2rem]"
        >
          ROUND {props.details.currRound} OF {props.details.rounds}
          <h1
            className="text-[1.2rem]
          sm:text-[1.35rem]
          md:text-[1.5rem]
          lg:text-[1.1rem]
          xl:text-[1.2rem]"
          >
            (STARTING AUTOMATICALLY IN 10s)
          </h1>
        </div>
        <div className="text-white w-full text-[2rem] flex justify-center items-center text-center flex-col"></div>
        <div
          className="text-white w-full text-[2rem] flex justify-center items-center flex-col
        sm:text-[2.3rem]
        md:text-[2.5rem]
        lg:text-[1.9rem]
        xl:text-[2rem]"
        >
          WAITING FOR PLAYERS
          <h1
            className="text-[1.2rem]
          sm:text-[1.35rem]
          md:text-[1.5rem]
          lg:text-[1.1rem]
          xl:text-[1.2rem]"
          >
            (CLICK TO START ROUND)
          </h1>
        </div>
      </div>
      <div
        className="bg-white w-full h-[15%] border-white border-[1px] text-[2rem] flex justify-center items-center
      hover:cursor-pointer hover:opacity-70 transition-opacity duration-300"
      >
        READY
      </div>
    </div>
  );
};

export default Lobby;
