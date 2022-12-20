import React from "react";
import Name from "../../components/ComponentName";
import Contact from "../../components/Contacts";
import HomePortfolio from "../../components/Portfolio/homePortfolio";
import Client from "../../components/Client/Client";
import Hi from "../../components/Hi/Hi";
import WorkFlow from "../../components/WorkFlow";

const Home = () => {
  return (
    <>
      <Hi name={"home"} />
      <WorkFlow />
      <HomePortfolio />
      <Client />
      <Contact id={"contact"} />
    </>
  );
};

export default Home;
