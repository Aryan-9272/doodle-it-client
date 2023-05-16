import React, { useContext } from "react";
import logo from "./assets/doodle-it-logo-modified.png";
import Header from "./Header";
import Footer from "./Footer";
import { PageContext } from "./App";
import Loader from "./Loader";
import Preview from "./Preview";

function Home() {
  const pageState = useContext(PageContext);
  return (
    <div
      className="w-full min-h-[80rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[83rem]
    md:min-h-[86rem]
    lg:min-h-[50rem]
    xl:min-h-[55rem]"
    >
      <Header />
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
        >
          <Preview />
        </div>
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
            onClick={() => {
              pageState.setPage("create");
            }}
          >
            CREATE A ROOM
          </div>
          <div
            className=" w-[80%]  h-[5rem]  bg-black rounded-md text-white text-center text-[2.1rem] p-3 border-[2px] border-white
          transition duration-200 ease-in-out hover:cursor-pointer hover:scale-[1.05] hover:bg-white hover:text-black select-none"
            onClick={() => {
              pageState.setPage("join");
            }}
          >
            JOIN A ROOM
          </div>
        </div>
      </div>
      <Footer />
      <Loader duration={2000} />
    </div>
  );
}

export default Home;
