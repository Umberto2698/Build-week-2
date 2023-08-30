// funzioni soundbar

const volumeIcon = document.getElementById("volIcon");
const audioSlider = document.getElementById("audio-slider");
const buttonsToToggle = document.getElementsByClassName("btn-toggle-custom");

const iconchange1 = function () {
  if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-off text-white fs-4"></i>` ||
    volumeIcon.innerHTML === `<i class="bi bi-volume-up text-white fs-4"></i>`
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-mute text-white fs-4"></i>`;
  } else if (volumeIcon.innerHTML === `<i class="bi bi-volume-mute text-white fs-4"></i>` && audioSlider.value < 50) {
    volumeicon.innerHTML = `<i class="bi bi-volume-off text-white fs-4"></i>`;
  } else if (volumeIcon.innerHTML === `<i class="bi bi-volume-mute text-white fs-4"></i>` && audioSlider.value > 50) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-up text-white fs-4"></i>`;
  }
};

const iconchange2 = function () {
  if (audioSlider.value > 50) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-up text-white fs-4"></i>`;
  } else {
    volumeIcon.innerHTML = `<i class="bi bi-volume-off text-white fs-4"></i>`;
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

// fetch

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

// funzione che crea la row con la track che ci viene data

let counter = 1;
const createTrackList = function (data) {
  const trackContainer = document.createElement("div");
  trackContainer.classList.add("row");
  const trackNumber = document.createElement("div");
  trackNumber.classList.add("col-1");
  trackNumber.classList.add("text-center");
  trackNumber.classList.add("grey");
  trackNumber.classList.add("d-none");
  trackNumber.classList.add("d-md-inline");
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
  trackRepeats.innerText = data.rank;
  const trackTime = document.createElement("div");
  trackTime.classList.add("col-1");
  trackTime.classList.add("text-center");
  trackTime.classList.add("grey");
  trackTime.classList.add("d-none");
  trackTime.classList.add("d-lg-inline");
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

let songlength = 0;

const playButton = function (data) {
  fillContainer.removeChild(fillContainer.firstChild);
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
};

//const setTime = function () {
//  songCurrentTime.innerText = handletime(timeCounter);
//  console.log(handletime(songlength));
//  console.log(songCurrentTime.innerText);
//  timeCounter++;
//};
//
//let timeCounter = 0;
//do {
//  setInterval(setTime, 1000);
//} while (handletime(songlength) !== songCurrentTime.innerText);

// array di ID di album per i tasti precedente e successivo

const albumURL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

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

// fetch al caricamento della pagina - da modificare con l ID di ogni album in fondo all url per renderlo dinamico

window.onload = async () => {
  try {
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062");
    const data = await resp.json();
    console.log(data);
    data.tracks.data.forEach(element => {
      createTrackList(element);
    });
    albumTitle.innerText = data.title;
    albumCover.src = data.cover;
    albumArtist.innerText = data.artist.name;
    albumYear.innerText = data.release_date.slice(0, 4);
    albumYear2.innerText = data.release_date.slice(0, 4);
    albumTracks.innerText = `${counter} Tracks`;
    albumFullTime.innerText = handletime(data.duration);
    artistLogo.src = data.artist.picture;
    albumDetails.addEventListener("click", () => console.log("qui dovrebbe portare alla pagina dell' artista"));
    // colorthief test

    // const colorThief = new ColorThief();
    //const img = albumCover;

    // Make sure image is finished loading
    //if (img.complete) {
    //  //console.log(colorThief.getColor(albumCover));
    //} else {
    //  img.addEventListener("load", function () {
    //    console.log(colorThief.getColor(albumCover));
    //  });
    //}
  } catch (error) {
    console.log(error);
  }
};
