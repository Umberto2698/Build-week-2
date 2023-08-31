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
