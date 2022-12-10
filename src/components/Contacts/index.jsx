import React from "react";
import Button from "../Generic/Button";
import Inputs from "../Generic/Input";
import "./style.scss";
import image from "./../../assets/img/contactBackground.png";
import { Input } from "antd";
import location from './../../assets/icon/location.svg'
import phone from './../../assets/icon/call.svg'
import email from './../../assets/icon/email.svg'
import arrowTop from './../../assets/icon/arrowTop.svg'
const Contact = () => {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  const scrol = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className="contactWrapper">
        <img className="img" src={image} alt="" />
        <div className="contactColumns">
          <div>
            <div className="contactColumnText">Leave us a message</div>
            <div className="inputs">
              <Inputs width={445} placeholder={"Email"} />
            </div>
            <div className="inputs">
              <Inputs masked={true} width={445} placeholder={"Phone number"} />
            </div>
            <div className="inputs">
              <TextArea
                showCount
                style={{
                  background: "none",
                  height: 154,
                  resize: "none",
                  border: "2px solid #79787A",
                  borderRadius: 15,
                  overflow: "hidden",
                }}
                onChange={onChange}
                placeholder="Message"
              />
            </div>
          </div>
          <div>
            <div className="contactColumnText">Informative</div>
            <div className="inputs">
              <Button  icon={location} color={'black'} border={'2px solid grey'} txt={"Tashkent city chilanzar 1"} width={445} />
              <div className="btnAbsolute">       
              <a 
            href="https://www.google.com/maps/place/%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80-3,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100115,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2844818,69.2188239,16z/data=!3m1!4b1!4m5!3m4!1s0x38ae8a45cc5c3f35:0x929c69dffb5b8141!8m2!3d41.2855934!4d69.223683"
            target="blank">
              <Button background={'black'} color={'white'} txt={"Map"} height={38} width={96}/>
              </a>
              </div>
            </div>
            <div className="inputs">
            <a href="tel:+998 90 111 11 11">
              <Button icon={phone} color={'black'} border={'2px solid grey'} txt={"+998 90 111 11 11"} width={445}/>
              </a>
            </div>
            <div className="inputs">
              <a href="mailto:abdurashidovibrohim@gmail.com" target="blank">
              <Button icon={email} color={'black'} border={'2px solid grey'} txt={"abdurashidovibrohim@gmail.com"} width={445}/>
              </a>
            <div className="btn">
            <Button background={'black'} color={'white'} width={445} txt={"Submit"}  />
            </div>
            </div>
          </div>
        </div>
        <div onClick={()=>scrol()} className="arrowTopWrapper">
        <img src={arrowTop} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
