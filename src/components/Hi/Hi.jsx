import React from "react";
import "./Hi.scss";
import PR from "./PR.png";
import Video from "./Bg_Video.mp4";
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
        <div className="title__row">
          <img className="title__img" width={130} src={PR} alt="img" />
          <div className="title__body">
            <h1 className="title__name">
              <span>IT Agancy Team</span> <strong> Desigin system </strong>
            </h1>
            <div className="title__line"></div>
          </div>
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