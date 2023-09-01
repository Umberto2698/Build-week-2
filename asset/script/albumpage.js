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
const previousButton = document.getElementById("previous-album");
const nextButton = document.getElementById("next-album");

// target footer del main con dettagli

const artistLogo = document.getElementById("artist-logo");
const albumDetails = document.getElementById("album-details");

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

// fetch al caricamento della pagina

const goToArtistPage = (event, id) => {
  location.href = `/artist-page.html?artistId=${id}`;
};

// fetch al caricamento della pagina - da modificare con l ID di ogni album in fondo all url per renderlo dinamico

const createAlbumPage = async albumUrl => {
  try {
    const resp = await fetch(albumUrl);
    const data = await resp.json();
    console.log(data);
    localStorage.setItem("currentAlbum", JSON.stringify(data));
    localStorage.setItem("savedData", JSON.stringify(data.tracks.data));
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
