import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import { ReactComponent as NavToggle } from "../../assets/icon/sideMenu.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./index.scss";
import { HeaderTiltle } from "../HeaderTitle/HeaderTiltle";
import { changeLanguage } from "../../services/changeLanguage";
import { Language } from "../../services/lang";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const language = localStorage.getItem("language");
  const items = [
    {
      label: (
        <p onClick={() => changeLanguage("EN")}>
          EN
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p onClick={() => changeLanguage("UZ")}>
          UZ
        </p>
      ),
      key: "1",
    },
    {
      label: (
        <p onClick={() => changeLanguage("RU")}>
          RU
        </p>
      ),
      key: "2",
    },
  ];
  const location = useLocation();
  const onHandleContact = () => {
    location.pathname === "/"
      ? (document.documentElement.scrollTop = 2400)
      : console.log("go to home");
  };

  const handleMenuToggle = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header>
      <div className="header_wrapper">
        <div className="left_header">
          <Link to="/" className="image">
            <Logo />
          </Link>
        </div>
        <div className="right_header">
          <nav className={menu ? "activeMenu" : ""}>
            <ul>
              <div className="closing_icon" onClick={() => handleMenuToggle()}>
                <div className="image"></div>
              </div>
              <h1>
                <span>PR</span>Agency
              </h1>
              <HeaderTiltle />
              {/* <div className="mobile_content">
                    <a href="tel:+998936843757">
                    <div className="for_image">
                        <Call_icon />
                    </div>
                        <h2>
                            <span>Call:</span>+998 99 111 11 11
                        </h2>
                    </a>
                    <a
                        href="mailto:sodikovotabeksobirjonovich1509@gmail.com"
                        target="blank"
                    >
                    <div className="for_image">
                        <Email_icon />
                    </div>
                        <h2>
                            <span>Gmail:</span>abdurashidov Ibrohim
                        </h2>
                    </a>
                    <a
                        href="https://www.google.com/maps/place/%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80-3,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100115,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2844818,69.2188239,16z/data=!3m1!4b1!4m5!3m4!1s0x38ae8a45cc5c3f35:0x929c69dffb5b8141!8m2!3d41.2855934!4d69.223683"
                        target="blank"
                    >
                    <div className="for_image">
                        <Location_icon />
                    </div>
                    <h2>
                        <span>Map:</span>Toshkent chilanzar 1
                    </h2>
                    <div className="for_map">
                        <button>Map</button>
                    </div>
                </a>
              </div> */}
            </ul>
          </nav>
          <div className="lang_dropdown">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ cursor: "pointer" }}>
                  {language === null ? "EN" : language }
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          {/* <a href="#!"> */}
          <div onClick={() => onHandleContact()} className="contact_btn">
            <button>{Language("CONTACT")}</button>
          </div>
          {/* </a> */}
          <div className="navbar_toggle" onClick={() => handleMenuToggle()}>
            <NavToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
