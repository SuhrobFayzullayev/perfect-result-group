import React from "react";
import Name from "../../components/ComponentName";
import Contact from "../../components/Contacts";
import HomePortfolio from "../../components/Portfolio/homePortfolio";
import Client from "../../components/Client/Client";
import Hi from "../../components/Hi/Hi";

const Home = () => {
  return (
    <>
      <Hi name={"home"} />
      <HomePortfolio />
      <Client />
      <Contact />
    </>
  );
};

export default Home;
