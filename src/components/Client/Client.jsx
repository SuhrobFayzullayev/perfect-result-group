import React from "react";
import "./Client.scss";
import ClientImg from "./../../assets/img/clientCardImg.png";
import Name from "../ComponentName";
function Client() {
  const data = [
    {
      id: 1,
      path: ClientImg,
    },
    {
      id: 2,
      path: ClientImg,
    },
    {
      id: 3,
      path: ClientImg,
    },
    {
      id: 4,
      path: ClientImg,
    },
    {
      id: 11,
      path: ClientImg,
    },
    {
      id: 12,
      path: ClientImg,
    },
    {
      id: 13,
      path: ClientImg,
    },
    {
      id: 14,
      path: ClientImg,
    },
    {
      id: 21,
      path: ClientImg,
    },
    {
      id: 22,
      path: ClientImg,
    },
    {
      id: 23,
      path: ClientImg,
    },
    {
      id: 24,
      path: ClientImg,
    },
  ];
  console.log(data);
  return (

    <div className="clients">
      <Name name={"Client"} />
      <div className="clients__container">
        {data.map((item) => {
          return (
            <div key={item.id} className="clients__card">
              <img src={item.path} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Client;
