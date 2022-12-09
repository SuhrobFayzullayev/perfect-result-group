import React from "react";
import Button from "../Generic/Button";
import Inputs from "../Generic/Input";
import "./style.scss";
import image from "./../../assets/img/contactBackground.png";
import { Input } from "antd";
import location from './../../assets/icon/location.svg'
import phone from './../../assets/icon/call.svg'
import email from './../../assets/icon/email.svg'
const Contact = () => {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
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
              <Inputs width={445} placeholder={"Phone number"} />
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
              <Inputs icon={location} width={445} placeholder={"Location"} />
              <div className="btnAbsolute">
              <Button background={'black'}  color={'white'} txt={"Map"} height={38} width={96}/>
              </div>
            </div>
            <div className="inputs">
              <Inputs icon={phone} placeholder={"Phone number"}  width={445}/>
            </div>
            <div className="inputs">
              <Inputs icon={email} placeholder={"Email"}  width={445}/>
            <div className="btn">
            <Button background={'black'} color={'white'} width={445} txt={"Submit"}  />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
