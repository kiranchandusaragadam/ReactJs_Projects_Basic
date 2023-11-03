import React from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "./Button";

const RoleDiceSection = ({
  diceNumber,
  roleDice,
  showRules,
  setShowRules,
  scoreReset,
}) => {
  return (
    <Main>
      <div className="dice_section">
        <img
          src={`/images/dices/dice_${diceNumber}.png`}
          alt="dice_image"
          onClick={roleDice}
        />
        <p>Click on Dice to roll</p>
      </div>
      <div className="btns_section">
        <OutlineButton onClick={scoreReset}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules(!showRules)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && (
        <div className="rules_section">
          <h1>How to play Dice game</h1>
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>if you get wrong guess then 2 point will be dedcuted</li>
          </ul>
        </div>
      )}
    </Main>
  );
};

export default RoleDiceSection;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  .dice_section {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      cursor: pointer;
    }

    p {
      font-size: 22px;
    }
  }

  .btns_section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .rules_section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background: #fbf1f1;
    padding: 20px;
    margin: 30px auto;
    max-width: 1280px;

    h1 {
      font-size: 32px;
    }

    ul {
      list-style: none;
      font-weight: 600;
    }
  }
`;
