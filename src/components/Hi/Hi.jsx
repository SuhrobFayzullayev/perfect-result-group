import React from "react";
import "./Hi.scss";
import Video from "./../../assets/videos/Hi_Bg_Video.mp4";
import circleText from "./../../assets/img/circleText.png";
import circleTextSmall from "./../../assets/img/circleTextSmall.png";
function Hi({ name }) {
  const data = [
    { id: 1, name: "Projects", number: "25" },
    { id: 2, name: "Experience", number: "1 years" },
    { id: 3, name: "Active clients", number: "16" },
  ];
  const width = window.innerWidth;

  return (
    <div className="hi">
      <div className="hi__title title">
        <video
          className="title__video"
          src={Video}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="title__body">
          <h1 className="title__title">
            <span className="title__left">PERFECT</span>{" "}
            <span className="title__right">RESULT</span>
          </h1>
          <div className="title__line"></div>
          {String(name).toLocaleLowerCase() !== "home" && (
            <h2 className="title__name">{name}</h2>
          )}

          {String(name).toLocaleLowerCase() === "home" && (
            <div className="title__descr">
              <div className="title__descr-title">
                QUALITY AND FAST SITE WITH US
              </div>
              <p className="title__descr-paragraph">
                "PR" company aims to create a highly competitive IT company in
                the main market that focuses on its customers and creates
                favorable conditions for cooperation.
              </p>
              {width > 560 && (
                <div className="title__descr-decor">
                  <img src={circleText} alt="PERFECT RESULT" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {width <= 560 && (
        <div className="title-decor">
          <img src={circleTextSmall} alt="PERFECT RESULT" />
        </div>
      )}
      {String(name).toLocaleLowerCase() === "about team" && (
        <div className="hi__statistics statistics">
          <div className="statistics__row">
            {data.map((item) => {
              return (
                <div key={item.id} className="statistics__item">
                  <div className="statistics__name">{item.name}</div>
                  <div className="statistics__number">{item.number}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hi;
