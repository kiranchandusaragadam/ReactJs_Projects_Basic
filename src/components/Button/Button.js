import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={props.isOutline ? style.btn_2 : style.btn_1}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
