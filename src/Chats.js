import React from "react";
import multiavatar from "@multiavatar/multiavatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const seed = 12299;

let svgCode = multiavatar(seed);
const imgSrc = `data:image/svg+xml;base64,${btoa(svgCode)}`;

const Chats = () => {
  return (
    <div className="flex justify-start gap-2 items-center p-3">
      <div className="w-[2.7rem] text-[1.8rem] flex justify-center items-center">
        {seed===12299?<img src={imgSrc} className="w-full rounded-full"/>:<FontAwesomeIcon icon={faMessage}/>}
      </div>
      <p
        className="text-xl p-2 border-[1px] border-white w-full bg-[violet] text-white rounded-md break-words
    lg:p-1 lg:text-lg
    xl:p-2 xl:text-xl"
      >
        Namor : Hey guys wassup.
      </p>
    </div>
  );
};

export default Chats;
