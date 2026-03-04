import React from "react";
import style from "./Button.module.css";

const Button = ({ icon, text, isOutline, ...rest }) => {
  return (
    <button
      className={isOutline ? style.outline_btn : style.primary_btn}
      {...rest}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
