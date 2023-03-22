import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import multiavatar from "@multiavatar/multiavatar/esm";
import { PageContext } from "./App";
import SocketContext from "./SocketContext";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890", 6);

let avatarArray = [];
let index = 0;

for (let i = 0; i < 15; i++) {
  avatarArray[i] = (Math.random() * 10000).toFixed(0);
}

const maxPlayerOptions = [5, 10, 15];
const roundOptions = [3, 5, 7, 10];
const timeOptions = [10, 20, 30];

const CreateRoom = () => {
  const pageState = useContext(PageContext);
  const socket = useContext(SocketContext);
  const [name, setName] = useState("");
  const [maxP, setMaxP] = useState(maxPlayerOptions[0]);
  const [rounds, setRounds] = useState(roundOptions[0]);
  const [time, setTime] = useState(timeOptions[0]);
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
        className="w-[24rem] h-[36rem] bg-gray-900/50 shadow-lg rounded-md p-[1rem] opacity-95 order-2 mx-auto gap-4 relative top-[6.5rem] grid grid-rows-[repeat(7,1fr)] border-white border-2
        sm:w-[33rem] sm:top-[7.5rem]
        md:w-[35rem] md:py-[1rem]
        lg:w-[40rem] lg:py-[0.9rem] lg:h-[37.5rem] lg:px-[2rem]"
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
            className=" h-[90%] w-auto object-cover border-white border-solid border-[2px] rounded-[50%]"
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
            className=" w-full h-[90%] text-[2rem] rounded-md p-2 text-gray-500 border-[2px] border-[black] outline outline-[white] outline-[2px]
            md:text-[2.2rem]
            lg:text-[2.4rem]"
            onChange={(e) => {
              if (e.target.value.length <= 15) setName(e.target.value);
            }}
          />
        </div>
        <div
          className=" w-full h-[75%] bg-white rounded-md flex justify-between items-center p-2 text-[1.5rem] text-black justify-self-center self-center
    sm:text-[2rem]
    md:text-[2.2rem]
    lg:text-[2.4rem]"
        >
          SET MAX PLAYERS :
          <select
            value={maxP}
            onChange={(e) => {
              setMaxP(e.target.value);
            }}
            className="w-[4rem] border-black border-2 rounded-md
      sm:w-[5.5rem]"
          >
            {maxPlayerOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className=" w-full h-[75%] bg-white rounded-md flex justify-between items-center p-2 text-[1.5rem] text-black justify-self-center self-center
    sm:text-[2rem]
    md:text-[2.2rem]
    lg:text-[2.4rem]"
        >
          SET ROUNDS :
          <select
            value={rounds}
            onChange={(e) => {
              setRounds(e.target.value);
            }}
            className="w-[4rem] border-black border-2 rounded-md
      sm:w-[5.5rem]"
          >
            {roundOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className=" w-full h-[75%] bg-white rounded-md flex justify-between items-center p-2 text-[1.5rem] text-black justify-self-center self-center
    sm:text-[2rem]
    md:text-[2.2rem]
    lg:text-[2.4rem]"
        >
          SET TIME LIMIT :
          <select
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            className="w-[4rem] border-black border-2 rounded-md
      sm:w-[5.5rem]"
          >
            {timeOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}s
                </option>
              );
            })}
          </select>
        </div>
        <div
          className="w-[12rem] h-[86%] justify-self-center self-center bg-black rounded-md border-white border-2 text-white items-center flex justify-center gap-1
        hover:cursor-pointer hover:opacity-70 duration-300"
          onClick={() => {
            if (name.trim().length === 0) {
              alert("Please Enter Your Name");
              setName("");
            } else {
              socket.emit("create-room", {
                roomCode: nanoid(),
                avatar: imgSrc,
                name: name.trim(),
                maxPlayers: maxP,
                rounds: rounds,
                timeLimit: time,
              });
              pageState.setPage("game");
            }
          }}
        >
          <span className="text-[1.5rem] pt-[3px]">CREATE...</span>
          <FontAwesomeIcon icon={faPen} fade size="lg" />
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
