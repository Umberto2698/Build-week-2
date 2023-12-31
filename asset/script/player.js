const playbarImg = document.getElementById("playbar-img");
const playbarTitle = document.getElementById("playbar-title");
const playbarArtist = document.getElementById("playbar-artist");
const fillContainer = document.getElementById("fill-container");
const songFullTime = document.getElementById("song-length");
const songCurrentTime = document.getElementById("song-current-time");
const volumeIcon = document.getElementById("volIcon");
const audioSlider = document.getElementById("audio-slider");
const buttonsToToggle = document.getElementsByClassName("btn-toggle-custom");
const playPauseButton = document.getElementsByClassName("play-pause-button");
const randomSongButton = document.getElementById("random-song-button");
const previousSongButton = document.getElementById("previous-song-button");
const playBarPlayButton = document.getElementById("playbar-play-button");
const nextSongButton = document.getElementById("next-song-button");
const RepeatAlbumButton = document.getElementById("repeat-album-button");
const currentSong = document.createElement("audio");
const playButtonXs = document.getElementById("play-button-mobile");
const playerTitleXs = document.querySelector("#footer-xs p");
const modalAlbum = document.querySelector(".modal-title");
const modalImg = document.querySelector("#imgContainer img");
const modalTitle = document.querySelector(".modal-body h3");
const modalArtist = document.querySelector(".modal-body p");
const modalPlayButton = document.getElementById("playbar-play-button-xs");
const modalNextButton = document.getElementById("next-song-button-xs");
const modalPreviousButton = document.getElementById("previous-song-button-xs");

// Variabili
let songlength = 0;
let timeCounter = 0;
let songInterval = null;
let isPlaying = false;
let trackIndex = 0;

const iconchange1 = function () {
  if (volumeIcon.classList.contains("bi-volume-off") || volumeIcon.classList.contains("bi-volume-up")) {
    console.log("test");
    volumeIcon.classList.replace("bi-volume-off", "bi-volume-mute");
    volumeIcon.classList.replace("bi-volume-up", "bi-volume-mute");
  } else if (volumeIcon.classList.contains("bi-volume-mute") && audioSlider.value < 50) {
    volumeIcon.classList.replace("bi-volume-mute", "bi-volume-off");
  } else if (volumeIcon.classList.contains("bi-volume-mute") && audioSlider.value > 50) {
    volumeIcon.classList.replace("bi-volume-mute", "bi-volume-up");
  }
};

const iconchange2 = function () {
  if (audioSlider.value > 50) {
    volumeIcon.classList.replace("bi-volume-mute", "bi-volume-up");
    volumeIcon.classList.replace("bi-volume-off", "bi-volume-up");
    console.log("test");
  } else {
    volumeIcon.classList.replace("bi-volume-mute", "bi-volume-off");
    volumeIcon.classList.replace("bi-volume-up", "bi-volume-off");
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

const setTime = function () {
  timeCounter++;
  songCurrentTime.innerText = handletime(timeCounter);
  if (songCurrentTime.innerText === songFullTime.innerText) {
    clearInterval(songInterval);
    songInterval = null;
    timeCounter = 0;
    console.log("ended");
  }
};

const playButton = function (data) {
  console.log(data);
  localStorage.setItem("trackId", JSON.stringify(data.id));
  while (fillContainer.firstChild) {
    fillContainer.removeChild(fillContainer.lastChild);
  }
  modalAlbum.innerText = data.album.title;
  modalImg.src = data.album.cover_xl;
  modalArtist.innerText = data.artist.name;
  modalTitle.innerText = data.title;
  playbarImg.src = data.album.cover;
  playbarTitle.innerText = data.title;
  playerTitleXs.innerText = data.title + " by " + data.artist.name;
  playbarArtist.innerText = data.artist.name;
  songFullTime.innerText = handletime(data.duration);
  songlength = data.duration;
  const root = document.querySelector(":root");
  root.style.setProperty("--playbar-time", `${songlength}s`);
  const fillingBar = document.createElement("div");
  fillingBar.classList.add("position-absolute");
  fillingBar.classList.add("progress-bar-fill");
  fillContainer.appendChild(fillingBar);
  currentSong.src = data.preview;
  currentSong.load();
  currentSong.pause();
  isPlaying = false;
  if (songInterval === null) {
    songInterval = setInterval(setTime, 1000);
  } else {
    songCurrentTime.innerText = "0:00";
    timeCounter = 0;
    clearInterval(songInterval);
    songInterval = null;
    songInterval = setInterval(setTime, 1000);
  }
};

//if (localStorage.getItem("savedData")) {
//  const currentData = JSON.parse(localStorage.getItem("savedData"));
//  playButton(currentData.tracks.data);
//}

// const fetchTrackList = async (albumUrl) => {
//   try {
//     const resp = await fetch(albumUrl);
//     const data = await resp.json();
//     localStorage.setItem("currentTrackList", JSON.stringify(data.tracks.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

const playPauseSong = function () {
  if (isPlaying === false) {
    playSong();
  } else {
    pauseSong();
  }
};

playBarPlayButton.addEventListener("click", playPauseSong);
playButtonXs.addEventListener("click", playPauseSong);
modalPlayButton.addEventListener("click", playPauseSong);

const playSong = function () {
  currentSong.play();
  isPlaying = true;
  // for (i = 0; i < playPauseButton.length; i++) {
  //   playPauseButton[i].innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black"></i>`;
  // }
  playButtonXs.innerHTML = `<i class="btn-toggle-custom bi bi-pause-fill text-white xsIcon"></i>`;
  playButtonXs.classList.remove("btn-success");
  modalPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-pause-fill text-black"></i>`;
  modalPlayButton.classList.remove("btn-success");
  modalPlayButton.classList.add("btn-light");
  playBarPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-pause-fill text-black"></i>`;
  playBarPlayButton.classList.remove("btn-light");
  playBarPlayButton.classList.add("btn-success");
};

const pauseSong = function () {
  currentSong.pause();
  isPlaying = false;
  // for (i = 0; i < playPauseButton.length; i++) {
  //   playPauseButton[i].innerHTML = `<i class="btn-toggle-custom bi bi-pause-fill text-black"></i>`;
  // }
  playButtonXs.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-white xsIcon"></i>`;
  playButtonXs.classList.remove("btn-success");
  modalPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black"></i>`;
  modalPlayButton.classList.remove("btn-success");
  modalPlayButton.classList.add("btn-light");
  playBarPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black"></i>`;
  playBarPlayButton.classList.remove("btn-success");
  playBarPlayButton.classList.add("btn-light");
};

const nextSong = function () {
  playButtonXs.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black xsIcon"></i>`;
  modalPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black xsIcon"></i>`;
  playBarPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black xsIcon"></i>`;
  const currentTrackId = JSON.parse(localStorage.getItem("trackId"));
  const currentTrackList = JSON.parse(localStorage.getItem("savedData"));
  for (i = 0; i < currentTrackList.length; i++) {
    if (currentTrackId === currentTrackList[i].id) {
      if (i === currentTrackList.length - 1) {
        playButton(currentTrackList[0]);
      } else {
        i++;
        playButton(currentTrackList[i]);
      }
    }
  }
};

nextSongButton.addEventListener("click", nextSong);
modalNextButton.addEventListener("click", nextSong);

const previousSong = function () {
  playButtonXs.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black xsIcon"></i>`;
  modalPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black xsIcon"></i>`;
  playBarPlayButton.innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black xsIcon"></i>`;
  const currentTrackId = JSON.parse(localStorage.getItem("trackId"));
  const currentTrackList = JSON.parse(localStorage.getItem("savedData"));
  for (i = 0; i < currentTrackList.length; i++) {
    if (currentTrackId === currentTrackList[i].id) {
      if (i === 0) {
        playButton(currentTrackList[currentTrackList.length - 1]);
      } else {
        i = i - 1;
        playButton(currentTrackList[i]);
        i = currentTrackList.length;
      }
    }
  }
};

previousSongButton.addEventListener("click", previousSong);
modalPreviousButton.addEventListener("click", previousSong);

const playButtonMobile = function (data) {
  console.log(data);
  localStorage.setItem("trackId", JSON.stringify(data.id));
  modalAlbum.innerText = data.album.title;
  modalImg.src = data.album.cover_xl;
  modalArtist.innerText = data.artist.name;
  modalTitle.innerText = data.title;
  playerTitleXs.innerText = data.title + " by " + data.artist.name;
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
