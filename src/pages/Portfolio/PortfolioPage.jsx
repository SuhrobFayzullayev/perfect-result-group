import React from "react";
import Name from "../../components/ComponentName";
import "./portfolioPage.scss";
import { Tabs } from "antd";
import Crm from "./Components/Crm/Crm";
import { crm, logoBranding, mobileApp, onlineStore, reklama, seo, telegramBot } from "./Components/Crm/helpers";
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
            {
              label: `Seo`,
              key: "4",
              children: <Crm data={seo} />,
            },
            {
              label: `Telegram Bot`,
              key: "5",
              children: <Crm data={telegramBot} />,
            },
            {
              label: `Reklama`,
              key: "6",
              children: <Crm data={reklama} />,
            },
            {
              label: `Logo Branding`,
              key: "7",
              children: <Crm data={logoBranding} />,
            },
          ]}
        />
      </div>
    </section>
  );
}
