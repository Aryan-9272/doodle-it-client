import React, { useState } from "react";
import logo from "./assets/doodle-it-logo-modified.png";
import hLogo from "./assets/doodle-it-logo.png";
import CreateRoom from "./CreateRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faPenToSquare,
  faPen,
  faEraser,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Canvas from "./Canvas";
import { selectWord } from "./Library";

const Tutorial = (props) => {
  const [tool, setTool] = useState("pen");
  const [word, setWord] = useState(selectWord());

  const findConfidence = (word) => {
    let confidence;
    props.result.forEach((element) => {
      if (element.label.replaceAll("_", " ") == word) {
        confidence = (element.confidence * 100).toFixed(2);
      }
    });
    return confidence;
  };
  return (
    <div
      className="w-full min-h-[79rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[88.5rem]
    md:min-h-[97rem]
    lg:min-h-[50rem]
    xl:min-h-[55rem]"
    >
      <div className=" top-0 w-full h-[5rem] text-white flex  items-center text-[1.5rem] relative">
        <span
          className="mt-5 ml-3
  sm:ml-5
  lg:ml-[1rem]
  xl:ml-[4rem]"
        >
          <FontAwesomeIcon icon={faPenToSquare} size="xl" />
        </span>
        <img
          src={hLogo}
          className="h-[3rem] absolute left-[3rem] mt-5
     sm:left-[3.5rem]
     lg:left-[3.25rem]
     xl:left-[6.25rem]"
        />
        <span
          className="absolute mt-[21px] right-[1.2rem]
     sm:right-[2rem]
     md:hidden"
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </span>
        <ul
          className="hidden justify-between items-center h-full text-center mt-6 absolute
    md:flex md:w-[25rem] md:right-[1.8rem]
    lg:w-[28rem] lg:right-[1rem]
    xl:w-[32rem] xl:right-[4rem]"
        >
          <li
            className=" border-white border-[1px] rounded-sm px-2 hover:text-black
      transition duration-300 ease-in-out hover:bg-white hover:cursor-pointer select-none"
          >
            HOME
          </li>
          <li
            className=" border-white border-[1px] rounded-sm px-2 hover:text-black
      transition duration-300 ease-in-out hover:bg-white hover:cursor-pointer select-none"
          >
            HOW TO PLAY
          </li>
          <li
            className=" border-white border-[1px] rounded-sm px-2 hover:text-black
      transition duration-300 ease-in-out hover:bg-white hover:cursor-pointer select-none"
          >
            ABOUT
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col justify-between items-center mt-[2rem] w-full h-auto gap-[3.5rem] absolute
      lg:flex-row lg:px-[1rem] lg:gap-0 lg:mt-[1.5rem]
      xl:px-[4rem]"
      >
        <div
          className="flex flex-col justify-center items-center border-[1px] border-white touch-none order-2
        lg:order-1"
        >
          <div
            className="w-full h-[2.7rem] border-b-[1px] border-white text-white text-[1.34rem] flex justify-between items-center px-2
          md:text-[1.6rem] md:px-3
          lg:text-[1.46rem] lg:px-2
          xl:text-[1.6rem] xl:px-3"
          >
            <div>{word.toUpperCase()}</div>
            <div>{props.result == null ? 0.0 : findConfidence(word)}%</div>
          </div>
          <Canvas tool={tool} mode={"tutorial"} />
          <div className="w-full h-[2.7rem] border-t-[1px] border-white text-white text-[1.5rem] flex justify-between items-center px-1">
            <div className="flex justify-center items-center gap-1">
              <div
                className="border-[1px] border-white w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-sm bg-black
              hover:bg-white hover:text-black hover:cursor-pointer duration-300"
                style={
                  tool == "pen"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
                onClick={() => {
                  setTool("pen");
                }}
              >
                <FontAwesomeIcon icon={faPen} />
              </div>
              <div
                className="border-[1px] border-white w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-sm bg-black
              hover:bg-white hover:text-black hover:cursor-pointer duration-300"
                style={
                  tool == "eraser"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
                onClick={() => {
                  setTool("eraser");
                }}
              >
                <FontAwesomeIcon icon={faEraser} />
              </div>
              <div
                className="border-[1px] border-white w-[2.2rem] h-[2.2rem] flex justify-center items-center rounded-sm bg-black
              hover:bg-white hover:text-black hover:cursor-pointer duration-300"
                style={
                  tool == "reset"
                    ? { backgroundColor: "white", color: "black" }
                    : {}
                }
                onClick={() => {
                  setTool("reset");
                  setTimeout(() => {
                    setTool("pen");
                  }, 100);
                }}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </div>
            </div>
            <div
              className="bg-black flex-grow ml-1 flex justify-center items-center h-[2.2rem] border-[1px] border-white rounded-sm
            hover:bg-white hover:text-black hover:cursor-pointer duration-300"
              style={
                tool == "next-word"
                  ? { backgroundColor: "white", color: "black" }
                  : {}
              }
              onClick={() => {
                setWord(selectWord());
                setTool("next-word");
                setTimeout(() => {
                  setTool("pen");
                }, 100);
              }}
            >
              DRAW NEXT WORD
            </div>
          </div>
        </div>
        <div
          className="w-[23rem] h-[30rem] shadow-lg gap-5 flex justify-center items-center flex-col order-1 border-white border-[1px]
      sm:w-[29.2rem] sm:h-[33rem]
      md:w-[34.2rem] md:h-[36rem]
      lg:w-[28rem] lg:h-[30rem] lg:order-2
      xl:w-[32rem] xl:h-[36rem]"
        ></div>
      </div>
      <div className="w-full h-[7rem] opacity-50 bg-black absolute bottom-0"></div>
    </div>
  );
};

export default Tutorial;
