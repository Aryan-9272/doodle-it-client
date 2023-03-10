import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Canvas from "./Canvas";
import {
  faPen,
  faEraser,
  faRotateLeft,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  const [tool, setTool] = useState("pen");
  return (
    <div
      className="border-white border-[1px] w-[372px] h-[470px] relative flex justify-center flex-col items-center bg-gray-900/50 z-[5]
sm:w-[472px] sm:h-[570px]
md:w-[552px] md:h-[650px]
lg:w-[422px] lg:h-[520px] lg:ml-2
xl:w-[522px] xl:h-[620px] xl:ml-3"
    >
      <div className=" text-white text-[1.5rem] p-[0.2rem] h-[45px]">
        THE GREAT WALL OF CHINA
      </div>
      <div className="w-fit border-white border-t-[1px] border-b-[1px] touch-none">
        <Canvas tool={tool} />
      </div>
      <div
        className="h-[45px] w-full flex justify-between items-center pt-1 gap-[2px] px-1
  lg:gap-1"
      >
        <div
          className="h-[40px] w-[40px] bg-black/50 text-white rounded-sm flex justify-center items-center border-white border-[2px]
     transition-colors duration-300
    hover:bg-white hover:text-black hover:cursor-pointer"
          style={
            tool == "pen" ? { backgroundColor: "white", color: "black" } : {}
          }
          onClick={() => {
            if (tool != "submit") setTool("pen");
          }}
        >
          <FontAwesomeIcon icon={faPen} size="xl" />
        </div>
        <div
          className="h-[40px] w-[40px] bg-black/50 text-white rounded-sm flex justify-center items-center border-white border-[2px]
     transition-colors duration-300
    hover:bg-white hover:text-black hover:cursor-pointer"
          style={
            tool == "eraser" ? { backgroundColor: "white", color: "black" } : {}
          }
          onClick={() => {
            if (tool != "submit") setTool("eraser");
          }}
        >
          <FontAwesomeIcon icon={faEraser} size="xl" />
        </div>
        <div
          className="h-[40px] w-[40px] bg-black/50 text-white rounded-sm flex justify-center items-center border-white border-[2px]
     transition-colors duration-300
    hover:bg-white hover:text-black hover:cursor-pointer"
          style={
            tool == "reset" ? { backgroundColor: "white", color: "black" } : {}
          }
          onClick={() => {
            if (tool != "submit") {
              setTool("reset");
              setTimeout(() => {
                setTool("pen");
              }, 100);
            }
          }}
        >
          <FontAwesomeIcon icon={faRotateLeft} size="xl" />
        </div>
        <div
          className="h-[40px] w-[75%] bg-black/50 rounded-sm text-white text-[2rem] flex justify-center items-center border-white border-[2px] gap-2
          transition-colors duration-300
        hover:bg-white hover:text-black hover:cursor-pointer"
          style={
            tool == "submit" ? { backgroundColor: "white", color: "black" } : {}
          }
          onClick={() => {
            if (tool != "submit") setTool("submit");
          }}
        >
          {tool == "submit" ? (
            <>
              SUBMITTED
              <FontAwesomeIcon icon={faCircleCheck} />
            </>
          ) : (
            <>SUBMIT</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
