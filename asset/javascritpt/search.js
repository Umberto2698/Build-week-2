const btnHome = document.getElementById("homePage");
btnHome.onclick = () => window.location.assign("./homePage.html");

const formInput = document.querySelector("#form-input");
const inputSearchHide = document.querySelector("#search-hide");
const div48Cards = document.getElementById("cards-48");

// formInput.addEventListener("onsubmit", async (event) => {
//   event.preventDefault();
//   console.log("funziona");
//
// });

const getData = async (event) => {
  event.preventDefault();
  const fromJS = document.querySelector("#fromJS");
  div48Cards.style.display = "none";
  fromJS.style.display = "flex";
  fromJS.innerHTML = `
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  try {
    const inputSearch = document.querySelector("#search");
    const URL =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
      inputSearch.value;
    // console.log(URL);
    const response = await fetch(URL);

    if (response.ok) {
      const parseBody = await response.json();
      //___________________________________________________________

      const duration0 = parseBody.data[0].duration;
      const id0 = parseBody.data[0].id;
      const preview0 = parseBody.data[0].preview;
      const title0 = parseBody.data[0].title;
      const idAlbum0 = parseBody.data[0].album.id;
      const titleAlbum0 = parseBody.data[0].album.title;
      const imgAlbum0 = parseBody.data[0].album.cover;
      const idArtist0 = parseBody.data[0].artist.id;
      const nameArtist0 = parseBody.data[0].artist.name;
      const imgArtist0 = parseBody.data[0].artist.picture;
      //___________________________________________________________

      const duration1 = parseBody.data[1].duration;
      const id1 = parseBody.data[1].id;
      const preview1 = parseBody.data[1].preview;
      const title1 = parseBody.data[1].title;
      const idAlbum1 = parseBody.data[1].album.id;
      const titleAlbum1 = parseBody.data[1].album.title;
      const imgAlbum1 = parseBody.data[1].album.cover;
      const idArtist1 = parseBody.data[1].artist.id;
      const nameArtist1 = parseBody.data[1].artist.name;
      const imgArtist1 = parseBody.data[1].artist.picture;
      //___________________________________________________________

      const duration2 = parseBody.data[2].duration;
      const id2 = parseBody.data[2].id;
      const preview2 = parseBody.data[2].preview;
      const title2 = parseBody.data[2].title;
      const idAlbum2 = parseBody.data[2].album.id;
      const titleAlbum2 = parseBody.data[2].album.title;
      const imgAlbum2 = parseBody.data[2].album.cover;
      const idArtist2 = parseBody.data[2].artist.id;
      const nameArtist2 = parseBody.data[2].artist.name;
      const imgArtist2 = parseBody.data[2].artist.picture;
      //___________________________________________________________

      const duration3 = parseBody.data[3].duration;
      const id3 = parseBody.data[3].id;
      const preview3 = parseBody.data[3].preview;
      const title3 = parseBody.data[3].title;
      const idAlbum3 = parseBody.data[3].album.id;
      const titleAlbum3 = parseBody.data[3].album.title;
      const imgAlbum3 = parseBody.data[3].album.cover;
      const idArtist3 = parseBody.data[3].artist.id;
      const nameArtist3 = parseBody.data[3].artist.name;
      const imgArtist3 = parseBody.data[3].artist.picture;
      //___________________________________________________________

      console.log(parseBody.data);
      console.log(parseBody.data[0].title);
      if (nameArtist0.toLowerCase() === inputSearch.value.toLowerCase()) {
        fromJS.innerHTML = `
              <div class="row row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-1 flex-grow-1">
                  <div class="col pt-4 pb-3">
                      <div class="d-flex flex-column gap-4 ps-4 fit-content">
                      <h4 class="m-0">Risultato più rilevante</h4>
                      <div class="div-img-artist-grande">
                          <img class="img-artist" src="${imgArtist0}" alt="${nameArtist0}" />
                      </div>
                      <div class="d-flex flex-column gap-4">
                          <h3 class="m-0">
                          <a href="#" target="_blank">${nameArtist0}</a>
                          </h3>
                          <div
                          class="d-flex gap-3 align-items-center justify-content-between"
                          >
                          <p class="m-0 text-secondary">
                              <a href="#" target="_blank">${nameArtist0}</a>
                          </p>
                          <p class="m-0 kinda-btn bold">Artist</p>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div class="col pt-4 pb-3">
                      <h4 class="mb-4">Brani</h4>
                      <div class="d-flex flex-column gap-3 pe-5">
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum0}" alt="${titleAlbum0}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title0}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist0}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration0}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum1}" alt="${titleAlbum1}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title1}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist1}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration1}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum2}" alt="${titleAlbum2}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title2}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist2}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration2}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum3}" alt="${titleAlbum3}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title3}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist3}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration3}
                          </p>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              `;
      } else if (
        titleAlbum0.toLowerCase() === inputSearch.value.toLowerCase()
      ) {
        fromJS.innerHTML = `
              <div class="row row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-1 flex-grow-1">
                  <div class="col pt-4 pb-3">
                      <div class="d-flex flex-column gap-4 ps-4 fit-content">
                      <h4 class="m-0">Risultato più rilevante</h4>
                      <div class="div-img-artist-grande">
                          <img class="img-artist" src="${imgAlbum0}" alt="${titleAlbum0}" />
                      </div>
                      <div class="d-flex flex-column gap-4">
                          <h3 class="m-0">
                          <a href="#" target="_blank">${titleAlbum0}</a>
                          </h3>
                          <div
                          class="d-flex gap-3 align-items-center justify-content-between"
                          >
                          <p class="m-0 text-secondary">
                              <a href="#" target="_blank">${nameArtist0}</a>
                          </p>
                          <p class="m-0 kinda-btn bold">Album</p>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div class="col pt-4 pb-3">
                      <h4 class="mb-4">Brani</h4>
                      <div class="d-flex flex-column gap-3 pe-5">
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum0}" alt="${titleAlbum0}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title0}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist0}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration0}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum1}" alt="${titleAlbum1}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title1}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist1}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration1}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum2}" alt="${titleAlbum2}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title2}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist2}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration2}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum3}" alt="${titleAlbum3}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title3}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist3}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration3}
                          </p>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              `;
      } else {
        fromJS.innerHTML = `
              <div class="row row-cols-xl-2 row-cols-lg-1 row-cols-md-2 row-cols-1 flex-grow-1">
                  <div class="col pt-4 pb-3">
                      <div class="d-flex flex-column gap-4 ps-4 fit-content">
                      <h4 class="m-0">Risultato più rilevante</h4>
                      <div class="div-img-artist-grande">
                          <img class="img-artist" src="${imgAlbum0}" alt="${titleAlbum0}" />
                      </div>
                      <div class="d-flex flex-column gap-4">
                          <h3 class="m-0">
                          <a href="#" target="_blank">${titleAlbum0}</a>
                          </h3>
                          <div
                          class="d-flex gap-3 align-items-center justify-content-between"
                          >
                          <p class="m-0 text-secondary">
                              <a href="#" target="_blank">${nameArtist0}</a>
                          </p>
                          <p class="m-0 kinda-btn bold">Artist</p>
                          </div>
                      </div>
                      </div>
                  </div>
                  <div class="col pt-4 pb-3">
                      <h4 class="mb-4">Brani</h4>
                      <div class="d-flex flex-column gap-3 pe-5">
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum0}" alt="${titleAlbum0}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title0}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist0}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration0}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum1}" alt="${titleAlbum1}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title1}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist1}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration1}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum2}" alt="${titleAlbum2}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title2}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist2}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration2}
                          </p>
                          </div>
                      </div>
                      <div class="d-flex flex-column brano">
                          <div
                          class="d-flex justify-content-between align-items-center"
                          >
                          <div class="d-flex gap-3">
                              <div class="div-img-artist-piccola">
                              <img class="img-artist" src="${imgAlbum3}" alt="${titleAlbum3}" />
                              </div>
                              <div class="d-flex flex-column justify-content-around">
                              <h6 class="m-0">
                                  <a href="#" target="_blank">${title3}</a>
                              </h6>
                              <p class="m-0 custom-fontSize-xs text-secondary">
                                  <a href="#" target="_blank">${nameArtist3}</a>
                              </p>
                              </div>
                          </div>
                          <p class="m-0 text-secondary custom-fontSize-xs">
                              ${duration3}
                          </p>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              `;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 *TODO: migliorare il responsive;
 *TODO: mettere un timer che passati 10sec e non ha trovato nulla mi mostra una scritta con errore
 */
