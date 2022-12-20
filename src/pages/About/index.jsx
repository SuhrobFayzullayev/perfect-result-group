import React from "react";
import styles from "./index.module.scss";
import cardImage from "../../assets/img/cardImage.png";
import teamImage from "../../assets/img/TeamImage.png";
import TeamCard from "../../components/AboutCards/TeamCard";
import WorkFlowCard from "../../components/AboutCards/WorkFlowCard";
import Hi from "../../components/Hi/Hi";
import WorkFlow from "../../components/WorkFlow";
import { Language } from "../../services/lang";
const About = () => {
  const data = [
    {
      id: 1,
      image: cardImage,
      title: Language("CONSULTATION"),
      description: Language("ABOUT-PAGE-SUBTITLE")
    },
    {
      id: 2,
      image: cardImage,
      title: Language("PLANNING"),
      description: Language("ABOUT-PAGE-SUBTITLE")
    },
    {
      id: 3,
      image: cardImage,
      title:  Language("PROTOTYPING"),
      description: Language("ABOUT-PAGE-SUBTITLE")
    },
    {
      id: 4,
      image: cardImage,
      title:  Language("PROGRAMMING"),
      description: Language("ABOUT-PAGE-SUBTITLE")
    },
    {
      id: 5,
      image: cardImage,
      title:  Language("TESTING"),
      description: Language("ABOUT-PAGE-SUBTITLE")
    },
    {
      id: 6,
      image: cardImage,
      title: Language("TECHNICAL-SERVICES"),
      description: Language("ABOUT-PAGE-SUBTITLE")
    },
  ];

  const info = [
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
    {
      id: 1,
      image: teamImage,
      name: "Abdurashidov Ibrohim",
      job: "Frontend",
      experiance: "5",
    },
  ];

  return (
    <>
      <Hi name={Language("ABOUT")} />
      <div className={styles.title}>
        <h1>{Language("ABOUT-WORKFLOW")}</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {data.map((info, index) => {
            return <WorkFlowCard info={info} key={index} />;
          })}
        </div>
      </div>
      <div className={styles.title}>
        <h1>{Language("ABOUT-TEAM")}</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.team_container}>
          {info.map((item, index) => {
            return <TeamCard item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default About;
