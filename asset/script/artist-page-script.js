const URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/412";

const artistBackground = document.getElementById("background-big-card");
const artistNameTitle = document.getElementsByTagName("h1")[0];
const artistNameLiked = document.querySelector("#lovedSongs p");
const artistImageLiked = document.querySelector("#lovedSongs img");
const monthListener = document.getElementById("listener");
const monthListenerMobile = document.getElementById("listener-xs");
let popularListSong = document.getElementById("popularSongs");

const playerTitle = document.querySelector("footer h6");
const playerArtist = document.querySelector("footer p");
const playerImage = document.querySelector("footer img");

window.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  getElement();
});

const getElement = async () => {
  const artist = await fetch(URL);
  const artistObj = await artist.json();
  const songs = await fetch(URL + "/top?limit=10");
  const songsObj = await songs.json();
  console.log(songsObj);

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
  artistImageLiked.setAttribute("src", `${artistObj.picture_small}`);
  for (let i = 0; i < songsObj.data.length; i++) {
    let li = document.createElement("div");
    let song = songsObj.data[i];
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
                            <img src=${song.album.cover_small} alt="" />
                            <span>${song.title_short}</span>
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
