import React, { useContext } from "react";
import { Context } from "../../context/context";
import Button from "../button/Button";
import styles from "./Main.module.css";

const Main = () => {
  const { wrapper, layer7, pinkSperm1, content, title } = styles;
  const [currentIndex, setCurrentIndex] = useContext(Context);

  console.log(currentIndex);

  return (
    <div className={wrapper}>
      <div className={content}>
        <p className={title}>Привет,</p>
        <h1>
          это <b>не</b> коммерческое задание
        </h1>
        <Button text="Что дальше ?" onClick={() => setCurrentIndex(1)} />
      </div>
      <img src="/images/Layer 7.png" alt="" className={layer7}></img>
      <img src="/images/pink_sperm_1.png" alt="" className={pinkSperm1} />
    </div>
  );
};

export default Main;
