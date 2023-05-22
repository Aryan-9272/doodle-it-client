import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import CreateRoom from "./Pages/CreateRoom";
import JoinRoom from "./Pages/JoinRoom";
import Tutorial from "./Pages/Tutorial";
import Model from "./Utilities/Model";
import SocketContext, { socket } from "./Contexts/SocketContext";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";

export const CanvasContext = React.createContext();
export const PageContext = React.createContext();

function App() {
  const [page, setPage] = useState("home");
  const [canvas, setCanvas] = useState(null);
  const [result, setResult] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    socket.on("disconnect", () => {
      setErrMsg({
        head: "CONNECTION LOST",
        body: [
          "THIS HAPPENS DUE TO INACTIVITY OR CONNECTIVITY ISSUES.",
          "CONSIDER REFRESHING THE PAGE OR WAITING MOMENTARILY FOR RECONNECTION.",
        ],
      });
      setPage("error");
      const interval = setInterval(() => {
        if (socket.connected) {
          clearInterval(interval);
        } else {
          socket.connect();
        }
      }, 3000);
    });

    socket.on("room-not-found", (msg) => {
      setErrMsg(msg);
      setPage("error");
    });

    socket.on("room-full", (msg) => {
      setErrMsg(msg);
      setPage("error");
    });

    socket.on("round-active", (msg) => {
      setErrMsg(msg);
      setPage("error");
    });
  }, []);

  useEffect(() => {
    if (page != "tutorial") {
      setResult(null);
    }
    if (
      (page === "create" || page === "join" || page === "game") &&
      socket.connected === false
    ) {
      setErrMsg({
        head: "SERVER DOWN",
        body: [
          "THE CONNECTION TO THE SERVER COULD NOT BE ESTABLISHED MOMENTARILY.",
          "CHECK NETWORK SETTINGS AND TRY CONNECTING AGAIN AFTER SOME TIME.",
        ],
      });
      setPage("error");
    }
  }, [page]);

  return (
    <>
      <PageContext.Provider value={{ page, setPage }}>
        <CanvasContext.Provider
          value={{ canvas, setCanvas, result, setResult }}
        >
          <Model setResult={setResult} />
          {page === "tutorial" ? <Tutorial /> : <></>}
          <SocketContext.Provider value={socket}>
            {page === "game" && socket.connected ? <Game /> : <></>}
          </SocketContext.Provider>
        </CanvasContext.Provider>
        <SocketContext.Provider value={socket}>
          {page === "create" && socket.connected ? <CreateRoom /> : <></>}
          {page === "join" && socket.connected ? <JoinRoom /> : <></>}
        </SocketContext.Provider>
        {page === "home" ? <Home /> : <></>}
        {page === "error" ? <ErrorPage errMsg={errMsg} /> : <></>}
        {page === "about" ? <About /> : <></>}
      </PageContext.Provider>
    </>
  );
}

export default App;
