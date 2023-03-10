import React from "react";
import logo from "./assets/doodle-it-logo-modified.png";
import hLogo from "./assets/doodle-it-logo.png";
import CreateRoom from "./CreateRoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    // <CreateRoom />
    <div
      className="w-full min-h-[80rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[83rem]
    md:min-h-[86rem]
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
      lg:flex-row lg:px-[1rem] lg:gap-0 lg:mt-[3rem]
      xl:px-[4rem]"
      >
        <div
          className="w-[24rem] h-[24rem]  bg-black shadow-lg border-white border-solid border-[1px] order-2
      sm:w-[27rem] sm:h-[27rem]
      md:w-[30rem] md:h-[30rem] 
      lg:w-[32rem] lg:h-[32rem] lg:order-1
      xl:w-[36rem] xl:h-[36rem]"
        ></div>
        <div
          className="w-[24rem] h-[36rem] bg-gray-900/50 shadow-lg rounded-md  gap-5 flex justify-center items-center flex-col order-1 border-white border-[1px]
      sm:w-[27rem]
      md:w-[30rem]  
      lg:w-[28rem] lg:h-[32rem] lg:order-2
      xl:w-[32rem] xl:h-[36rem]"
        >
          <div
            className="w-[20rem] h-[20rem] bg-black rounded-[50%]
        lg:w-[16rem] lg:h-[16rem]
        xl:w-[20rem] xl:h-[20rem]"
          >
            <img src={logo} />
          </div>
          <div
            className=" w-[80%]  h-[5rem]  bg-black rounded-md text-white text-center text-[2.1rem] p-3 border-[2px] border-white
          transition duration-200 ease-in-out hover:cursor-pointer hover:scale-[1.05] hover:bg-white hover:text-black select-none"
          >
            CREATE A ROOM
          </div>
          <div
            className=" w-[80%]  h-[5rem]  bg-black rounded-md text-white text-center text-[2.1rem] p-3 border-[2px] border-white
          transition duration-200 ease-in-out hover:cursor-pointer hover:scale-[1.05] hover:bg-white hover:text-black select-none"
          >
            JOIN A ROOM
          </div>
        </div>
      </div>
      <div className="w-full h-[7rem] opacity-50 bg-black absolute bottom-0"></div>
    </div>
  );
}

export default Home;
