import styles from "./style.module.scss";
import React from "react";
import ImageSwiper from "../../assets/img/cardImage.png";
import videoIcon from "../../assets/icon/videoPlay.svg";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Name from "../ComponentName";
import { Language } from "../../services/lang";

const WorkFlow = () => {
  const data = [
    { id: 1, img: ImageSwiper, title: Language("CONSULTATION") },
    { id: 2, img: ImageSwiper, title: Language("PLANNING") },
    { id: 3, img: ImageSwiper, title: Language("PROTOTYPING") },
    { id: 4, img: ImageSwiper, title: Language("PROGRAMMING") },
    { id: 5, img: ImageSwiper, title: Language("TESTING") },
    { id: 6, img: ImageSwiper, title:  Language("PLANNING") },
  ];

  return (
    <>
      <Name name={Language("ABOUT-WORKFLOW")} />
      <div className={styles.wrapper}>
        <div className={styles.slider}>
          <Swiper
            navigation
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: false,
              },
              920: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false,
              },
              1340: {
                slidesPerView: 5,
                spaceBetween: 30,
                centeredSlides: false,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.card}>
                      <div>
                        <div className={styles.imageWrap}>
                          <div className={styles.imageWrap2}>
                            <div className={styles.overlay}>
                              <img src={item.img} alt="" />
                            </div>
                          </div>
                          <img
                            className={styles.videoIcon}
                            src={videoIcon}
                            alt=""
                          />
                        </div>
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
