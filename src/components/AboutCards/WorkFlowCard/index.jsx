import React from "react";
import styles from "./style.module.scss";

const WorkFlowCard = ({ info }) => {
  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}>
          <img src={info.image} alt="Card image" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.title}>
          <div>
            <div className={styles.description}>
              <div className={styles.circle}>
                <span>{info.id || "not given"}</span>
              </div>
              <h1>{info.title || "title"}</h1>
            </div>
            <p>{info.description || "description"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowCard;
