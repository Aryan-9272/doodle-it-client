import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import multiavatar from "@multiavatar/multiavatar/esm";
import { PageContext } from "./App";
import SocketContext, { socket } from "./SocketContext";

let avatarArray = [];
let index = 0;

for (let i = 0; i < 15; i++) {
  avatarArray[i] = (Math.random() * 10000).toFixed(0);
}

const JoinRoom = () => {
  const pageState = useContext(PageContext);
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [seed, setSeed] = useState(avatarArray[index]);
  let svgCode = multiavatar(seed);
  const imgSrc = `data:image/svg+xml;base64,${btoa(svgCode)}`;
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
        sm:w-[33rem] sm:top-[11.5rem]
        md:w-[35rem] md:py-[1.2rem]
        lg:w-[40rem] lg:py-[1.3rem] lg:h-[28rem] lg:px-[2rem]"
      >
        <div className="row-span-2 flex justify-center items-center gap-1">
          <span
            className="hover:cursor-pointer hover:opacity-80"
            onClick={() => {
              if (index > 0) index--;
              else index = 14;
              setSeed(avatarArray[index]);
            }}
          >
            <FontAwesomeIcon icon={faCaretLeft} size="4x" color="white" />
          </span>
          <img
            src={imgSrc}
            className=" h-[95%] w-auto object-cover border-white border-solid border-[2px] rounded-[50%]"
          />
          <span
            className="hover:cursor-pointer hover:opacity-80"
            onClick={() => {
              if (index < 14) index++;
              else index = 0;
              setSeed(avatarArray[index]);
            }}
          >
            <FontAwesomeIcon icon={faCaretRight} size="4x" color="white" />
          </span>
        </div>
        <div className="flex justify-center">
          <input
            placeholder="ENTER NAME"
            value={name}
            className=" w-full h-[95%] text-[2rem] rounded-md p-2 text-gray-500 border-[2px] border-[black] outline outline-[2px] outline-[white]
            md:text-[2.2rem]
            lg:text-[2.4rem]"
            onChange={(e) => {
              if (e.target.value.length <= 15) setName(e.target.value);
            }}
          />
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
            value={roomCode}
            className="rounded-md text-[1.5rem] w-[40%] px-3 border-[2px] border-black flex-grow text-center text-black/70
          md:text-[1.6rem]
          lg:text-[1.9rem]"
            onChange={(e) => {
              if (e.target.value.length <= 6) setRoomCode(e.target.value);
            }}
          ></input>
        </div>

        <div
          className="w-[10rem] h-[86%] justify-self-center self-center bg-black rounded-md border-white border-2 text-white items-center flex justify-center gap-1
        hover:cursor-pointer hover:opacity-70 duration-300"
          onClick={() => {
            if (name.trim().length === 0) {
              alert("Please Enter Your Name");
              setName("");
            } else if (roomCode.trim().length == 0) {
              alert("Please Enter Room Code");
              setRoomCode("");
            } else {
              socket.emit("join-room", {
                roomCode: roomCode,
                avatar: imgSrc,
                name: name.trim(),
              });
              pageState.setPage("game");
            }
          }}
        >
          <span className="text-[1.7rem] pt-[3px]">JOIN...</span>
          <FontAwesomeIcon icon={faRightFromBracket} fade size="xl" />
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
