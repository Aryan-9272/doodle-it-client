import React from "react";
import hLogo from "./assets/doodle-it-logo.png";
import pIcon from "./assets/avatars/_Group_ (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const CreateRoom = () => {
  return (
    <>
      <div
        className="w-full min-h-[52rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[54.5rem]
    "
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
          transition duration-300 ease-in-out hover:bg-white hover:cursor-pointer"
            >
              HOME
            </li>
            <li
              className=" border-white border-[1px] rounded-sm px-2 hover:text-black
          transition duration-300 ease-in-out hover:bg-white hover:cursor-pointer"
            >
              HOW TO PLAY
            </li>
            <li
              className=" border-white border-[1px] rounded-sm px-2 hover:text-black
          transition duration-300 ease-in-out hover:bg-white hover:cursor-pointer"
            >
              ABOUT
            </li>
          </ul>
        </div>

        <div className="w-full h-[7rem] opacity-50 bg-black absolute bottom-0"></div>
      </div>

      <div
        className="w-[24rem] h-[36rem] bg-gray-900/50 shadow-lg rounded-md p-[1rem] opacity-95 order-2 mx-auto gap-4 relative top-[6.5rem] grid grid-rows-[repeat(7,1fr)] border-white border-2
        sm:w-[33rem] sm:top-[7.5rem]
        md:w-[37rem] md:py-[1.2rem]
        lg:w-[42rem] lg:py-[0.9rem] lg:h-[37.5rem] lg:px-[2rem]"
      >
        <div className="row-span-2 flex justify-center items-center gap-1">
          <FontAwesomeIcon
            icon={faCaretLeft}
            size="4x"
            color="white"
            opacity="0.9"
          />
          <img
            src={pIcon}
            className=" h-full w-auto object-cover border-white border-solid border-[2px] rounded-[50%]"
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            size="4x"
            color="white"
            opacity="0.9"
          />
        </div>
        <div className="flex justify-center">
          <input
            placeholder="ENTER NAME"
            className=" w-full h-full text-[2rem] rounded-md p-2 text-gray-500
      md:text-[2.2rem]
      lg:text-[2.4rem]"
          ></input>
        </div>
        <div
          className=" w-full h-[75%] bg-white rounded-md flex justify-between items-center p-2 text-[1.5rem] text-black justify-self-center self-center
    sm:text-[2rem]
    md:text-[2.2rem]
    lg:text-[2.4rem]"
        >
          SET MAX PLAYERS :
          <select
            className="w-[4rem] border-black border-2 rounded-md
      sm:w-[5.5rem]"
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
        <div
          className=" w-full h-[75%] bg-white rounded-md flex justify-between items-center p-2 text-[1.5rem] text-black justify-self-center self-center
    sm:text-[2rem]
    md:text-[2.2rem]
    lg:text-[2.4rem]"
        >
          SET ROUNDS :
          <select
            className="w-[4rem] border-black border-2 rounded-md
      sm:w-[5.5rem]"
          >
            <option>3</option>
            <option>5</option>
            <option>7</option>
            <option>10</option>
          </select>
        </div>
        <div
          className=" w-full h-[75%] bg-white rounded-md flex justify-between items-center p-2 text-[1.5rem] text-black justify-self-center self-center
    sm:text-[2rem]
    md:text-[2.2rem]
    lg:text-[2.4rem]"
        >
          SET TIME LIMIT :
          <select
            className="w-[4rem] border-black border-2 rounded-md
      sm:w-[5.5rem]"
          >
            <option>10s</option>
            <option>20s</option>
            <option>30s</option>
          </select>
        </div>
        <div
          className="w-[12rem] h-[86%] justify-self-center self-center bg-black rounded-md border-white border-2 text-white items-center flex justify-center gap-1
        hover:cursor-pointer hover:opacity-70 duration-300"
        >
          <span className="text-[1.5rem] pt-[3px]">CREATE...</span>
          <FontAwesomeIcon icon={faPen} fade size="lg" />
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
