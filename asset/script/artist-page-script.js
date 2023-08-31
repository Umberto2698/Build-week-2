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

// Mobiles
const popularListSongXs = document.getElementById("popularSongs-xs");
const playerTitleXs = document.querySelector("#footer-xs p");

window.addEventListener("DOMContentLoaded", (event) => {
  getElement();
});

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
                            onclick="goToAlbumPage(event,'${song.album.id}')" >
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
                          <img src=${song.album.cover_small} alt="" onclick="goToAlbumPage(event,'${song.album.id}')" />
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
