import React from "react";
import hLogo from "./assets/doodle-it-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
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
  );
};

export default Header;
