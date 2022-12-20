import React from "react";
import Name from "../../components/ComponentName";
import "./portfolioPage.scss";
import { Tabs } from "antd";
import Crm from "./Components/Crm/Crm";
import { crm, logoBranding, mobileApp, onlineStore, reklama, seo, telegramBot } from "./Components/Crm/helpers";
import Hi from "../../components/Hi/Hi";
import { Language } from "../../services/lang";

export default function PortfolioPage() {
  return (
    <section id="portfolio">
      <Hi name={Language("PORTFOLIO")} />
      <Name name={Language("PORTFOLIO")} />
      <div className="container globalWrapper">
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: Language("CRM"),
              key: "1",
              children: <Crm data={crm} />,
            },
            {
              label: Language("ONLINE-STORE"),
              key: "2",
              children: <Crm data={onlineStore} />,
            },
            {
              label: Language("MOBILE-APP"),
              key: "3",
              children: <Crm data={mobileApp} />,
            },
            {
              label: Language("SEO"),
              key: "4",
              children: <Crm data={seo} />,
            },
            {
              label: Language("TELEGRAM-BOT"),
              key: "5",
              children: <Crm data={telegramBot} />,
            },
            {
              label: Language("ADVERTISING"),
              key: "6",
              children: <Crm data={reklama} />,
            },
            {
              label: Language("LOGO-BRANDING"),
              key: "7",
              children: <Crm data={logoBranding} />,
            },
          ]}
        />
      </div>
    </section>
  );
}
