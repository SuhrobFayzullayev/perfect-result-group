import React from "react";
import "./crm.scss";



export default function Crm({data}) {
  return (
    <div className="gridContainer">
      {data.map((v, i) => (
        <div className={v.className}>
          <img src={v.img} alt="" />
        </div>
      ))}
      
    </div>
  );
}
