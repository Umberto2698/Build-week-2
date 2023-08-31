// fetch values

const albumId = new URLSearchParams(window.location.search).get("albumId");

const albumURL = albumId
  ? "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId
  : "https://striveschool-api.herokuapp.com/api/deezer/album/";

// soundbar buttons

// lista dei target da modificare nella pagina

// target corpo centrale della pagina

const albumTitle = document.getElementById("album-title");
const albumCover = document.getElementById("album-cover");
const albumArtist = document.getElementById("album-artist");
const albumYear = document.getElementById("album-year");
const albumYear2 = document.getElementById("album-year-2");
const albumTracks = document.getElementById("album-tracks");
const albumFullTime = document.getElementById("album-fulltime");
const trackListRep = document.getElementById("track-list-rep");

// target footer del main con dettagli

const artistLogo = document.getElementById("artist-logo");
const albumDetails = document.getElementById("album-details");

// target playbar

const playbarImg = document.getElementById("playbar-img");
const playbarTitle = document.getElementById("playbar-title");
const playbarArtist = document.getElementById("playbar-artist");
const fillContainer = document.getElementById("fill-container");
const songFullTime = document.getElementById("song-length");
const songCurrentTime = document.getElementById("song-current-time");

// bottoni playbar

const previousButton = document.getElementById("previous-album");
const nextButton = document.getElementById("next-album");
const playPauseButton = document.getElementsByClassName("play-pause-button");
const volumeIcon = document.getElementById("volIcon");
const audioSlider = document.getElementById("audio-slider");
const buttonsToToggle = document.getElementsByClassName("btn-toggle-custom");
const currentSong = document.createElement("audio");

// array di ID di album per i tasti precedente e successivo

const albumIdArray = [
  "75621062",
  "164408822",
  "423059517",
  "15467484",
  "417821207",
  "51001312",
  "7821476",
  "1398967",
  "85363",
  "422933777",
  "61283802",
  "101841",
];

// variabili

let arrayIdCounter = 5;
let counter = 1;
let songlength = 0;
let timeCounter = 0;
let songInterval = null;
let isPlaying = false;
let trackIndex = 0;

// funzioni playbar

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

// funzione per dividere correttamente il tempo, ritorna una stringa

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

//funzione di reset della tracklist

const resetTrackList = function () {
  const child = trackListRep.firstChild;
  let sibling = child && child.nextSibling;
  while (trackListRep.lastChild && trackListRep.lastChild !== sibling) {
    trackListRep.removeChild(trackListRep.lastChild);
  }
};

// funzione che crea la row con la track che ci viene data

const createTrackList = function (data) {
  const trackContainer = document.createElement("div");
  trackContainer.classList.add("row");
  const trackNumber = document.createElement("div");
  trackNumber.classList.add("col-1");
  trackNumber.classList.add("text-center");
  trackNumber.classList.add("grey");
  trackNumber.classList.add("d-none");
  trackNumber.classList.add("d-md-inline");
  trackNumber.classList.add("align-self-center");
  trackNumber.innerText = counter;
  counter++;
  const trackTitleBox = document.createElement("div");
  trackTitleBox.classList.add("col-auto");
  trackTitleBox.classList.add("flex-grow-1");
  trackTitleBox.addEventListener("click", () => playButton(data));
  const trackTitle = document.createElement("p");
  trackTitle.classList.add("grey");
  trackTitle.classList.add("fw-bold");
  trackTitle.classList.add("track-title-rules");
  trackTitle.innerText = data.title;
  const trackArtist = document.createElement("p");
  trackArtist.classList.add("grey");
  trackArtist.classList.add("track-artist-rules");
  trackArtist.innerText = data.artist.name;
  const trackRepeats = document.createElement("div");
  trackRepeats.classList.add("col-4");
  trackRepeats.classList.add("grey");
  trackRepeats.classList.add("d-none");
  trackRepeats.classList.add("d-lg-inline");
  trackRepeats.classList.add("align-self-center");
  trackRepeats.innerText = data.rank;
  const trackTime = document.createElement("div");
  trackTime.classList.add("col-1");
  trackTime.classList.add("text-center");
  trackTime.classList.add("grey");
  trackTime.classList.add("d-none");
  trackTime.classList.add("d-lg-inline");
  trackTime.classList.add("align-self-center");
  const optionsButton = document.createElement("button");
  optionsButton.classList.add("col-1");
  optionsButton.classList.add("btn");
  optionsButton.classList.add("d-inline");
  optionsButton.classList.add("d-lg-none");
  optionsButton.innerHTML = `<i class="bi bi-three-dots-vertical grey fs-2"></i>`;

  trackTime.innerText = handletime(data.duration);
  trackContainer.appendChild(trackNumber);
  trackTitleBox.appendChild(trackTitle);
  trackTitleBox.appendChild(trackArtist);
  trackContainer.appendChild(trackTitleBox);
  trackContainer.appendChild(trackRepeats);
  trackContainer.appendChild(trackTime);
  trackContainer.appendChild(optionsButton);
  trackListRep.appendChild(trackContainer);
};

// funzione che applica i dati alla playbar quando si preme una canzone qualsiasi

const playPauseSong = function () {
  if (isplaying === false) {
    playSong();
  } else {
    PauseSong();
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
  const data = fetchTrackList(albumURL);
  console.log(data);
};

nextSong();

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
  currentSong.play();
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

// fetch al caricamento della pagina

const goToArtistPage = (event, id) => {
  location.href = `/artist-page.html?artistId=${id}`;
};

const createAlbumPage = async albumUrl => {
  try {
    const resp = await fetch(albumUrl);
    const data = await resp.json();
    console.log(data);
    resetTrackList();
    counter = 1;
    data.tracks.data.forEach(element => {
      createTrackList(element);
    });
    albumTitle.innerText = data.title;
    albumCover.src = data.cover_xl;
    albumArtist.innerText = data.artist.name;
    albumYear.innerText = data.release_date.slice(0, 4);
    albumYear2.innerText = data.release_date.slice(0, 4);
    albumTracks.innerText = `${data.tracks.data.length} Tracks`;
    albumFullTime.innerText = handletime(data.duration);
    artistLogo.src = data.artist.picture;
    albumDetails.addEventListener("click", () => goToArtistPage(Event, data.artist.id));
  } catch (error) {
    console.log(error);
  }
};

const fetchTrackList = async albumUrl => {
  try {
    const resp = await fetch(albumUrl);
    const data = await resp.json();
    return data.tracks.data;
  } catch (error) {
    console.log(error);
  }
};

if (albumId) {
  window.onload = createAlbumPage(albumURL);
} else {
  window.onload = createAlbumPage(albumURL + albumIdArray[arrayIdCounter]);
}
const previousAlbumPage = function () {
  arrayIdCounter--;
  if (arrayIdCounter < 0) {
    arrayIdCounter = 11;
  }
  createAlbumPage(albumURL + albumIdArray[arrayIdCounter]);
};

const nextAlbumPage = function () {
  arrayIdCounter++;
  if (arrayIdCounter > 11) {
    arrayIdCounter = 0;
  }
  createAlbumPage(albumURL + albumIdArray[arrayIdCounter]);
};

previousButton.addEventListener("click", previousAlbumPage);
nextButton.addEventListener("click", nextAlbumPage);
