import React from "react";
import multiavatar from "@multiavatar/multiavatar";

const seed = 111232;

let svgCode = multiavatar(seed);
const imgSrc = `data:image/svg+xml;base64,${btoa(svgCode)}`;

const Players = (props) => {
  return (
    <div
      className="w-[189px] h-[3rem] text-[0.7rem] mt-1 bg-[#00000076] border-[2px] border-[#4e0eff] rounded-sm grid grid-rows-2 grid-cols-[20%_50%_30%] p-1 gap-x-1
    md:w-[230px] md:h-[3.5rem] md:text-[0.85rem] md:mt-2
    lg:w-[189px] lg:text-[0.7rem] lg:h-[3rem] lg:mt-1
    xl:w-[260px] xl:h-[4rem] xl:text-[1rem] xl:gap-x-1 xl:mt-2"
    >
      <div className="row-span-2 flex justify-center items-center">
        <img
          src={imgSrc}
          className="h-[85%] rounded-full border-[2px] border-white"
        />
      </div>
      <div className="row-span-1  flex justify-start items-center col-span-2 text-white px-1">
        NAME : Aryan Raj
      </div>
      <div className="row-span-1 flex justify-start items-center text-white px-1">
        SCORE : 1000
      </div>
      <div className="row-span-1 flex justify-start items-center text-white">
        (PLAYER)
      </div>
    </div>
  );
};

export default Players;
