const btnCerca = document.getElementById("cerca");
const btnHomeCerca = document.getElementById("menu-cerca");
const btnHome = document.getElementById("homePage");
const btnMenuHome = document.getElementById("menu-home");
const main = document.querySelector("main");
const header = document.querySelector("header");
const playlist = document.querySelector("#playlist");
const friends = document.querySelector("#friends");
const arrP = document.querySelectorAll(".custom-fontSize-nav");
const threeDots = document.querySelector("#three-dots");
//
window.addEventListener("DOMContentLoaded", () => {
  const styleMain = JSON.parse(localStorage.getItem("classMain"));
  const stylePlaylist = JSON.parse(localStorage.getItem("classPlaylist"));
  const styleHeader = JSON.parse(localStorage.getItem("classHeader"));
  const styleArrP = JSON.parse(localStorage.getItem("classArrP"));
  //   console.log(typeof styleMain, styleMain);
  if (styleMain) {
    main.classList.add("width-main-commonjs");
    // main.classList.toggle("width-main-commonjs");
  } else {
    main.classList.remove("width-main-commonjs");
    // main.classList.toggle("width-main-commonjs");
  }
  if (styleHeader) {
    header.classList.add("width-header-commonjs");
    // main.classList.toggle("width-main-commonjs");
  } else {
    header.classList.remove("width-header-commonjs");
    // main.classList.toggle("width-main-commonjs");
  }
  if (stylePlaylist) {
    playlist.classList.add("display-none");
    // main.classList.toggle("width-main-commonjs");
  } else {
    playlist.classList.remove("display-none");
    // main.classList.toggle("width-main-commonjs");
  }
  if (styleArrP) {
    arrP.forEach((elem) => elem.classList.add("display-none"));
    // main.classList.toggle("width-main-commonjs");
  } else {
    arrP.forEach((elem) => elem.classList.remove("display-none"));
    // main.classList.toggle("width-main-commonjs");
  }
});

// Per diminuire la width dell'header

btnHome.onclick = () => window.location.assign("./homePage.html");
btnMenuHome.onclick = () => window.location.assign("./homePage.html");
btnCerca.onclick = () => window.location.assign("./searchPage.html");
btnHomeCerca.onclick = () => window.location.assign("./searchPage.html");

threeDots.onclick = () => {
  main.classList.toggle("width-main-commonjs");
  console.log("funzia");
  if (main.classList.contains("width-main-commonjs")) {
    localStorage.setItem("classMain", true);
  } else {
    localStorage.setItem("classMain", false);
  }

  playlist.classList.toggle("display-none");
  if (playlist.classList.contains("display-none")) {
    localStorage.setItem("classPlaylist", true);
  } else {
    localStorage.setItem("classPlaylist", false);
  }

  header.classList.toggle("width-header-commonjs");
  if (header.classList.contains("width-header-commonjs")) {
    localStorage.setItem("classHeader", true);
  } else {
    localStorage.setItem("classHeader", false);
  }

  arrP.forEach((elem) => elem.classList.toggle("display-none"));
  if (arrP[0].classList.contains("display-none")) {
    localStorage.setItem("classArrP", true);
  } else {
    localStorage.setItem("classArrP", false);
  }
};
