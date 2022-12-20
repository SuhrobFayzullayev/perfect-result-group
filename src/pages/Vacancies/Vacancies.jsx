import React from "react";
import "./Vacancies.scss";
import Name from "../../components/ComponentName";
import Hi from "../../components/Hi/Hi";
import Vacancy from "./components/Vacancy/Vacancy";
import MySlider from "./components/MySlider/MySlider";
import { Language } from "../../services/lang";
function Vacancies() {
  return (
    <div className="vacancies">
      <Hi name={Language("VACANCIES")} />
      <Name name={Language("VACANCIES")} />
      <Vacancy />
      <MySlider />
    </div>
  );
}

export default Vacancies;
