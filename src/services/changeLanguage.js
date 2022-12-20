export const changeLanguage = (lan) => {
  localStorage.setItem("language", lan);
  window.location.reload();
};
