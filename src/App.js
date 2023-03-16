import React, { useState } from "react";
import logo from "./assets/doodle-it-logo-modified.png";
import hLogo from "./assets/doodle-it-logo.png";
import Home from "./Home";
import Game from "./Game";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import Tutorial from "./Tutorial";
import Model from "./Model";
import SocketContext, { socket } from "./SocketContext";

export const CanvasContext = React.createContext();
export const PageContext = React.createContext();

function App() {
  const [page, setPage] = useState("home");
  const [canvas, setCanvas] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <>
      <PageContext.Provider value={{ page, setPage }}>
        <CanvasContext.Provider value={{ canvas, setCanvas }}>
          <Model setResult={setResult} />
          {page === "tutorial" ? <Tutorial result={result} /> : <></>}
          <SocketContext.Provider value={socket}>
            {page === "game" ? <Game /> : <></>}
          </SocketContext.Provider>
        </CanvasContext.Provider>
        <SocketContext.Provider value={socket}>
          {page === "create" ? <CreateRoom /> : <></>}
          {page === "join" ? <JoinRoom /> : <></>}
        </SocketContext.Provider>
        {page === "home" ? <Home /> : <></>}
      </PageContext.Provider>
    </>
  );
}

export default App;
