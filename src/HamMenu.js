import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const HamMenu = (props) => {
  return (
    <div
      className="w-full h-full bg-black transition-all fixed top-0 duration-500 origin-top z-50 touch-none
     md:hidden"
      style={{
        transform: `scaleY(${props.scaleVal})`,
      }}
    >
      <div className="h-full w-full flex justify-center items-center gap-5 flex-col p-2 absolute top-0">
        <h1
          className="w-full border-[1px] border-white flex justify-center items-center p-1"
          style={
            props.page == "home"
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
          onClick={() => {
            props.setPage("home");
            props.setScaleVal(0);
          }}
        >
          HOME
        </h1>
        <h1
          className="w-full border-[1px] border-white flex justify-center items-center p-1"
          style={
            props.page == "tutorial"
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
          onClick={() => {
            props.setPage("tutorial");
            props.setScaleVal(0);
          }}
        >
          HOW TO PLAY
        </h1>
        <h1
          className="w-full border-[1px] border-white flex justify-center items-center p-1"
          style={
            props.page == "about"
              ? { backgroundColor: "white", color: "black" }
              : {}
          }
          onClick={() => {
            props.setPage("about");
            props.setScaleVal(0);
          }}
        >
          ABOUT
        </h1>
      </div>
      <div className=" top-0 w-full h-[5rem] text-white flex  items-center text-[1.5rem] relative">
        <span
          className="absolute mt-[21px] right-[1.2rem] text-[1.5rem] text-white
         sm:right-[2rem]
         md:hidden"
          style={{ opacity: props.scaleVal }}
          onClick={() => {
            props.setScaleVal(0);
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} size="xl" />
        </span>
      </div>
    </div>
  );
};

export default HamMenu;
