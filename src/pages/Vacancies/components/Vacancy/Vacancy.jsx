import React from "react";
import { Language } from "../../../../services/lang";
import Change from "./../../../../assets/img/change.png";
import Partner from "./../../../../assets/img/partner.png";
import "./Vacancy.scss";
function Vacancy() {
  const data = [
    {
      id: 1,
      title: Language("VACANCIES-CARD-FIRST-TITLE"),
      describe: [
        Language("VACANCIES-CARD-FIRST-DESCRIBE-ONE"),
        Language("VACANCIES-CARD-FIRST-DESCRIBE-TWO"),
      ],
      imgPath: Partner,
      className: "left",
    },
    {
      id: 2,
      title: Language("VACANCIES-CARD-SECOND-TITLE"),
      describe: [
        Language("VACANCIES-CARD-SECOND-DESCRIBE-ONE"),
        Language("VACANCIES-CARD-SECOND-DESCRIBE-TWO"),
        Language("VACANCIES-CARD-SECOND-DESCRIBE-THREE"),
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
