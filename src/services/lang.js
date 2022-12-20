import UZ from "./../language/uz.json";
import RU from "./../language/ru.json";
import EN from "./../language/en.json";
export function Language(key) {
  let lang = localStorage.getItem("language");
  if(lang === null){
    localStorage.setItem("language", "EN");
  }
  let lan = lang === null ? "EN" : lang
  let data = null;

  switch (lan) {
    case "UZ":
      data = UZ;
      break;

    case "RU":
      data = RU;
      break;

    case "EN":
      data = EN;
      break;

    default:
      break;
  }

  if (data.hasOwnProperty(key)) {
    return data[key];
  }

  return key;
}
