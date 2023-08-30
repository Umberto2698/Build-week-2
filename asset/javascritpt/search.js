const btnHome = document.getElementById("homePage");
btnHome.onclick = () => window.location.assign("./homePage.html");

const inputSearchHide = document.querySelector("#search-hide");
const inputSearch = document.querySelector("#search");
const div48Cards = document.getElementById("cards-48");
const fromJS = document.querySelector("#fromJS");

const getData = (event) => {
  event.preventDefault();
  div48Cards.style.display = "none";
  fromJS.style.display = "flex";
};
