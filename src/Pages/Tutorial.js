import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faEraser,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Canvas from "../DoodleNet/Canvas";
import { selectWord } from "../DoodleNet/library.js";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import { CanvasContext } from "../App";
import Loader from "../Components/Common/Loader";
import Guide from "../Components/Tutorial/Guide";

const Tutorial = () => {
  const contextVal = useContext(CanvasContext);
  const [tool, setTool] = useState("pen");
  const [word, setWord] = useState(selectWord());

  const findConfidence = (word) => {
    const confidence = contextVal.result.find((element) => {
      return element.label.replaceAll("_", " ") == word;
    }).confidence;

    return (confidence * 100).toFixed(2);
  };
  return (
    <div
      className="w-full min-h-[79rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[88.5rem]
    md:min-h-[97rem]
    lg:min-h-[50rem]
    xl:min-h-[55rem]"
    >
      <Header />
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
            <div>
              {contextVal.result == null
                ? (0).toFixed(2)
                : findConfidence(word)}
              %
            </div>
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
          className="w-[23rem] h-[30rem] shadow-lg flex justify-center items-center flex-col order-1 border-white border-[1px]
      sm:w-[29.2rem] sm:h-[33rem]
      md:w-[34.2rem] md:h-[36rem]
      lg:w-[28rem] lg:h-[30rem] lg:order-2
      xl:w-[32rem] xl:h-[36rem]"
        >
          <div
            className="w-full text-white text-xl border-b-[1px] flex justify-center items-center p-1
          xl:text-2xl"
          >
            GUIDE
          </div>
          <Guide />
        </div>
      </div>
      <Footer />
      <Loader duration={1000} />
    </div>
  );
};

export default Tutorial;
