import styled from "styled-components";

export const Button = styled.button`
  background: black;
  color: white;
  font-weight: 600;
  width: 220px;
  padding: 10px 18px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  font-weight: 600;
  width: 220px;
  padding: 10px 18px;
  border-radius: 6px;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
