import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, symbol, onClick }) => {
  const { circle, arrow } = styles;

  return (
    <button onClick={onClick}>
      <div className={circle}>
        <img src="/images/Ellipse 1.png" alt="" width={50} height={50} />
        <img
          className={arrow}
          src="/images/arrow.png"
          alt=""
          width={20}
          height={15}
        />
      </div>

      <span>{text}</span>
    </button>
  );
};

export default Button;
