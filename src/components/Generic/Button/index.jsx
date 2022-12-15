import React, { useState } from "react";
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
  icon,
  hoverColor,
  hoverBackground,
  hoverBorder
}) => {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
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
          paddingLeft: icon ? `50px` : "0px",
          height: height ? `${height}px` : `55px`,
          width:width ? `${width}px` : '100%',
          maxWidth: width ? `${width}px` : '128px',
          minWidth: "68px",
          border: isHovering ? `${hoverBorder}` : `${border}`,
          borderRadius: radius ? `${radius}` : `15px`,
          color: isHovering ? `${hoverColor}` : `${color}`,
          backgroundColor: isHovering ? `${hoverBackground}` : `${background}`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <img src={img} alt="" />{txt}
      </button>
        </div>
    </>
  );
};

export default Button;
