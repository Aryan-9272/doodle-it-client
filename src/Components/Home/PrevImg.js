import React from "react";

const PrevImg = (props) => {
  return (
    <div
      className="w-full h-full border-white bg-gradient-to-t from-slate-900 to-black absolute flex justify-center items-center top-0 transition-opacity duration-500"
      style={{
        animationName: props.anim,
        animationDuration: "0.5s",
        animationFillMode: "forwards",
        zIndex: props.z,
      }}
    >
      <img src={props.img} className="h-full" />
    </div>
  );
};

export default PrevImg;
