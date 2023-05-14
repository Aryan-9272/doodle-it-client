import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function ErrorPage() {
  return (
    <div
      className="w-full min-h-[45rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute flex justify-start items-center flex-col
    sm:min-h-[50rem]
    md:min-h-[60rem]
    lg:min-h-[50rem]
    xl:min-h-[55rem]"
    >
      <Header />
      <div
        className="w-[22rem] border-[1px] border-white p-3 text-white flex flex-col justify-center items-center gap-2 absolute top-[10rem]
      sm:w-[30rem] sm:top-[12rem]
      md:w-[45rem] md:top-[17rem]
      lg:w-[40rem] lg:top-[14rem]
      xl:top-[16rem]"
      >
        <div
          className="w-full flex justify-center items-center gap-4 text-[2rem]
        sm:text-[2.5rem]
        md:text-[3rem]
        lg:text-[2.5rem]"
        >
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            fade
            style={{ color: "#ff0000" }}
          />
          <h1>ROOM NOT FOUND</h1>
        </div>
        <div
          className="w-full flex flex-col justify-center items-center text-[1.6rem] p-5 gap-5
        sm:text-[1.8rem]
        md:text-[2.1rem]
        lg:text-[1.8rem]"
        >
          <div className="flex justify-start items-start w-full gap-4">
            <span>&bull;</span>
            <h1>COULD NOT FIND THE ROOM YOU WERE LOOKING FOR.</h1>
          </div>
          <div className="flex justify-start items-start w-full gap-4">
            <span>&bull;</span>
            <h1>TRY ENTERING THE CORRECT ROOM-ID.</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
