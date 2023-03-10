import React from "react";
import pIcon from "./assets/avatars/_Group_ (4).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";

const JoinRoom = () => {
  return (
    <>
      <div
        className="w-full min-h-[52rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[54.5rem]
    "
      >
        <Header />
        <Footer />
      </div>

      <div
        className="w-[24rem] h-[27rem] bg-gray-900/50 shadow-lg rounded-md p-[1.2rem] opacity-95 order-2 mx-auto gap-5 relative top-[10rem] grid grid-rows-[17%_12%_17%_17%] border-white border-2
        sm:w-[32rem] sm:top-[11.5rem]
        md:w-[35rem] md:py-[1.2rem]
        lg:w-[40rem] lg:py-[1.3rem] lg:h-[28rem] lg:px-[2rem]"
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

        <div className="flex justify-between items-center rounded-md p-2 bg-white gap-3">
          <label
            className="text-[1.8rem]
            md:text-[2rem]
            lg:text-[2.4rem]"
          >
            ROOM CODE :
          </label>
          <input
            className="rounded-md text-[1.5rem] w-[40%] px-3 border-[2px] border-black flex-grow text-center text-black/70
          md:text-[1.6rem]
          lg:text-[1.9rem]"
          ></input>
        </div>

        <div
          className="w-[10rem] h-[86%] justify-self-center self-center bg-black rounded-md border-white border-2 text-white items-center flex justify-center gap-1
        hover:cursor-pointer hover:opacity-70 duration-300"
        >
          <span className="text-[1.7rem] pt-[3px]">JOIN...</span>
          <FontAwesomeIcon icon={faRightFromBracket} fade size="xl" />
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
