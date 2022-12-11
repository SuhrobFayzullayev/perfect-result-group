import { Carousel } from "antd";
import React from "react";

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
      <div className="slider">slider</div>
    </div>
  );
}

export default MySlider;
