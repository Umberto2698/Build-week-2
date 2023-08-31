const artistId = new URLSearchParams(window.location.search).get("artistId");

const URL = artistId
  ? "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId
  : "https://striveschool-api.herokuapp.com/api/deezer/artist/412";

const body = document.body;
const blackScreen = document.getElementById("blackScreen");

// Desktop
const artistBackground = document.getElementById("background-big-card");
const artistNameTitle = document.getElementsByTagName("h1")[0];
const artistNameLiked = document.querySelector("#lovedSongs p");
const artistImageLiked = document.querySelector("#lovedSongs .rounded-circle");
const monthListener = document.getElementById("listener");
const monthListenerMobile = document.getElementById("listener-xs");
let popularListSong = document.getElementById("popularSongs");

const playerTitle = document.querySelector("footer h6");
const playerArtist = document.querySelector("footer p");
const playerImage = document.querySelector("footer img");

// Mobile

const popularListSongXs = document.getElementById("popularSongs-xs");
const playerTitleXs = document.querySelector("#footer-xs p");

// target playbar
const playbarImg = document.getElementById("playbar-img");
const playbarTitle = document.getElementById("playbar-title");
const playbarArtist = document.getElementById("playbar-artist");
const fillContainer = document.getElementById("fill-container");
const songFullTime = document.getElementById("song-length");
const songCurrentTime = document.getElementById("song-current-time");
const volumeIcon = document.getElementById("volIcon");
const audioSlider = document.getElementById("audio-slider");
const buttonsToToggle = document.getElementsByClassName("btn-toggle-custom");

const iconchange1 = function () {
  if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-off text-white" style="font-size: 12px"></i>` ||
    volumeIcon.innerHTML === `<i class="bi bi-volume-up text-white" style="font-size: 12px"></i>`
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-mute text-white" style="font-size: 12px"></i>`;
  } else if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-mute text-white" style="font-size: 12px"></i>` &&
    audioSlider.value < 50
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-off text-white" style="font-size: 12px"></i>`;
  } else if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-mute text-white" style="font-size: 12px"></i>` &&
    audioSlider.value > 50
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-up text-white" style="font-size: 12px"></i>`;
  }
};

const iconchange2 = function () {
  if (audioSlider.value > 50) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-up text-white" style="font-size: 12px"></i>`;
  } else {
    volumeIcon.innerHTML = `<i class="bi bi-volume-off text-white" style="font-size: 12px"></i>`;
  }
};

const toggleColor = function (ev) {
  if (ev.currentTarget.classList.contains("text-white")) {
    ev.currentTarget.classList.remove("text-white");
    ev.currentTarget.classList.add("text-success");
  } else {
    ev.currentTarget.classList.remove("text-success");
    ev.currentTarget.classList.add("text-white");
  }
};

for (i = 0; i < buttonsToToggle.length; i++) {
  buttonsToToggle[i].addEventListener("click", toggleColor);
}

audioSlider.addEventListener("input", iconchange2);

volumeIcon.addEventListener("click", iconchange1);

const handletime = function (time) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  if (time >= 60) {
    minutes = parseInt(time / 60);
    if (minutes >= 60) {
      hours = parseInt(minutes / 60);
      minutes = minutes % 60;
    }
    seconds = time % 60;
  } else {
    minutes = 0;
    seconds = time;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let result = `${minutes}:${seconds}`;
  if (hours != 0) {
    result = `${hours}:${minutes}:${seconds}`;
  }
  return result;
};

const playButton = function (song) {
  localStorage.setItem("songId", `${song.id}`);
  fillContainer.removeChild(fillContainer.firstChild);
  playbarImg.src = song.album.cover;
  playbarTitle.innerText = song.title;
  playbarArtist.innerText = song.artist.name;
  songFullTime.innerText = handletime(song.duration);
  const root = document.querySelector(":root");
  root.style.setProperty("--playbar-time", `${song.duration}s`);
  const fillingBar = document.createElement("div");
  fillingBar.classList.add("position-absolute");
  fillingBar.classList.add("progress-bar-fill");
  fillContainer.appendChild(fillingBar);
};

const playButtonMobile = function (song) {
  localStorage.setItem("songId", `${song.id}`);
  playerTitleXs.innerText = song.title + " by " + song.artist.name;
  // playbarImg.src = song.album.cover;
  // playbarTitle.innerText = song.title;
  // playbarArtist.innerText = song.artist.name;
  // songFullTime.innerText = handletime(song.duration);
  // const root = document.querySelector(":root");
  // root.style.setProperty("--playbar-time", `${song.duration}s`);
  // const fillingBar = document.createElement("div");
  // fillingBar.classList.add("position-absolute");
  // fillingBar.classList.add("progress-bar-fill");
  // fillContainer.appendChild(fillingBar);
};

window.addEventListener("DOMContentLoaded", (event) => {
  getElement();
});

const goToArtistPage = (event, id) => {
  location.href = `./artist-page.html?artisId=${id}`;
};

const goToAlbumPage = (event, id) => {
  location.href = `./albumpage.html?albumId=${id}`;
};
const goToHomePage = (event, id) => {
  location.href = `./homePage.html`;
};
const goToSearchPage = (event, id) => {
  location.href = `./searchPage.html`;
};

const getElement = async () => {
  try {
    const artist = await fetch(URL);
    if (!artist.ok) {
      throw new Error(`Error ${resp.status}: ${resp.statusText}.`);
    } else {
      const artistObj = await artist.json();
      const songs = await fetch(URL + "/top?limit=10");
      const songsObj = await songs.json();
      // Qui vedo se il player aveva una canzone prima di arrivare in questa pagina
      if (localStorage.getItem("songId")) {
        const songId = localStorage.getItem("songId");
        try {
          const previusSong = await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/" + songId);
          if (!previusSong.ok) {
            throw new Error(`Error ${previusSong.status}: ${previusSong.statusText}.`);
          } else {
            const previussìSongsObj = await previusSong.json();
            playButton(previussìSongsObj);
            playButtonMobile(previussìSongsObj);
          }
        } catch (err) {
          (err) => {
            const body = document.body;
            body.innerHTML = `<div class="container">
              <div>
                <h1 class="text-center" style="margin-top: 45vh"> ${err.message}</h1>
              </div>
             </div>
            `;
          };
        }
      }
      playButton(songsObj.data[0]);
      playButtonMobile(songsObj.data[0]);
      artistBackground.setAttribute("style", `background-image: url(${artistObj.picture_big})`);
      artistNameTitle.innerText = artistObj.name;
      artistNameLiked.innerText = artistObj.name;
      let monthFan = `${artistObj.nb_fan}`.split("");
      for (let i = 1; i <= monthFan.length; i++) {
        if (i % 3 === 0) {
          monthFan[monthFan.length - i] = "." + monthFan[monthFan.length - i];
        }
      }
      monthListener.innerText = monthFan.join("") + " ascoltatori mensili";
      monthListenerMobile.innerText = monthFan.join("") + " ascoltatori mensili";
      artistImageLiked.setAttribute("style", `background-image: url(${artistObj.picture_big})`);
      for (let i = 0; i < songsObj.data.length; i++) {
        let li = document.createElement("div");
        let liXs = document.createElement("div");
        let song = songsObj.data[i];
        console.log(song.album.id);
        li.addEventListener("click", () => playButton(song));
        liXs.addEventListener("click", () => playButtonMobile(song));
        let songId = `${song.id}`.split("");
        for (let i = 1; i <= songId.length; i++) {
          if (i % 3 === 0 && i != songId.length) {
            songId[songId.length - i] = "." + songId[songId.length - i];
          }
        }
        songId = songId.join("");
        let songDuration = `${song.duration}`.split("");
        songDuration[0] = songDuration[0] + ":";
        songDuration = songDuration.join("");
        li.innerHTML = `<li class="row d-flex align-items-center mb-3 ps-2">
                      <div class="row col-9 d-flex align-items-center p-0">
                      <div class="col-1 d-flex align-items-center justify-content-end text-end p-0">
                           <span>${i + 1}</span>
                        </div>
                        <div class="col-11 d-flex align-items-center p-0">
                            <img src=${song.album.cover_small} alt="" 
                            onclick="goToAlbumPage((event,${song.album.id}))" >
                            <span id="title">${song.title_short}</span>
                            </div>
                          </div>
                            <div class="col-2 text-end">
                            <span id="songId">${songId}</span>
                            </div>
                            <div class="col-1 text-end">
                            <span id="songDuration">${songDuration}</span>
                        </div>
                        </li>`;
        popularListSong.appendChild(li);
        liXs.innerHTML = `<li class="d-flex align-items-center mb-3">
                        <div class="row align-items-center">
                        <div class="col-1  d-flex align-items-center text-end">
                          <span>${i + 1}</span>
                          </div>
                        <div class="col-9 d-flex align-items-center text-end" style="width: auto";>
                          <img src=${song.album.cover_small} alt="" onclick="goToAlbumPage((event,${song.album.id}))" />
                          <div class="d-flex flex-column ms-1">
                          <span>${song.title_short}</span>
                          <span id="songId-xs">${songId}</span>
                          </div>
                          </div>
                        </div>
                        <div class=" col-1 d-flex align-items-center text-end">
                          <i class="bi bi-three-dots-vertical xsIcon"></i>
                        </div>
                      </li>`;
        popularListSongXs.appendChild(liXs);
      }
    }
  } catch (err) {
    (err) => {
      const body = document.body;
      body.innerHTML = `<div class="container">
        <div>
          <h1 class="text-center" style="margin-top: 45vh"> ${err.message}</h1>
        </div>
      </div>
      `;
    };
  }
};
