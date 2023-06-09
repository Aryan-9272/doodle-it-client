import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Report = (props) => {
  const [meterVal, setMeterVal] = useState(0);
  setTimeout(() => {
    setMeterVal((props.result.confidence * 100).toFixed(2));
  }, 100);
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
        #{props.result.rank}
      </div>
      <div
        className="bg-white col-start-2 col-end-4 flex justify-center items-center text-[1.5rem] rounded-sm gap-3
      sm:text-[1.8rem]
      md:text-[2.3rem]
      lg:text-[1.9rem]
      xl:text-[2.2rem]"
      >
        <img
          src={props.result.avatar}
          className="h-[75%] rounded-full border-[2px] border-black"
        />
        {props.result.name}
      </div>
      <div className="border-white border-[1px] col-start-1 col-end-3 bg-black flex justify-start items-center flex-col">
        <h1
          className="w-full h-[10%] text-[0.9rem] text-white flex justify-center items-center
        sm:text-[1.1rem]
        md:text-[1.2rem]
        lg:text-[1rem]
        xl:text-[1.1rem]"
        >
          {props.result.word.toUpperCase()}
        </h1>
        <div className="w-full h-[90%] border-white border-t-[1px]">
          <img
            src={props.result.drawing}
            className="w-full h-full"
          />
        </div>
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
              value={meterVal}
              text={`${(props.result.confidence * 100).toFixed(2)}%`}
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
          <h1 className="text-[lime]">+{props.result.points}</h1>
        </div>
      </div>
      <div className="border-white border-[1px] col-span-3 flex justify-between items-center flex-col bg-black/10 pt-1">
        <h1
          className="text-[1.5rem] text-white h-[30%]
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]
        "
        >
          CLOSEST MATCH
        </h1>
        <h1
          className="text-[1.3rem] w-full h-[50%] bg-white  text-center flex justify-center items-center
        sm:text-[1.6rem]
        md:text-[1.9rem]
        lg:text-[1.5rem]
        xl:text-[1.8rem]
        "
        >
          {props.result.closestMatch.label.replaceAll("_", " ").toUpperCase()} -{" "}
          {(props.result.closestMatch.confidence * 100).toFixed(1)}%
        </h1>
      </div>
      <div
        className="border-white border-[1px] col-span-3 bg-black/70 text-white flex justify-center items-center text-[1.5rem]
        hover:cursor-pointer hover:opacity-70 duration-300
        sm:text-[1.8rem]
        md:text-[2.3rem]
        lg:text-[1.9rem]
        xl:text-[2.2rem]"
        onClick={() => {
          props.setComponent("Results");
        }}
      >
        CONTINUE
      </div>
    </div>
  );
};

export default Report;
