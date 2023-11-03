import React from "react";
import styled from "styled-components";

const TopSection = ({
  error,
  setError,
  score,
  numberSelected,
  setNumberSelected,
}) => {
  const nums = [1, 2, 3, 4, 5, 6];

  const onClickHandler = (value) => {
    setNumberSelected(value);
    setError("");
  };

  return (
    <Container>
      <div className="score_section">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
      <div className="number_section">
        <div>
          {nums.map((value, i) => (
            <Box
              key={i}
              onClick={() => onClickHandler(value)}
              isSelected={value === numberSelected}
            >
              {value}
            </Box>
          ))}
        </div>
        <p className="error">{error}</p>
      </div>
    </Container>
  );
};

export default TopSection;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  height: 100px;
  margin: 40px auto;

  p {
    font-size: 18px;
    font-weight: 600;
  }

  .score_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 160px;
  }

  h1 {
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
  }

  .number_section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 100px;

    div {
      display: flex;
      gap: 20px;
    }

    .error {
      color: red;
    }
  }
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
