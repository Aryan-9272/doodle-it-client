import React from "react";

const Players = (props) => {
  const playerDetails = props.details;
  let role;
  if (playerDetails.isAdmin == true && playerDetails.playerid === props.id) {
    role = "YOU/AD";
  } else if (playerDetails.playerid === props.id) {
    role = "YOU";
  } else if (playerDetails.isAdmin == true) {
    role = "ADMIN";
  } else {
    role = "PLAYER";
  }

  return (
    <div
      className="w-[189px] h-[3rem] text-[0.7rem] mt-1 bg-[#00000076] border-[2px] rounded-sm grid grid-rows-2 grid-cols-[20%_49%_31%] p-1 gap-x-1
    md:w-[230px] md:h-[3.5rem] md:text-[0.85rem] md:mt-2
    lg:w-[189px] lg:text-[0.7rem] lg:h-[3rem] lg:mt-1
    xl:w-[260px] xl:h-[4rem] xl:text-[1rem] xl:gap-x-1 xl:mt-2"
      style={
        playerDetails.isReady == true
          ? { borderColor: "#4e0eff" }
          : { borderColor: "#ff0e66" }
      }
    >
      <div className="row-span-2 flex justify-center items-center">
        <img
          src={playerDetails.avatar}
          className="h-[85%] rounded-full border-[2px] border-white"
        />
      </div>
      <div className="row-span-1  flex justify-start items-center col-span-2 text-white px-1">
        NAME : {playerDetails.name}
      </div>
      <div className="row-span-1 flex justify-start items-center text-white px-1">
        SCORE : {playerDetails.score}
      </div>
      <div className="row-span-1 flex justify-end items-center text-white px-[10px]">
        ({role})
      </div>
    </div>
  );
};

export default Players;
