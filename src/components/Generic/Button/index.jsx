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
  radius
}) => {
  return (
    <>
      <button
        className="button"
        onClick={onClick}
        style={{
          gap: img ? `8px` : "0",
          height: height ? `${height}px` : `60px`,
          maxWidth: width ? `${width}px` : "128px",
          minWidth: "128px",
          width: `100%`,
          color: color ? `${color}` : `inherit`,
          border: border ? `${border}` : `#E6E9EC 1px solid`,
          borderRadius: radius ? `${radius}` : `10px`,
          backgroundColor: background ? `${background}` : `transparent`,
        }}
      >
        <img src={img} alt="" />{txt}
      </button>
    </>
  );
};

export default Button;
