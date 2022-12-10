import React from "react";
import "./style.scss";

const Button = ({
  txt,
  img,
  height,
  width,
  color,
  border,
  background,
  onClick,
  radius,
  icon
}) => {
  return (
    <>
    <div className="genericRelativer">
    <img className='buttonImg' src={icon} alt="" />
      <button
        className="button"
        onClick={onClick}
        style={{
          gap: img ? `8px` : "0",
          display: 'flex',
          justifyContent: icon ?  "flex-start" : "",
          paddingLeft: icon ? `50px` : "15px",
          height: height ? `${height}px` : `60px`,
          width: width ? `${width}px` : "128px",
          minWidth: "128px",
          color: color ? `${color}` : `inherit`,
          border: border ? `${border}` : `#E6E9EC 1px solid`,
          borderRadius: radius ? `${radius}` : `10px`,
          backgroundColor: background ? `${background}` : `transparent`,
        }}
        >
        <img src={img} alt="" />{txt}
      </button>
        </div>
    </>
  );
};

export default Button;
