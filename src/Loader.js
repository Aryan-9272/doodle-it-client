import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Loader = (props) => {
  const [anim, setAnim] = useState("");
  const [dots, setDots] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, props.duration);
    setTimeout(() => {
      setAnim("fade-out");
    }, props.duration - 500);
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        else return prev + ".";
      });
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return isLoading === true ? (
    <div
      className={`w-full h-full bg-gradient-to-t from-slate-900 to-black absolute top-0 z-50 ${anim}`}
    >
      <div className="w-full h-full flex flex-col justify-center items-center fixed gap-3 bg-black/20 ">
        <HashLoader color="#ffffff" size={70} />
        <h1 className="text-white">LOADING{dots}</h1>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
