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
const currentSong = document.createElement("audio");

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
  localStorage.setItem("savedData", JSON.stringify(data));
  while (fillContainer.firstChild) {
    fillContainer.removeChild(fillContainer.lastChild);
  }
  playbarImg.src = data.album.cover;
  playbarTitle.innerText = data.title;
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

if (localStorage.getItem("savedData")) {
  playButton(JSON.parse(localStorage.getItem("savedData")));
}

const fetchTrackList = async albumUrl => {
  try {
    const resp = await fetch(albumUrl);
    const data = await resp.json();
    localStorage.setItem("currentAlbum", JSON.stringify(data.tracks.data));
  } catch (error) {
    console.log(error);
  }
};

const playPauseSong = function () {
  if (isPlaying === false) {
    playSong();
  } else {
    pauseSong();
  }
};

const playSong = function () {
  currentSong.play();
  isPlaying = true;
  for (i = 0; i < playPauseButton.length; i++) {
    playPauseButton[i].innerHTML = `<i class="btn-toggle-custom bi bi-pause-fill text-black"></i>`;
  }
};

const pauseSong = function () {
  currentSong.pause();
  isPlaying = false;
  for (i = 0; i < playPauseButton.length; i++) {
    playPauseButton[i].innerHTML = `<i class="btn-toggle-custom bi bi-play-fill text-black"></i>`;
  }
};

const nextSong = function () {
  const data = JSON.parse(localStorage.getItem("savedData"));
  console.log(data);
  let dynamicUrl = `https://striveschool-api.herokuapp.com/api/deezer/album/${data.album.id}`;
  fetchTrackList(dynamicUrl);
  const trackList = JSON.parse(localStorage.getItem("currentAlbum"));
  console.log(trackList);
  console.log(data.id);
  for (i = 0; i < trackList.length; i++) {
    if (data.id === trackList[i].id) {
      playButton(trackList[i++]);
      console.log("skip successful");
    }
  }
};

nextSong();

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
