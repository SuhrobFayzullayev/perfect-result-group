import React from "react";
import "./Vacancies.scss";
import Name from "../../components/ComponentName";
import Hi from "../../components/Hi/Hi";
import Vacancy from "./components/Vacancy/Vacancy";
import MySlider from "./components/MySlider/MySlider";
function Vacancies() {
  return (
    <div className="vacancies">
      <Hi name={"VACANCIES"} />
      <Name name={"Vacancies"} />
      <Vacancy />
      <MySlider />
    </div>
  );
}

export default Vacancies;
