import React from "react";
import styles from "./style.module.scss";

const TeamCard = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <img src={item.image} alt="" />
      <h5>{item.name || "name not"}</h5>
      <p>{item.job}</p>
      <div className={styles.hide}>
        <p>PDP</p>
        <p>AIF</p>
        <p>UIC</p>
        <p>PRG</p>
      </div>
      <span>{item.experiance} years experience</span>
    </div>
  );
};

export default TeamCard;
