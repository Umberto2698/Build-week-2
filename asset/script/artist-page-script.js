const artistId = new URLSearchParams(window.location.search).get("artistId");

const URL = artistId
  ? "https://striveschool-api.herokuapp.com/api/deezer/artist/412" + artistId
  : "https://striveschool-api.herokuapp.com/api/deezer/artist/412";

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

//Playbutton non funzionaaaa
const playButton = function (event, title) {
  fillContainer.removeChild(fillContainer.firstChild);
  console.log(title);
  //   playbarImg.src = cover;
  playbarTitle.innerText = title;
  //   playbarArtist.innerText = artistName;
  //   songFullTime.innerText = handletime(duration);
  //   const root = document.querySelector(":root");
  //   root.style.setProperty("--playbar-time", `${duration}s`);
  const fillingBar = document.createElement("div");
  fillingBar.classList.add("position-absolute");
  fillingBar.classList.add("progress-bar-fill");
  fillContainer.appendChild(fillingBar);
};

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  getElement();
});

const goToAlbumPage = (event, id) => {
  location.href = `./albumpage.html?albumId=${id}`;
};

const getElement = async () => {
  const artist = await fetch(URL);
  const artistObj = await artist.json();
  const songs = await fetch(URL + "/top?limit=10");
  const songsObj = await songs.json();

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
    let song = songsObj.data[i];
    console.log(song.title);
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
    li.innerHTML = `<li class="row d-flex align-items-center ps-3 mb-3">
                        <div class="col-6 d-flex align-items-center">
                            <span>${i + 1}</span>
                            <img src=${song.album.cover_small} alt="" 
                            onclick="goToAlbumPage((event,${song.album.id}))" >
                            <span id="title">${song.title_short}</span>
                            </div>
                            <div class="col-2 text-end">
                            <span id="songId">${songId}</span>
                            </div>
                            <div class="col-2 text-end">
                            <span id="songDuration">${songDuration}</span>
                        </div>
                        </li>`;
    popularListSong.appendChild(li);
  }
};

// onclick="playButton((event,${song.title}))" ${song.album.cover_small},${song.artist.name},${song.duration},
