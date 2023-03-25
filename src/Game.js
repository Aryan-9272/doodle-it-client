import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faMessage,
  faPenToSquare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import hLogo from "./assets/doodle-it-logo.png";
import Result from "./Result";
import Scoreboard from "./Scoreboard";
import Board from "./Board";
import Players from "./Players";
import Chats from "./Chats";
import Lobby from "./Lobby";
import SocketContext from "./SocketContext";

const decideWidth = () => {
  let width;
  if (window.innerWidth >= 1280) {
    width = 1280;
  } else if (window.innerWidth >= 1024) {
    width = 1024;
  } else if (window.innerWidth >= 768) {
    width = 768;
  } else if (window.innerWidth >= 640) {
    width = 640;
  } else if (window.innerWidth < 640) {
    width = 1;
  }
  return width;
};

const Game = () => {
  const socket = useContext(SocketContext);
  const [playerList, setPlayerList] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [chatMsg, setChatMsg] = useState("");
  const [roomDetails, setRoomDetails] = useState({});
  const [opacity, setOpacity] = useState(0);
  const [z, setZ] = useState(4);
  const [playerSlide, setPlayerSlide] = useState(-120);
  const [chatSlide, setChatSlide] = useState(120);
  const [winWidth, setWinWidth] = useState(decideWidth());
  const currWidth = useRef(decideWidth());
  const playerRef = useRef(null);
  const chatRef = useRef(null);

  const resized = () => {
    let width = decideWidth();
    if (currWidth.current != width) {
      currWidth.current = width;
      setWinWidth(width);
      setOpacity(0);
      setZ(4);
      setPlayerSlide(-120);
      setChatSlide(120);
    }
  };

  const playerUpdate = (players) => {
    setPlayerList(
      players.map((player, index) => {
        return <Players key={index} details={player} id={socket.id} />;
      })
    );
  };

  const chatUpdate = (chat) => {
    setChatList((prev) => {
      return [...prev, <Chats key={prev.length} chat={chat} />];
    });
  };

  const sendMessage = () => {
    if (chatMsg.trim().length != 0) {
      socket.emit("chat-to-server", {
        roomCode: roomDetails.roomCode,
        chatMsg: chatMsg,
      });
      setChatMsg("");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resized);

    socket.on("player-joined", (details) => {
      setRoomDetails(details);
    });

    socket.on("player-list-update", (players) => {
      playerUpdate(players);
    });

    socket.on("chat-to-client", (chat) => {
      chatUpdate(chat);
    });

    return () => {
      window.removeEventListener("resize", resized);
    };
  }, []);

  useEffect(() => {
    playerRef.current.scrollTo({
      top: playerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [playerList]);

  useEffect(() => {
    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatList]);

  return (
    <>
      <div
        className="w-full min-h-[49rem] h-screen bg-gradient-to-t from-slate-900 to-black absolute
    sm:min-h-[52rem]
    md:min-h-[58rem]
    lg:min-h-[42rem]
    xl:min-h-[48rem]"
      >
        <div className=" top-0 w-full h-[5rem] text-white flex  items-center text-[1.5rem] relative z-[10]">
          <span
            className="mt-5 ml-3
      sm:ml-5
      lg:ml-[1.25rem]
      xl:ml-[1.5rem]"
          >
            <FontAwesomeIcon icon={faPenToSquare} size="xl" />
          </span>
          <img
            src={hLogo}
            className="h-[3rem] absolute left-[3rem] mt-5
         sm:left-[3.5rem]
         lg:left-[3.5rem]
         xl:left-[3.75rem]"
          />

          <div
            className="absolute flex justify-center items-center rounded-sm ml-4 text-[2rem] mt-[10rem]
          sm:right-[1.6rem] sm:mt-5 sm:px-2 sm:ml-0
          md:right-[2rem]
          lg:right-[2.8rem]
          xl:right-[4rem]"
          >
            <FontAwesomeIcon icon={faHourglassHalf} size="sm" shake={false} />
            <h1 className="ml-3 ">TIME LEFT : 30s</h1>
          </div>
        </div>
        <div
          className="absolute mt-[6rem] flex justify-center items-center w-full h-[470px] px-6 overflow-hidden
        sm:mt-4 sm:h-[570px]
        md:h-[650px]
        lg:px-5 lg:justify-between lg:h-fit
        xl:px-6"
        >
          <div
            className="w-[200px] h-[470px] border-white border-[1px] justify-start items-center flex-col bg-gray-900/50 absolute left-2 z-10
            transition-[transform] ease-in duration-1000
            sm:w-[200px] sm:h-[570px]
            md:w-[250px] md:h-[650px]
            lg:flex lg:w-[200px] lg:h-[520px] lg:static
            xl:flex xl:w-[280px] xl:h-[620px]"
            style={
              window.innerWidth < 1024
                ? { transform: `translate(${playerSlide}%)` }
                : { transform: "translate(0)" }
            }
          >
            <h1
              className="w-full h-[3rem] flex justify-center items-center bg-black text-[2rem] text-white border-b-[1px] border-white
            lg:text-[1.8rem]
            xl:text-[2rem]"
            >
              PLAYERS
            </h1>
            <div
              className="w-full h-[420px] pl-1 pb-1 overflow-y-scroll players
            sm:pl-1 sm:pb-1 sm:h-[520px]
            md:pl-2 md:pb-2 md:h-[600px]
            lg:pl-1 lg:pb-1 lg:h-[470px]
            xl:pl-2 xl:pb-2 xl:h-[570px]"
              ref={playerRef}
            >
              {playerList}
            </div>
          </div>

          <Lobby details={roomDetails} />
          {/* <Board /> */}

          {/* <Result /> */}

          {/* <Scoreboard/> */}

          <div
            className="w-[330px] h-[470px] justify-center items-center flex-col border-white border-[1px] self-end absolute right-2 z-10
            transition-[transform] ease-in duration-1000
            sm:h-[570px]
            md:w-[400px] md:h-[650px]
            lg:flex lg:w-[330px] lg:h-[450px] lg:static lg:self-end
            xl:flex xl:w-[370px] xl:h-[550px]"
            style={
              window.innerWidth < 1024
                ? { transform: `translate(${chatSlide}%)` }
                : { transform: "translate(0)" }
            }
          >
            <h1
              className="w-full h-[10%] flex justify-center items-center bg-black text-[2rem] text-white border-b-[1px] border-white
            lg:text-[1.8rem]
            xl:text-[2rem]"
            >
              CHATBOX
            </h1>
            <div
              className="chat w-full h-[83%] bg-white border-black border-[1px] overflow-y-scroll"
              ref={chatRef}
            >
              {chatList}
            </div>

            <div className="w-full h-[7%] bg-gray-900 flex justify-between items-center border-t-[1px] text-white pr-3">
              <input
                className="w-[95%] h-full text-[1rem] bg-gray-900 focus:outline-none text-white p-3"
                placeholder="ENTER TEXT HERE"
                value={chatMsg}
                onChange={(e) => {
                  setChatMsg(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              ></input>
              <span
                className="text-[1.1rem] transition-opacity duration-150 hover:opacity-80 hover:cursor-pointer"
                onClick={sendMessage}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </div>
          </div>
        </div>

        <div
          className=" w-full h-full absolute bg-black/60 top-0 flex justify-center items-end select-none
           transition-opacity duration-1000 
           lg:hidden"
          style={
            window.innerWidth < 1024 ? { opacity: opacity, zIndex: z } : {}
          }
        >
          <div
            className="w-[8rem] h-[3rem] bg-white mb-[2.77rem] rounded-md flex justify-center items-center text-[1.8rem]
            sm:w-[10rem] sm:h-[4rem] sm:mb-[3.37rem] sm:text-[2.3rem]"
            onClick={() => {
              setOpacity(0);
              setPlayerSlide(-120);
              setChatSlide(120);
              setZ(4);
            }}
          >
            BACK
          </div>
        </div>

        <div
          className=" absolute bottom-[1.3rem] w-full h-[6rem] flex justify-between items-center px-2 select-none z-[5]
          transition-opacity duration-1000 
          sm:bottom-[1.4rem] sm:h-[8rem]
          lg:hidden"
          style={window.innerWidth < 1024 ? { opacity: (opacity + 1) % 2 } : {}}
        >
          <div
            className="w-[8rem] h-[3rem] border-white border-[1px] text-white flex justify-center items-center text-[1.5rem] bg-black rounded-md
          sm:w-[10rem] sm:h-[4rem] sm:text-[1.9rem]
          hover:bg-white hover:text-black"
            onClick={() => {
              setZ(6);
              setOpacity(1);
              setPlayerSlide(0);
            }}
          >
            PLAYERS
          </div>
          <div
            className="w-[8rem] h-[3rem] border-white border-[1px] text-white flex justify-center items-center text-[1.5rem] bg-black rounded-md
          sm:w-[10rem] sm:h-[4rem] sm:text-[1.9rem]
          hover:bg-white hover:text-black"
            onClick={() => {
              setZ(6);
              setOpacity(1);
              setChatSlide(0);
            }}
          >
            CHATBOX
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
