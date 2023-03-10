import React, { useState } from "react";
import logo from "./assets/doodle-it-logo-modified.png";
import hLogo from "./assets/doodle-it-logo.png";
import Home from "./Home";
import Game from "./Game";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import Tutorial from "./Tutorial";
import Model from "./Model";

export const CanvasContext = React.createContext();

function App() {
  const [canvas, setCanvas] = useState(null);
  const [result, setResult] = useState(null);
  return (
    <>
      <CanvasContext.Provider value={{ canvas, setCanvas }}>
        <Model setResult={setResult} />
        {/* <Home /> */}
        {/* <CreateRoom /> */}
        {/* <JoinRoom /> */}
        <Tutorial result={result} />
        {/* <Game /> */}
      </CanvasContext.Provider>
    </>
  );
}

export default App;
