import React from "react";
import styles from "./KeyMessage.module.css";
import Button from "../button/Button";

const KeyMessage = () => {
  const { wrapper, content, keyMessage, blocks, infoBlock, blockWithButton } =
    styles;

  return (
    <div className={wrapper}>
      <div className={content}>
        <div className={keyMessage}>
          <p>Ключевое сообщение</p>
          <h2>
            brend<b>xy</b>
          </h2>
        </div>
        <div className={blocks}>
          <div className={infoBlock}>
            <div>
              <img src="/images/plate.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci, atque.
              </p>
            </div>
          </div>
          <div className={blockWithButton}>
            <div>
              <img src="/images/schedule.png" alt="" />
              <p>Lorem ipsum dolor.</p>
            </div>
            <Button text="Подробнее" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyMessage;
