const XFriendsActivity = document.querySelector("#X-friends-activity");
const btnFriendsActivity = document.querySelector("#show-friends-activity");

window.addEventListener("DOMContentLoaded", () => {
  const styleMain = JSON.parse(localStorage.getItem("classMain"));
  const styleFriends = JSON.parse(localStorage.getItem("showFriendsActivity"));
  //   console.log(typeof styleMain, styleMain);
  if (styleFriends) {
    friends.classList.add("display-none");
    btnFriendsActivity.innerText = "Mostra attività amici";
  } else {
    friends.classList.remove("display-none");
  }
  if (styleMain) {
    main.classList.add("width-main-commonjs");
    // main.classList.toggle("width-main-commonjs");
  } else {
    main.classList.remove("width-main-commonjs");
    // main.classList.toggle("width-main-commonjs");
  }
});

const handleFriendsActivity = () => {
  const styleMain = JSON.parse(localStorage.getItem("classMain"));

  friends.classList.toggle("display-none");
  if (friends.classList.contains("display-none")) {
    btnFriendsActivity.innerText = "Mostra attività amici";
    localStorage.setItem("showFriendsActivity", true);
  } else {
    btnFriendsActivity.innerText = "Nascondi attività amici";
    localStorage.setItem("showFriendsActivity", false);
  }

  if (styleMain) {
    main.classList.toggle("width-main-commomjs-btnFull");

    // main.classList.toggle("width-main-commonjs");
  } else {
    main.classList.toggle("width-main-commomjs-btn");
    // main.classList.toggle("width-main-commonjs");
  }
};
XFriendsActivity.onclick = handleFriendsActivity;
btnFriendsActivity.onclick = handleFriendsActivity;
