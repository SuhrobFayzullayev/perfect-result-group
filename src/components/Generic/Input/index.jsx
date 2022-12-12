import React, { useState } from "react";
import "./index.scss";
const Inputs = ({
  width,
  height,
  border,
  placeholder,
  onChange,
  password,
  name,
  icon,
  defaultValue,
  background,
  masked,
}) => {
  const [view, setView] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 4) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 10)}`;
  }
  return (
    <div
      className="inputWrapper"
      style={{
        width: width ? `${width}px` : `100%`,
      }}
    >
      <img className="inputImg" src={icon} alt="" />
      <div className="input">
        {/* <div className="placemove">{placeholder}</div> */}
        {masked ? (
          <input
            onChange={(e) => handleInput(e)}
            value={inputValue}
            icon={icon}
            border={border}
            placeholder={placeholder}
            defaultValue={defaultValue}
            name={name}
            className="inputt"
            style={{
              width: `100%`,
              minWidth: "345px",
              maxWidth: width ? `${width}px` : `100%`,
              height: height ? `${height}px` : `60px`,
              paddingLeft: icon ? `50px` : "15px",
              border: border ? `none` : `2px solid #79787A`,
              backgroundColor: background ? `${background}` : "transparent",
            }}
          />
        ) : (
          <input
            className="inputt"
            type={view ? "text" : password}
            icon={icon}
            border={border}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            name={name}
            style={{
              width: width ? `${width}px` : `100%`,
              height: height ? `${height}px` : `60px`,
              paddingLeft: icon ? `50px` : "15px",
              border: border ? `none` : `2px solid #79787A`,
              backgroundColor: background ? `${background}` : "transparent",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Inputs;
