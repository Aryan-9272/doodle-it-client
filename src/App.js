import React, { useEffect, useState } from "react";
import Home from "./Home";
import Game from "./Game";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import Tutorial from "./Tutorial";
import Model from "./Model";
import SocketContext, { socket } from "./SocketContext";
import ErrorPage from "./ErrorPage";

export const CanvasContext = React.createContext();
export const PageContext = React.createContext();

function App() {
  const [page, setPage] = useState("home");
  const [canvas, setCanvas] = useState(null);
  const [result, setResult] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    socket.on("disconnect", () => {
      setPage("error");
      setErrMsg({
        head: "CONNECTION LOST",
        body: [
          "THIS HAPPENS DUE TO INACTIVITY OR CONNECTIVITY ISSUES.",
          "TRY RELOADING THE PAGE OR VISITING THE HOME PAGE TO RECONNECT.",
        ],
      });
      if (page === "home") socket.connect();
    });
    socket.on("room-not-found", (msg) => {
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
            {page === "game" ? <Game /> : <></>}
          </SocketContext.Provider>
        </CanvasContext.Provider>
        <SocketContext.Provider value={socket}>
          {page === "create" ? <CreateRoom /> : <></>}
          {page === "join" ? <JoinRoom /> : <></>}
        </SocketContext.Provider>
        {page === "home" ? <Home /> : <></>}
        {page === "error" ? <ErrorPage errMsg={errMsg} /> : <></>}
      </PageContext.Provider>
    </>
  );
}

export default App;
