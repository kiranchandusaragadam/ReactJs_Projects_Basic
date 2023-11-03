import { useState } from "react";
import "./App.css";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, SetIsGameStarted] = useState(false);

  const toggle = () => {
    SetIsGameStarted(!isGameStarted);
  };

  return (
    <div>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggle} />}</div>
  );
}

export default App;
