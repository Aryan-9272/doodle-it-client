import React, { useContext } from "react";
import { PageContext } from "../../App";
import SocketContext from "../../Contexts/SocketContext";

const findStandings = (players) => {
  players.sort((a, b) => {
    return b.score - a.score;
  });
  return players.map((player, ind) => {
    return (
      <div
        className="w-full h-[3rem] bg-white flex justify-center items-center text-[1.5rem] rounded-sm my-2
   sm:text-[1.9rem] sm:h-[3.5rem]
   md:text-[2.1rem] md:h-[4.2rem]
   lg:text-[1.75rem] lg:h-[3.3rem]
   xl:text-[2rem] xl:h-[4rem]"
        key={ind}
      >
        <div className="w-[10%] flex justify-center mr-1">{ind + 1}.</div>
        <div className="w-[10%] flex justify-center">
          <img
            src={player.avatar}
            className="border-[1px] border-black rounded-[50%]"
          />
        </div>
        <div className="w-[60%] flex justify-center">{player.name}</div>
        <div className="w-[20%] flex justify-center">{player.score}</div>
      </div>
    );
  });
};

const Standings = (props) => {
  const pageState = useContext(PageContext);
  const socket=useContext(SocketContext);
  return (
    <div
      className="border-white border-[1px] min-w-[372px] min-h-[470px] w-[372px] h-[470px] relative bg-gray-900/50 z-[5] flex justify-center items-center flex-col
        sm:w-[472px] sm:h-[570px]
        md:w-[552px] md:h-[650px]
        lg:w-[422px] lg:h-[520px] lg:ml-2
        xl:w-[522px] xl:h-[620px] xl:ml-3"
    >
      <div
        className="h-[8%] w-full border-white border-b-[1px] text-white flex justify-center items-center text-[1.25rem]
      sm:text-[1.6rem]
      md:text-[2rem]
      lg:text-[1.6rem]
      xl:text-[1.8rem]"
      >
        FINAL STANDINGS
      </div>
      <div className="h-[84%] w-full  overflow-y-auto players p-2 pb-0 gap-2">
        <div className="flex justify-between items-center w-full px-1">
          <h1 className="text-white">POSITION</h1>
          <h1 className="text-white">NAME</h1>
          <h1 className="text-white">SCORE</h1>
        </div>
        {findStandings(props.players)}
      </div>
      <div
        className="h-[8%] w-full border-white border-t-[1px] bg-black text-white flex justify-center items-center text-[1.2rem]
      hover:cursor-pointer hover:bg-black/50 hover:text-white/50 transition duration-300
      sm:text-[1.5rem]
      md:text-[1.9rem]
      lg:text-[1.5rem]
      xl:text-[1.7rem]"
        onClick={() => {
          pageState.setPage("home");
          socket.emit("leave-room",props.roomCode);
        }}
      >
        LEAVE ROOM
      </div>
    </div>
  );
};

export default Standings;
