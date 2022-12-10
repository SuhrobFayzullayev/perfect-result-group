import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/icon/logo.svg";
import tg_icon from "../../assets/icon/telegram.png";
import facebook_icon from "../../assets/icon/facebook.png";
import insta_icon from "../../assets/icon/instagram.png";
import twitter_icon from "../../assets/icon/twitter.png";
import {ReactComponent as Call_icon} from "../../assets/icon/call.svg";
import {ReactComponent as Email_icon} from "../../assets/icon/email.svg";
import {ReactComponent as Location_icon} from "../../assets/icon/location.svg"
import "./index.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="left_footer">
          <Link to="/" className="for_logo">
            <Logo/>
          </Link>
          <Link to="/" className="for_company">
            <span>PR </span>Agency
          </Link>
        </div>
        <div className="right_footer">
          <nav>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Vacancies</Link>
              </li>
            </ul>
          </nav>
          <div className="for_social_media">
            <a href="https://t.me/Otabek_Sobirjonovich" target="blank">
              <img src={tg_icon} alt="" />
            </a>
            <a href="https://www.facebook.com/yahyo.rashid" target="blank">
              <img src={facebook_icon} alt="" />
            </a>
            <a href="https://twitter.com/otabek_sodikov" target="blank">
              <img src={twitter_icon} alt="" />
            </a>
            <a href="https://www.instagram.com/otabek_sobirjonovich_sodikov/" target="blank">
              <img src={insta_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div>
          <a href="tel:+998936843757">
            <div className="for_image">
              <Call_icon />
            </div>
            <pre>Call:  +998 99 111 11 11</pre>
          </a>
        </div>
        <div>
          <a href="mailto:sodikovotabeksobirjonovich1509@gmail.com" target="blank">
            <div className="for_image">
              <Email_icon />
            </div>
            <pre>Gmail:  abdurashidov Ibrohim</pre>
          </a>
        </div>
        <div>
          <a 
            href="https://www.google.com/maps/place/%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80-3,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100115,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2844818,69.2188239,16z/data=!3m1!4b1!4m5!3m4!1s0x38ae8a45cc5c3f35:0x929c69dffb5b8141!8m2!3d41.2855934!4d69.223683"
            target="blank">
            <div className="for_image">
              <Location_icon/>
            </div>
            <pre>Map:  Toshkent chilanzar 1 </pre>
            <div className="for_map">
              <button>Map</button>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer