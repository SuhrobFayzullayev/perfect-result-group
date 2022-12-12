import React from "react";
import "./Hi.scss";
import Video from "./../../assets/videos/Hi_Bg_Video.mp4";
function Hi({ isAbout }) {
  const data = [
    { id: 1, name: "Projects", number: "25" },
    { id: 2, name: "Experience", number: "1 years" },
    { id: 3, name: "Active clients", number: "16" },
  ];
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
          <h1 className="title__title">PERFECT RESULT</h1>
          <div className="title__line"></div>
          <h2 className="title__name">
            <span>IT Agancy Team</span> <strong> Desigin system </strong>
          </h2>
        </div>
      </div>
      {isAbout && (
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
