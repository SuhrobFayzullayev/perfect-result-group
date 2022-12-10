import React from "react";
import styles from "./index.module.scss";
import cardImage from "../../assets/img/cardImage.png";
import teamImage from "../../assets/img/TeamImage.png";
import TeamCard from "../../components/AboutCards/TeamCard";
import WorkFlowCard from "../../components/AboutCards/WorkFlowCard";

const About = () => {
  const data = [
    {
      id: 1,
      image: cardImage,
      title: "Consultation",
      description:
        "    Prototype, design, collabrate, and design systems all in Mockplus collabrate, and design systems all",
    },
    {
      id: 2,
      image: cardImage,
      title: "Planning",
      description:
        "    Prototype, design, collabrate, and design systems all in Mockplus collabrate, and design systems all",
    },
    {
      id: 3,
      image: cardImage,
      title: "Prototyping",
      description:
        "    Prototype, design, collabrate, and design systems all in Mockplus collabrate, and design systems all",
    },
    {
      id: 4,
      image: cardImage,
      title: "Programming",
      description:
        "    Prototype, design, collabrate, and design systems all in Mockplus collabrate, and design systems all",
    },
    {
      id: 5,
      image: cardImage,
      title: "Testing",
      description:
        "    Prototype, design, collabrate, and design systems all in Mockplus collabrate, and design systems all",
    },
    {
      id: 6,
      image: cardImage,
      title: "Technical services",
      description:
        "    Prototype, design, collabrate, and design systems all in Mockplus collabrate, and design systems all",
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
      <div className={styles.title}>
        <h1>About Workflow</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {data.map((info, index) => {
            return <WorkFlowCard info={info} key={index} />;
          })}
        </div>
      </div>
      <div className={styles.title}>
        <h1>About Team</h1>
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
