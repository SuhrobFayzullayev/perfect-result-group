import React from "react";
import Client from "../../components/Client/Client";
import Hi from "../../components/Hi/Hi";
import Name from "../../components/ComponentName";
import Portfolio from "../../components/Portfolio/portfolio";
import Contact from "../../components/Contacts";

const Home = () => {
  return (
    <>
      <Hi isAbout={true} />
      <Client />
      <Portfolio />
      <Name name={"Contact"} />
      <Contact />
    </>
  );
};

export default Home;
