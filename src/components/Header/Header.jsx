import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icon/logo.svg";
import {ReactComponent as NavToggle} from "../../assets/icon/sideMenu.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./index.scss";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const items = [
    {
      label: <a href="">EN</a>,
      key: "0",
    },
    {
      label: <a href="">UZ</a>,
      key: "1",
    },
    {
      label: <a href="">RU</a>,
      key: "2",
    },
  ];
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
              <li>
                <Link onClick={() => handleMenuToggle()} to="/">Home</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/portfolio">Portfolio</Link>
              </li >
              <li onClick={() => setMenu(false)}>
                <Link to="/services">Services</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/vacancies">Vacancies</Link>
              </li>
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
                  EN
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="contact_btn">
            <button>Contact</button>
          </div>
          <div className="navbar_toggle" onClick={() => handleMenuToggle()}>
            <NavToggle/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
