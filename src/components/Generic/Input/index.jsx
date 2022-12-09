import React, { useState } from 'react'
import "./index.scss"

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
    background
  }) => {
    const [view, setView] = useState(false);
  return (
    <div className='inputWrapper' style={{
        width: width ? `${width}px` : `100%`,
      }}>
        <img className='inputImg' src={icon} alt="" />
        <div className="input">
          {/* <div className="placemove">{placeholder}</div> */}
          <input className='inputt' type={view ? "text" : password}
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
              backgroundColor: background ? `${background}` : 'transparent'
            }} />
          </div>
    </div>
  )
}

export default Inputs