import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices_image" />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  div h1 {
    font-size: 96px;
    font-weight: 700;
  }
`;
