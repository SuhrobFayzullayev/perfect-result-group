import React, { useState } from "react";
import { Tabs } from "antd";
import website_service from "../../assets/img/websiteService.png";
import domain_service from "../../assets/img/domainService.png";
import webdesign_service from "../../assets/img/webdesignService.png";
import seo_service from "../../assets/img/seoService.png";
import store_service from "../../assets/img/storeService.png";
import mobile_service from "../../assets/img/mobileService.png";
import advertisement_service from "../../assets/img/reklamaService.png";
import telegrambot_service from "../../assets/img/telegramBot.png";
import { ReactComponent as LogoBranding } from "../../assets/img/logoBranding.svg";
import { ReactComponent as Crm } from "../../assets/img/crm.svg";
import Hi from "../../components/Hi/Hi";
import "./index.scss";
import Name from "../../components/ComponentName";
import { Language } from "../../services/lang";

function Services(props) {
  const onChange = (key) => {
    setHiValue(tabsData[key - 1]);
  };
  const tabsData = [
    "SERVICES WEB SITE",
    "SERVICES DEMON HOSTING",
    "SERVICES WEB DESIGN",
    "SERVICES SEO",
    "SERVICES Online store",
    "SERVICES Mobile App",
    "SERVICES Reklama",
    "SERVICES Logo branding",
    "SERVICES Crm",
    "SERVICES Telegram bot",
  ];
  const [hiValue, setHiValue] = useState("SERVICES WEB SITE");
  return (
    <div>
      <Hi name={Language("SERVICES-WEB-SITE")} />
      <Name name={Language("SERVICES")} />
      <div className="main_content globalWrapper">
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label:Language("WEB-SITE"),
              key: "1",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={website_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("WEBSITE-ADDRESS")}</h1>
                    <p>
                    {Language("WEBSITE-ADDRESS-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("DEMON-HOSTING"),
              key: "2",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={domain_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("DEMON-HOSTING-TITLE")}</h1>
                    <p>
                    {Language("DEMON-HOSTING-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("WEB-DESIGN"),
              key: "3",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={webdesign_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("WEB-DESIGN-TITLE")}</h1>
                    <p>
                    {Language("WEB-DESIGN-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("SEO"),
              key: "4",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={seo_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("SEO-TITLE")}</h1>
                    <p>
                      {Language("SEO-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("ONLINE-STORE"),
              key: "5",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={store_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("ONLINE-STORE-TITLE")}</h1>
                    <p>
                    {Language("ONLINE-STORE-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("MOBILE-APP"),
              key: "6",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={mobile_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("MOBILE-APP-TITLE")}</h1>
                    <p>
                        {Language("MOBILE-APP-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("ADVERTISING"),
              key: "7",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={advertisement_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("ADVERTISING-TITLE")}</h1>
                    <p>
                    {Language("ADVERTISING-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("LOGO-BRANDING"),
              key: "8",
              children: (
                <div className="content">
                  <div className="image">
                    <LogoBranding />
                  </div>
                  <div className="info">
                    <h1>{Language("LOGO-TITLE")}</h1>
                    <p>
                       {Language("LOGO-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("CRM"),
              key: "9",
              children: (
                <div className="content">
                  <div className="image">
                    <Crm />
                  </div>
                  <div className="info">
                    <h1>{Language("CRM-TITLE")}</h1>
                    <p>
                       {Language("CRM-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: Language("TELEGRAM-BOT"),
              key: "10",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={telegrambot_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>{Language("TELEGRAM_TITLE")}</h1>
                    <p>
                    {Language("TELEGRAM-TEXT")}
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Services;
