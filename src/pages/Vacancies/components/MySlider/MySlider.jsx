import React from "react";
import "./MySlider.scss";

import { FreeMode, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Language } from "../../../../services/lang";
function MySlider() {
  const data = [
    {
      id: 1,
      name: Language("FRONTEND"),
      office: "Ansor IT Agency",
      technology: ["Node js", "Expressjs", "Nestjs", "Git"],
      telegram: "@Ansor",
      area: "Tashkent",
      applicationTime: "24/7",
      workingTime: { from: "09:00", to: "18:00", days: "5/2" },
      salary: { from: "$1500", to: "$2500" },
    },

    {
      id: 2,
      name: Language("BACKEND"),
      office: "PDP IT Agency",
      technology: ["Node js", "Expressjs", "Nestjs", "Git"],
      telegram: "@PDP",
      area: "Tashkent",
      applicationTime: "24/7",
      workingTime: { from: "09:00", to: "18:00", days: "5/2" },
      salary: { from: "$1500", to: "$2500" },
    },
    {
      id: 3,
      name: Language("UX-UI"),
      office: " Aif IT Agency",
      technology: ["Figma Adobe"],
      telegram: "@Aif",
      area: "Tashkent",
      applicationTime: "24/7",
      workingTime: { from: "09:00", to: "18:00", days: "5/2" },
      salary: { from: "$1500", to: "$2500" },
    },
  ];

  return (
    <div className="slider__wapper">
      <div className="slider">
        <Swiper
          navigation
          pagination={{
            clickable: true,
          }}
          initialSlide={1}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
            },
            920: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1340: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.length > 0 &&
            data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="card">
                    <div className="card__title">{item.name}</div>
                    <div className="card__info">
                      <strong>{Language("OFFICE")}: </strong> <span>{item.office}</span>
                    </div>
                    <div className="card__info">
                      <strong>{Language("TECHNOLOGY")}: </strong>
                      <span>{item.technology.join(", ")}</span>
                    </div>
                    <div className="card__info">
                      <strong>{Language("TELEGRAM")}: </strong>
                      <span>{item.telegram}</span>
                    </div>
                    <div className="card__info">
                      <strong>{Language("AREA")}: </strong> <span>{item.area}</span>
                    </div>
                    <div className="card__info">
                      <strong>{Language("APPLICATION-TIME")}: </strong>
                      <span>{item.applicationTime}</span>
                    </div>
                    <div className="card__info">
                      <strong>{Language("WORKING-TIME")}: </strong>
                      <span>
                        {item.workingTime.from} - {item.workingTime.to}{" "}
                        {item.workingTime.days}
                      </span>
                    </div>
                    <div className="card__info">
                      <strong>{Language("SALARY")}: </strong>
                      <span>
                        {item.salary.from} - {item.salary.to}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default MySlider;
