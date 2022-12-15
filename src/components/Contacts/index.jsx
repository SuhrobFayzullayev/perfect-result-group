import React from "react";
import Button from "../Generic/Button";
import "./style.scss";
import image from "./../../assets/img/contactBackground.png";
// import { Input } from "antd";
import location from "./../../assets/icon/location.svg";
import phone from "./../../assets/icon/call.svg";
import email from "./../../assets/icon/email.svg";
import arrowTop from "./../../assets/icon/arrowTop.svg";
import Name from "../ComponentName";
import TextField from "@mui/material/TextField/TextField";

const Contact = () => {
  // const { TextArea } = Input;
  // const onChange = (e) => {
  //   console.log("Change:", e.target.value);
  // };
  const scrol = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <Name name={"Contact"} />
      <div className="contactWrapper">
        <img className="img" src={image} alt="" />
        <div className="contactColumns">
          <div>
            <div className="contactColumnText">Leave us a message</div>
            <div className="inputs">
              {/* <Inputs width={445} placeholder={"Email"} /> */}
              <TextField
                style={{ width: "445px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            <div className="inputs">
              <TextField
                style={{ width: "445px" }}
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
              />
            </div>
            <div className="inputs">
              <TextField
                style={{ width: "445px" }}
                rows={5}
                multiline
                id="outlined-basic"
                label="about your project"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <div className="contactColumnText">Informative</div>
            <div className="inputs">
              <Button
                icon={location}
                color={"black"}
                background={"transparent"}
                hoverBorder={
                  "2px solid linear-gradient( #000000  100%, #2B13BB 100%);"
                }
                hoverColor={"red"}
                hoverBackground={"white"}
                border={"2px solid grey"}
                txt={"Tashkent city chilanzar 1"}
                width={445}
              />
              <div className="btnAbsolute">
                <a
                  href="https://www.google.com/maps/place/%D0%A7%D0%B8%D0%BB%D0%B0%D0%BD%D0%B7%D0%B0%D1%80-3,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100115,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2844818,69.2188239,16z/data=!3m1!4b1!4m5!3m4!1s0x38ae8a45cc5c3f35:0x929c69dffb5b8141!8m2!3d41.2855934!4d69.223683"
                  target="blank"
                >
                  <Button
                    background={"white"}
                    color={"black"}
                    txt={"Map"}
                    height={38}
                    border={"none"}
                    width={90}
                  />
                </a>
              </div>
            </div>
            <div className="inputs">
              <a href="tel:+998 90 111 11 11">
                <Button
                  icon={phone}
                  color={"black"}
                  hoverBorder={
                    "2px solid linear-gradient( #000000  100%, #2B13BB 100%);"
                  }
                  hoverColor={"red"}
                  hoverBackground={"white"}
                  border={"2px solid grey"}
                  background={"transparent"}
                  txt={"+998 90 111 11 11"}
                  width={445}
                />
              </a>
            </div>
            <div className="inputs">
              <a href="mailto:abdurashidovibrohim@gmail.com" target="blank">
                <Button
                  icon={email}
                  color={"black"}
                  hoverBorder={
                    "2px solid linear-gradient( #000000  100%, #2B13BB 100%);"
                  }
                  hoverColor={"red"}
                  hoverBackground={"white"}
                  border={"2px solid grey"}
                  background={"transparent"}
                  txt={"abdurashidovibrohim@gmail.com"}
                  width={445}
                />
              </a>
              <div className="btn">
                <Button
                  background={"#2B13BB"}
                  border={"none"}
                  color={"white"}
                  width={445}
                  txt={"Submit"}
                />
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => scrol()} className="arrowTopWrapper">
          <img src={arrowTop} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
