import React from "react";
import Client from "../../components/Client/Client";
import Hi from "../../components/Hi/Hi";

const Home = () => {
  return (
    <div>
      <Hi isAbout={true} />
      <Client />
    </div>
  );
};

export default Home;
