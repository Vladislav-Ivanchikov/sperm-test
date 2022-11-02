import React from "react";
import styles from "./TextMessage.module.css";

const TextMessage = () => {
  const { wrapper, message, messageTitle, title } = styles;

  return (
    <div className={wrapper}>
      <div className={messageTitle}>
        <p className={title}>Текст сообщения</p>
      </div>

      <div className={message}>
        <p>
          <b>Lorem ipsum dolor sit amet</b>, consectetur adipisicing elit. Ad
          eaque eum explicabo nam, nemo odit ratione veritatis. Alias architecto
          delectus dolores eaque error, est illo, incidunt iure iusto, possimus
          quis rem repellat sint! Autem error facere facilis ipsa ipsam minima
          nemo quibusdam quod unde ut! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A accusamus accusantium aliquam asperiores atque
          blanditiis commodi, culpa delectus distinctio dolor dolorem doloremque
          dolores esse est excepturi itaque laborum minima odio officia officiis
          omnis quas quia sed soluta ullam veniam, voluptas. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Consectetur corporis delectus
          expedita officiis quam sequi similique! Fugit maiores placeat ratione
          reiciendis rerum tempore. Aut beatae deleniti dolores ex
          exercitationem itaque, maiores, maxime minima officiis perferendis
          perspiciatis quasi quidem quos repellat tempora tenetur ullam veniam
          vitae? Ad aliquid aperiam debitis deserunt, doloremque ea enim
          excepturi exercitationem ipsa ipsam itaque laborum molestiae nisi non,
          officia placeat quidem quisquam quod sapiente sequi similique ut
          voluptas. A amet aspernatur atque consectetur consequatur consequuntur
          corporis cum delectus dicta dolor ducimus ea enim est, et eveniet
          expedita fugit id illo incidunt itaque laboriosam libero maiores
          maxime minus necessitatibus nobis obcaecati odio odit quidem quod
          similique totam ullam unde veniam veritatis voluptate voluptatem!
          Blanditiis deleniti id iste?
        </p>
      </div>
    </div>
  );
};

export default TextMessage;
