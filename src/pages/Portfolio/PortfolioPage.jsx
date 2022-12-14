import React from "react";
import Name from "../../components/ComponentName";
import "./portfolioPage.scss";
import { Tabs } from "antd";
import Crm from "./Components/Crm/Crm";
import { crm, mobileApp, onlineStore } from "./Components/Crm/helpers";
import Hi from "../../components/Hi/Hi";

export default function PortfolioPage() {
  return (
    <section id="portfolio">
      <Hi name={"PORTFOLIO"} />
      <Name name={"Portfolio"} />
      <div className="container globalWrapper">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: `Crm`,
              key: "1",
              children: <Crm data={crm} />,
            },
            {
              label: `Internet do'kon`,
              key: "2",
              children: <Crm data={onlineStore} />,
            },
            {
              label: `Mobile App`,
              key: "3",
              children: <Crm data={mobileApp} />,
            },
          ]}
        />
      </div>
    </section>
  );
}
