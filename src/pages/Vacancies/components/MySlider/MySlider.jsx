import React from "react";
import "./MySlider.scss";
function MySlider() {
  const data = [
    {
      id: 1,
      name: "Frontend",
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
      name: "Beckend",
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
      name: "UX/UI",
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
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="card__title">{item.name}</div>
                <div className="card__info">
                  <strong>Office:</strong> <span>{item.office}</span>
                </div>
                <div className="card__info">
                  <strong>Technology:</strong> <span>{item.technology}</span>
                </div>
                <div className="card__info">
                  <strong>TechnologyTelegram:</strong>{" "}
                  <span>{item.telegram}</span>
                </div>
                <div className="card__info">
                  <strong>Area:</strong> <span>{item.area}</span>
                </div>
                <div className="card__info">
                  <strong>Application time:</strong>{" "}
                  <span>{item.applicationTime}</span>
                </div>
                <div className="card__info">
                  <strong>Working time:</strong>
                  <span>
                    {item.workingTime.from} - {item.workingTime.to}{" "}
                    {item.workingTime.days}
                  </span>
                </div>
                <div className="card__info">
                  <strong>Salary:</strong>
                  <span>
                    {item.salary.from} - {item.salary.to}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MySlider;
