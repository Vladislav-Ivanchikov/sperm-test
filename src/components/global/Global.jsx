import React, { useEffect } from "react";
import { setPositionByIndex, sliderFunc } from "../../utils/sliderFunctions";
import Main from "../first/Main";
import TextMessage from "../second/TextMessage";
import KeyMessage from "../third/KeyMessage";
import styles from "./Global.module.css";

const Global = () => {
  useEffect(() => {
    const slider = document.querySelector(`.${styles.slider}`);
    const slides = Array.from(document.querySelectorAll(`.${styles.slide}`));
    sliderFunc(slides, slider);
    window.addEventListener("resize", setPositionByIndex);
  }, []);

  return (
    <div className={styles.global}>
      <header>
        <img src="/images/home.png" width={25} height={25} alt="Home" />|{" "}
        <span>project</span>
      </header>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Main />
        </div>
        <div className={styles.slide}>
          <TextMessage />
        </div>
        <div className={styles.slide}>
          <KeyMessage />
        </div>
      </div>
      <footer>
        <p>Vladlen Ivanchik</p>
      </footer>
    </div>
  );
};

export default Global;
