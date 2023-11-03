import React from "react";
import { useState } from "react";
import TopSection from "./TopSection";
import RoleDiceSection from "./RoleDiceSection";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [diceNumber, setDiceNumber] = useState(1);
  const [numberSelected, setNumberSelected] = useState();
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const roleDice = () => {
    if (!numberSelected) {
      setError("Please select Number!!!");
      return;
    }

    let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    setDiceNumber(random);

    if (numberSelected === random) {
      setScore(score + random);
    } else {
      setScore(score - 2);
    }

    setNumberSelected(undefined);
  };

  const scoreReset = () => {
    setScore(0);
  };

  return (
    <div>
      <TopSection
        error={error}
        setError={setError}
        score={score}
        numberSelected={numberSelected}
        setNumberSelected={setNumberSelected}
      />
      <RoleDiceSection
        diceNumber={diceNumber}
        roleDice={roleDice}
        showRules={showRules}
        setShowRules={setShowRules}
        scoreReset={scoreReset}
      />
    </div>
  );
};

export default GamePlay;
