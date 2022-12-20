import React from "react";
import "./Client.scss";
import ClientImg from "./../../assets/img/clientCardImg.png";
import Name from "../ComponentName";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Language } from "../../services/lang";

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
  const width = window.innerWidth;

  return (
    <div className="clients">
      <Name name={Language("CLIENT")} />
      {width > 640 && (
        <div className="clients__container">
          {data.map((item) => {
            return (
              <div key={item.id} className="clients__card">
                <img src={item.path} alt="img" />
              </div>
            );
          })}
        </div>
      )}
      {width <= 640 && (
        <Swiper
          className={"clients__flex"}
          autoplay={true}
          spaceBetween={50}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="clients__card">
                  <img className="slider__img" src={item.path} alt="img" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

export default Client;
