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
      <Hi name={hiValue} />
      <Name name={"Services"} />
      <div className="main_content globalWrapper">
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: `Web site`,
              key: "1",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={website_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>A website is a unique address</h1>
                    <p>
                      A website is a unique addres Site or website means website
                      in English: web - "spider web, network" and site -"place,
                      segment, part of a network" A site is a collection of
                      linked web pagesusing a single domain name. Websites can
                      be created by an individual, group, business or
                      organization for various purposes. All public websites
                      make up the world wide web. Simply put, a site is an
                      address on the Internet that contains some information
                      (text, video, photos, documents, music, etc.). And
                      theInternet is a collection of these addresses.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Demon vs hosting`,
              key: "2",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={domain_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is domen hosting</h1>
                    <p>
                      Anyone who is involved in website development, programming
                      or any field of informatics will certainly come across
                      concepts such as "domain", "hosting", "server". These
                      concepts are explained in detail in the article. After
                      preparing the site on our personal computer, we need to
                      place it on the Internet. If you don't post it online, no
                      one will know about your site. But it's not the end of the
                      web, how can people find your site? - a question arises.
                      Therefore, it is necessary to make it possible for people
                      to find the site that you put on the Internet, but we will
                      talk about this in the next lessons. First, let's talk
                      about putting the site on the Internet. In general, we
                      will learn about how sites are located on the Internet and
                      how sites are named. To put any site on the Internet, a
                      domain and hosting are taken.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Web design`,
              key: "3",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={webdesign_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is Web Design</h1>
                    <p>
                      Web design (from English web design) — for websites, web
                      applications type of design in which web user interfaces
                      are designed. It is relative It is a young profession and
                      has not yet spread widely in Uzbekistan. Big on the
                      internet. The competition to reach a large number of users
                      is driving the demand for web designers. Web design
                      involves many different skills and disciplines involved in
                      producing and maintaining websites. Web design includes
                      various fields: user interface design (UI design);
                      authorship, including standardized code and proprietary
                      software; user experience design (UX design); and search
                      engine optimization.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Seo`,
              key: "4",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={seo_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is Seo</h1>
                    <p>
                      Search engine optimization (SEO - search engine
                      optimization) is the process of mproving the quality and
                      quantity of website traffic from search engines to a
                      website or webpage.[1] SEO targets unpaid traffic (known
                      as "natural" or "organic" results) rather than direct
                      traffic or paid traffic. Unpaid traffic can come from a
                      variety of search types, including image search, video
                      search, academic search, [2] news search, and
                      industry-specific vertical search engines.As an internet
                      marketing strategy, SEO looks at how search engines work,
                      the computer programmed algorithms that determine search
                      engine behavior, what people search for, the actual search
                      terms or keywords entered into search engines, and which
                      search engines are preferred by target audiences. comes
                      out.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Online store`,
              key: "5",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={store_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is Online Store</h1>
                    <p>
                      Over time, regular (offline) stores become less popular
                      and inconvenient for customers. Many products can be
                      easily purchased online. Internet store is a form of
                      electronic commerce, a website designed for selling goods
                      via the Internet. Customers of the online store can choose
                      goods online (on a computer or smartphone), place an order
                      for purchase, choose payment and delivery methods (and pay
                      through an electronic payment system). The goods in the
                      online store are presented in the form of a catalog (just
                      like shelves in a regular store), divided into different
                      categories and have a product photo, price, brief
                      information and other characteristics (just like
                      departments in a regular store).
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Mobile App`,
              key: "6",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={mobile_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is Mobile App</h1>
                    <p>
                      A mobile application or app is a computer program or
                      software application designed to run on a mobile device
                      such as a phone, tablet, or watch. Mobile applications
                      often stand in contrast to desktop applications which are
                      designed to run on desktop computers, and web applications
                      which run in mobile web browsers rather than directly on
                      the mobile device. Apps were originally intended for
                      productivity assistance such as email, calendar, and
                      contact databases, but the public demand for apps caused
                      rapid expansion into other areas such as mobile games,
                      factory automation, GPS and location-based services,
                      order-tracking, and ticket purchases, so that there are
                      now millions of apps available. Many apps require Internet
                      access. Apps are generally downloaded from app stores,
                      which are a type of digital distribution platforms.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Reklama`,
              key: "7",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={advertisement_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is Reklama</h1>
                    <p>
                      Advertising (from the Latin "reklamo" - to shout) -
                      information about the quality of goods, benefits from
                      their purchase; special information distributed about
                      legal entities and individuals or products for the purpose
                      of direct or indirect profit (income). Advertising is
                      considered a component of marketing and affects the
                      formation of demand and consumer taste. Advertising is
                      carried out for the purposes of creating an image of the
                      enterprise (long-term effect), increasing current sales
                      (short-term effect), helping buyers decide what to buy and
                      why they need to buy it, and other purposes. The main task
                      of advertising is to interest the customer, not to lose
                      customers and to expand them.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Logo branding`,
              key: "8",
              children: (
                <div className="content">
                  <div className="image">
                    <LogoBranding />
                  </div>
                  <div className="info">
                    <h1>What is Logo Branding</h1>
                    <p>
                      Brand vs Logo vs Brand Identity and Branding: What’s the
                      difference? There is a lot of confusion surrounding these
                      terms and what they mean. They are often jumbled together
                      as being one and the same. However, there are clear
                      distinctions between them. And, to develop a cohesive
                      brand, it’s important to understand the differences and
                      how each supports the bigger brand picture.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Crm`,
              key: "9",
              children: (
                <div className="content">
                  <div className="image">
                    <Crm />
                  </div>
                  <div className="info">
                    <h1>What is Crm</h1>
                    <p>
                      CRM (eng. customer relationship management, CRM) s the
                      management of customer relations It is widely used in
                      developed countries. Every firm, enterprise does the
                      necessary work to maintain constant contact with its
                      customers. the Latin "reklamo" - to shout) - information
                      about the quality of goods, benefits from their purchase;
                      special information distributed about legal entities and
                      individuals or products for the purpose of direct or
                      indirect profit (income). Advertising is considered a
                      component of marketing and affects the formation of demand
                      and consumer taste. Advertising is carried out for the
                      purposes of creating an image of and advertising began to
                      bring a lot of income. CRM is a convenient tool that
                      allows you to maintain contact information with customers
                      or partners, identify sales opportunities, identify
                      service problems, and manage marketing campaigns.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              label: `Telegram bot`,
              key: "10",
              children: (
                <div className="content">
                  <div className="image">
                    <img src={telegrambot_service} alt="" />
                  </div>
                  <div className="info">
                    <h1>What is Telegram bot</h1>
                    <p>
                      Telegram bots are programs or user pages that can be
                      automatically generated by an algorithm. These bots
                      (created through a primitive form of artificial
                      intelligence)arecapable of performing a variety of
                      specified tasks and are created for a wide variety of
                      activities.[1] There are also entertaining and interactive
                      bots on the Internet that can perform research and data
                      collection functions on specific industries and topics.
                      Special bots can download and send various files (music,
                      books, movies, data, programs) from social networks and
                      the Internet, while others perform sales or marketing
                      research. They have the following types;
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
