import React from "react";
import Change from "./../../../../assets/img/change.png";
import Partner from "./../../../../assets/img/partner.png";
import "./Vacancy.scss";
function Vacancy() {
  const data = [
    {
      id: 1,
      title: "WE’RE YOUR PARTNER IN EVERY SENSE",
      describe: [
        "Representing a no-nonsense approach to recruitment is how we’ve always worked. We have an outstanding track record in partnering with clients at every stage of business, from local start-ups to regional office HQ’s, SME’s to global multinationals. ",
        "Our chosen specialist industries and skillsets reflect some of the most exciting areas of growth around the world.",
      ],
      imgPath: Partner,
      className: "left",
    },
    {
      id: 2,
      title: "CHANGE YOUR FUTURE",
      describe: [
        "The minute you connect with us you’re more than just another candidate and we know you’re looking for more than just a job.",
        "We understand the way you think. For you, it’s about building a better future, taking a step up the career ladder and finding an employer who provides first-class opportunities for development and progression.",
        "You’re not virtual and nor are we. So we’ve developed a personal, candidate-focused approach to give our clients what they want high calibre talent that fit seamlessly into their organization. ",
      ],
      imgPath: Change,
      className: "right",
    },
  ];
  return (
    <div className="vacancy__wrapper">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <div key={item.id} className="vacancy">
              <div className={`vacancy__container ${item.className}`}>
                <div className="vacancy__img">
                  <img src={item.imgPath} alt="img" />
                </div>
                <div className="vacancy__body">
                  <div className="vacancy__title">{item.title}</div>
                  <div className="vacancy__descrip">
                    {item.describe.length > 0 &&
                      item.describe.map((text, index) => {
                        return <p key={index}>{text}</p>;
                      })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Vacancy;
