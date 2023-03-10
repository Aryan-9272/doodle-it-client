import React from "react";
import pIcon from "./assets/avatars/_Group_ (1).png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Result = () => {
  return (
    <div
      className="border-white border-[1px] min-w-[372px] min-h-[470px] w-[372px] h-[470px] relative grid bg-gray-900/50 z-[5] grid-rows-[10%_55%_20%] p-2 gap-2 grid-cols-[14%_48%]
        sm:w-[472px] sm:h-[570px]
        md:w-[552px] md:h-[650px]
        lg:w-[422px] lg:h-[520px] lg:ml-2
        xl:w-[522px] xl:h-[620px] xl:ml-3"
    >
      <div
        className="bg-white col-start-1 col-end-2 flex justify-center items-center text-[1.5rem] rounded-sm
      sm:text-[1.8rem]
      md:text-[2.3rem]
      lg:text-[1.9rem]
      xl:text-[2.2rem]"
      >
        #15
      </div>
      <div
        className="bg-white col-start-2 col-end-4 flex justify-center items-center text-[1.5rem] rounded-sm gap-3
      sm:text-[1.8rem]
      md:text-[2.3rem]
      lg:text-[1.9rem]
      xl:text-[2.2rem]"
      >
        <img
          src={pIcon}
          className="h-[75%] rounded-full border-[2px] border-black"
        />
        ARYAN RAJ
      </div>
      <div className="border-white border-[1px] col-start-1 col-end-3 bg-black flex justify-start items-center flex-col">
        <h1 className="text-[1.1rem] text-white">GREAT WALL OF CHINA</h1>
        <div className="w-full h-full border-white border-t-[1px]"></div>
      </div>
      <div className="flex justify-start items-center flex-col gap-2">
        <div
          className="w-full h-[65%] text-white flex justify-between items-center text-[1.5rem] flex-col border-white border-[1px] pb-3 pt-1 bg-black/10
        sm:text-[1.8rem] 
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]"
        >
          <h1>MATCH</h1>
          <div className="w-[80%]">
            <CircularProgressbar
              value={80.85}
              text={`${80.85}%`}
              background
              backgroundPadding={2}
              styles={buildStyles({
                backgroundColor: "white",
                textColor: "black",
                pathColor: "black",
                trailColor: "transparent",
              })}
            />
          </div>
        </div>

        <div
          className="w-full h-[35%] flex justify-center items-center text-[1.5rem] flex-col text-white border-white border-[1px] bg-black/10
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]"
        >
          <h1>POINTS</h1>
          <h1 className="text-[lime]">+200</h1>
        </div>
      </div>
      <div className="border-white border-[1px] col-span-3 flex justify-between items-center flex-col bg-black/10 pt-1">
        <h1 className="text-[1.5rem] text-white h-[30%]
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]
        ">CLOSEST MATCH</h1>
        <h1 className="text-[1.5rem] w-full h-[50%] bg-white  text-center flex justify-center items-center
        sm:text-[1.6rem]
        md:text-[2.1rem]
        lg:text-[1.7rem]
        xl:text-[2rem]
        ">
          GREAT WALL OF CHINA - 99.9%
        </h1>
      </div>
      <div
        className="border-white border-[1px] col-span-3 bg-black/70 text-white flex justify-center items-center text-[1.5rem]
        hover:cursor-pointer hover:opacity-70 duration-300
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]"
      >
        CONTINUE
      </div>
    </div>
  );
};

export default Result;
