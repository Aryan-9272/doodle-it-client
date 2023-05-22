import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import SocketContext from "../../Contexts/SocketContext";

const Lobby = (props) => {
  const socket = useContext(SocketContext);
  const [playerReady, setPlayerReady] = useState(false);
  const [roundTimer, setRoundTimer] = useState(null);

  if (props.details.startTime != undefined && roundTimer == null)
    setRoundTimer(props.details.startTime);

  useEffect(() => {
    socket.on("round-timer-update", (startTime) => {
      setRoundTimer(startTime);
    });
  }, []);

  return (
    <div
      className="border-white border-[1px] min-w-[370px] h-[320px] relative bg-gray-900/50 z-[5] flex justify-between items-center flex-col
      sm:w-[472px] sm:h-[350px]
      md:w-[552px] md:h-[400px]
      lg:w-[422px] lg:h-[300px] lg:ml-2
      xl:w-[522px] xl:h-[350px] xl:ml-3"
    >
      <h1
        className="text-white w-full h-[20%] border-white border-b-[1px] text-[2.2rem] flex justify-center items-center
      sm:text-[2.4rem]
      md:text-[2.8rem]
      lg:text-[2.2rem]
      xl:text-[2.5rem]"
      >
        ROOM CODE : {props.details.roomCode}
      </h1>
      <div
        className="w-full h-[65%] bg-[#00000076] flex justify-between items-center flex-col py-2
      lg:py-3"
      >
        <div
          className="text-white w-full text-[2rem] flex justify-center items-center flex-col
        sm:text-[2.3rem]
        md:text-[2.5rem]
        lg:text-[1.9rem]
        xl:text-[2rem]"
        >
          ROUND {props.details.currRound} OF {props.details.rounds}
          <h1
            className="text-[1.2rem]
          sm:text-[1.35rem]
          md:text-[1.5rem]
          lg:text-[1.1rem]
          xl:text-[1.2rem]"
          >
            (STARTING AUTOMATICALLY IN{" "}
            {Math.floor(roundTimer / 60) != 0
              ? Math.floor(roundTimer / 60) + "m "
              : ""}
            {(roundTimer % 60) + "s"})
          </h1>
        </div>
        <div className="text-white w-full text-[2rem] flex justify-center items-center text-center flex-col"></div>
        <div
          className="text-white w-full text-[2rem] flex justify-center items-center flex-col
        sm:text-[2.3rem]
        md:text-[2.5rem]
        lg:text-[1.9rem]
        xl:text-[2rem]"
        >
          WAITING FOR PLAYERS
          <h1
            className="text-[1.2rem]
          sm:text-[1.35rem]
          md:text-[1.5rem]
          lg:text-[1.1rem]
          xl:text-[1.2rem]"
          >
            (CLICK TO START ROUND)
          </h1>
        </div>
      </div>
      <div
        className="bg-white w-full h-[15%] border-white border-[1px] text-[2rem] flex justify-center items-center gap-2
      hover:cursor-pointer hover:opacity-70 transition-opacity duration-300"
        onClick={() => {
          setPlayerReady(true);
          socket.emit("player-ready", { roomCode: props.details.roomCode });
        }}
      >
        READY
        {playerReady == true ? <FontAwesomeIcon icon={faCircleCheck} /> : <></>}
      </div>
    </div>
  );
};

export default Lobby;
