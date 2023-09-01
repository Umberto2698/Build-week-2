window.addEventListener("DOMContentLoaded", async () => {
  const customBigCard = document.querySelector("#custom-big-card");
  const cardsArtists = document.querySelector("#cards-artists");
  const wrapperDiscoverMore = document.querySelector("#wrapper-discover-more");
  const discoverMoreHide = document.querySelector("#discover-more-hide");
  cardsArtists.innerHTML = `
    <div class="d-flex justify-content-center p-5 m-5">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  customBigCard.innerHTML = `
    <div class="d-flex justify-content-center p-5 m-5">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  wrapperDiscoverMore.innerHTML = `
    <div class="d-flex justify-content-center p-5 m-5">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  discoverMoreHide.innerHTML = `
    <div class="d-flex justify-content-center p-5 m-5">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  try {
    const varValue = "rain";
    const URL =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + varValue;
    // console.log(URL);
    const response = await fetch(URL);

    if (response.ok) {
      const parseBody = await response.json();
      console.log(parseBody);

      const duration0 = parseBody.data[0].duration;
      const id0 = parseBody.data[0].id;
      const preview0 = parseBody.data[0].preview;
      const title0 = parseBody.data[0].title;
      const type0 = parseBody.data[0].type;
      const idAlbum0 = parseBody.data[0].album.id;
      const titleAlbum0 = parseBody.data[0].album.title;
      const imgAlbum0 = parseBody.data[0].album.cover_big;
      const typeAlbum0 = parseBody.data[0].album.type;
      const idArtist0 = parseBody.data[0].artist.id;
      const nameArtist0 = parseBody.data[0].artist.name;
      const imgArtist0 = parseBody.data[0].artist.picture;
      const typeArtist0 = parseBody.data[0].artist.type;
      //___________________________________________________________
      const type1 = parseBody.data[1].type;
      const typeAlbum1 = parseBody.data[1].album.type;
      const typeArtist1 = parseBody.data[1].artist.type;

      const idArtist1 = parseBody.data[1].artist.id;
      const nameArtist1 = parseBody.data[1].artist.name;
      const imgArtist1 = parseBody.data[1].artist.picture;
      //___________________________________________________________
      const type2 = parseBody.data[2].type;
      const typeAlbum2 = parseBody.data[2].album.type;
      const typeArtist2 = parseBody.data[2].artist.type;

      const idArtist2 = parseBody.data[2].artist.id;
      const nameArtist2 = parseBody.data[2].artist.name;
      const imgArtist2 = parseBody.data[2].artist.picture;
      //___________________________________________________________
      const type3 = parseBody.data[3].type;
      const typeAlbum3 = parseBody.data[3].album.type;
      const typeArtist3 = parseBody.data[3].artist.type;

      const idArtist3 = parseBody.data[3].artist.id;
      const nameArtist3 = parseBody.data[3].artist.name;
      const imgArtist3 = parseBody.data[3].artist.picture;
      //___________________________________________________________
      const type4 = parseBody.data[4].type;
      const typeAlbum4 = parseBody.data[4].album.type;
      const typeArtist4 = parseBody.data[4].artist.type;

      const idArtist4 = parseBody.data[4].artist.id;
      const nameArtist4 = parseBody.data[4].artist.name;
      const imgArtist4 = parseBody.data[4].artist.picture;
      //___________________________________________________________
      const type5 = parseBody.data[5].type;
      const typeAlbum5 = parseBody.data[5].album.type;
      const typeArtist5 = parseBody.data[5].artist.type;

      const idArtist5 = parseBody.data[5].artist.id;
      const nameArtist5 = parseBody.data[5].artist.name;
      const imgArtist5 = parseBody.data[5].artist.picture;
      //___________________________________________________________
      const type6 = parseBody.data[6].type;
      const typeAlbum6 = parseBody.data[6].album.type;
      const typeArtist6 = parseBody.data[6].artist.type;

      const idArtist6 = parseBody.data[6].artist.id;
      const nameArtist6 = parseBody.data[6].artist.name;
      const imgArtist6 = parseBody.data[6].artist.picture;
      //___________________________________________________________
      const type7 = parseBody.data[7].type;
      const typeAlbum7 = parseBody.data[7].album.type;
      const typeArtist7 = parseBody.data[7].artist.type;

      const duration7 = parseBody.data[7].duration;
      const id7 = parseBody.data[7].id;
      const preview7 = parseBody.data[7].preview;
      const title7 = parseBody.data[7].title;
      const idAlbum7 = parseBody.data[7].album.id;
      const titleAlbum7 = parseBody.data[7].album.title;
      const imgAlbum7 = parseBody.data[7].album.cover_big;
      const tracklistArtist7 = parseBody.data[7].artist.tracklist;
      const nameArtist7 = parseBody.data[7].artist.name;
      //___________________________________________________________
      const type8 = parseBody.data[8].type;
      const typeAlbum8 = parseBody.data[8].album.type;
      const typeArtist8 = parseBody.data[8].artist.type;

      const duration8 = parseBody.data[8].duration;
      const id8 = parseBody.data[8].id;
      const preview8 = parseBody.data[8].preview;
      const title8 = parseBody.data[8].title;
      const idAlbum8 = parseBody.data[8].album.id;
      const tracklistArtist8 = parseBody.data[8].artist.tracklist;
      const titleAlbum8 = parseBody.data[8].album.title;
      const imgAlbum8 = parseBody.data[8].album.cover_big;
      const nameArtist8 = parseBody.data[8].artist.name;
      //___________________________________________________________
      const type9 = parseBody.data[9].type;
      const typeAlbum9 = parseBody.data[9].album.type;
      const typeArtist9 = parseBody.data[9].artist.type;

      const duration9 = parseBody.data[9].duration;
      const id9 = parseBody.data[9].id;
      const preview9 = parseBody.data[9].preview;
      const title9 = parseBody.data[9].title;
      const idAlbum9 = parseBody.data[9].album.id;
      const tracklistArtist9 = parseBody.data[9].artist.tracklist;
      const titleAlbum9 = parseBody.data[9].album.title;
      const imgAlbum9 = parseBody.data[9].album.cover_big;
      const nameArtist9 = parseBody.data[9].artist.name;
      //___________________________________________________________
      const type10 = parseBody.data[10].type;
      const typeAlbum10 = parseBody.data[10].album.type;
      const typeArtist10 = parseBody.data[10].artist.type;

      const duration10 = parseBody.data[10].duration;
      const id10 = parseBody.data[10].id;
      const preview10 = parseBody.data[10].preview;
      const title10 = parseBody.data[10].title;
      const idAlbum10 = parseBody.data[10].album.id;
      const titleAlbum10 = parseBody.data[10].album.title;
      const imgAlbum10 = parseBody.data[10].album.cover_big;
      const nameArtist10 = parseBody.data[10].artist.name;
      //___________________________________________________________
      const type11 = parseBody.data[11].type;
      const typeAlbum11 = parseBody.data[11].album.type;
      const typeArtist11 = parseBody.data[11].artist.type;

      const duration11 = parseBody.data[11].duration;
      const id11 = parseBody.data[11].id;
      const preview11 = parseBody.data[11].preview;
      const title11 = parseBody.data[11].title;
      const idAlbum11 = parseBody.data[11].album.id;
      const titleAlbum11 = parseBody.data[11].album.title;
      const imgAlbum11 = parseBody.data[11].album.cover_big;
      const nameArtist11 = parseBody.data[11].artist.name;
      //___________________________________________________________
      const type12 = parseBody.data[12].type;
      const typeAlbum12 = parseBody.data[12].album.type;
      const typeArtist12 = parseBody.data[12].artist.type;

      const duration12 = parseBody.data[12].duration;
      const id12 = parseBody.data[12].id;
      const preview12 = parseBody.data[12].preview;
      const title12 = parseBody.data[12].title;
      const idAlbum12 = parseBody.data[12].album.id;
      const titleAlbum12 = parseBody.data[12].album.title;
      const imgAlbum12 = parseBody.data[12].album.cover_big;
      const nameArtist12 = parseBody.data[12].artist.name;
      //___________________________________________________________
      const type13 = parseBody.data[13].type;
      const typeAlbum13 = parseBody.data[13].album.type;
      const typeArtist13 = parseBody.data[13].artist.type;

      const duration13 = parseBody.data[13].duration;
      const id13 = parseBody.data[13].id;
      const preview13 = parseBody.data[13].preview;
      const title13 = parseBody.data[13].title;
      const idAlbum13 = parseBody.data[13].album.id;
      const titleAlbum13 = parseBody.data[13].album.title;
      const imgAlbum13 = parseBody.data[13].album.cover_big;
      const nameArtist13 = parseBody.data[13].artist.name;
      //___________________________________________________________
      const type14 = parseBody.data[14].type;
      const typeAlbum14 = parseBody.data[14].album.type;
      const typeArtist14 = parseBody.data[14].artist.type;

      const duration14 = parseBody.data[14].duration;
      const id14 = parseBody.data[14].id;
      const preview14 = parseBody.data[14].preview;
      const title14 = parseBody.data[14].title;
      const idAlbum14 = parseBody.data[14].album.id;
      const titleAlbum14 = parseBody.data[14].album.title;
      const imgAlbum14 = parseBody.data[14].album.cover_big;
      const nameArtist14 = parseBody.data[14].artist.name;
      //___________________________________________________________
      const type15 = parseBody.data[15].type;
      const typeAlbum15 = parseBody.data[15].album.type;
      const typeArtist15 = parseBody.data[15].artist.type;

      const duration15 = parseBody.data[15].duration;
      const id15 = parseBody.data[15].id;
      const preview15 = parseBody.data[15].preview;
      const title15 = parseBody.data[15].title;
      const idAlbum15 = parseBody.data[15].album.id;
      const titleAlbum15 = parseBody.data[15].album.title;
      const imgAlbum15 = parseBody.data[15].album.cover_big;
      const nameArtist15 = parseBody.data[15].artist.name;
      //___________________________________________________________
      const type16 = parseBody.data[16].type;
      const typeAlbum16 = parseBody.data[16].album.type;
      const typeArtist16 = parseBody.data[16].artist.type;

      const duration16 = parseBody.data[16].duration;
      const id16 = parseBody.data[16].id;
      const preview16 = parseBody.data[16].preview;
      const title16 = parseBody.data[16].title;
      const idAlbum16 = parseBody.data[16].album.id;
      const titleAlbum16 = parseBody.data[16].album.title;
      const imgAlbum16 = parseBody.data[16].album.cover_big;
      const nameArtist16 = parseBody.data[16].artist.name;
      //___________________________________________________________
      const type17 = parseBody.data[17].type;
      const typeAlbum17 = parseBody.data[17].album.type;
      const typeArtist17 = parseBody.data[17].artist.type;

      const duration17 = parseBody.data[17].duration;
      const id17 = parseBody.data[17].id;
      const preview17 = parseBody.data[17].preview;
      const title17 = parseBody.data[17].title;
      const idAlbum17 = parseBody.data[17].album.id;
      const titleAlbum17 = parseBody.data[17].album.title;
      const imgAlbum17 = parseBody.data[17].album.cover_big;
      const nameArtist17 = parseBody.data[17].artist.name;
      //___________________________________________________________
      const type18 = parseBody.data[18].type;
      const typeAlbum18 = parseBody.data[18].album.type;
      const typeArtist18 = parseBody.data[18].artist.type;

      const duration18 = parseBody.data[18].duration;
      const id18 = parseBody.data[18].id;
      const preview18 = parseBody.data[18].preview;
      const title18 = parseBody.data[18].title;
      const idAlbum18 = parseBody.data[18].album.id;
      const titleAlbum18 = parseBody.data[18].album.title;
      const imgAlbum18 = parseBody.data[18].album.cover_big;
      const nameArtist18 = parseBody.data[18].artist.name;
      //___________________________________________________________

      const numTrackArtist7 = await getTracklist7(tracklistArtist7);
      const numTrackArtist8 = await getTracklist8(tracklistArtist8);
      const numTrackArtist9 = await getTracklist9(tracklistArtist9);
      console.log(numTrackArtist7);
      console.log(numTrackArtist8);
      console.log(numTrackArtist9);

      customBigCard.innerHTML = `
        <img
        src="${imgAlbum0}"
        alt="${titleAlbum0}"
        class="big-img"
      />
        <div class="d-flex flex-column flex-grow-1 justify-content-between">
        <div class="d-flex justify-content-between align-items-center">
          <p class="custom-fontSize-main-small m-0">${typeAlbum0.toUpperCase()}</p>
          <button
            id="btn-hide-ad"
            type="button"
            class="btn text-secondary"
          >
            NASCONDI ANNUNCI
          </button>
        </div>
        <div class="d-flex flex-column">
          <h1>${titleAlbum0}</h1>
          <p class="custom-fontSize-main-small m-0">${nameArtist0}</p>
        </div>
        <div class="d-flex flex-column pt-3">
          <p
            class="p-hide custom-fontSize-main-normal custom-marginBottom-xs"
          >
            Ascolta l'album <a href="#" target="_blank">${titleAlbum0}</a> by <a href="#" target="_blank">${nameArtist0}!</a>
          </p>
          <div class="d-flex gap-3">
            <button type="button" class="btn btn-success custom-btn">
              Play
            </button>
            <button type="button" class="btn btn-outline-dark custom-btn">
              Salva
            </button>
            <button type="button" class="custom-btn">
              <i class="bi bi-three-dots"></i>
            </button>
          </div>
        </div>
         </div>
        `;
      cardsArtists.innerHTML = `
            <div
              class="row row-cols-2 row-cols-lg-3 row-cols-xl-2 row-cols-xxl-3 gy-3"
            >
              <div class="col card-col">
                <div class="d-flex">
                  <a href="#" target="_blank">
                      <img
                        src="${imgArtist1}"
                        alt="${nameArtist1}"
                        class="small-img"
                      />
                  </a>
                  <div
                    class="d-flex align-items-center custom-paddingLeft-cards flex-grow-1 bg-darkgray-color"
                  >
                    <p class="custom-fontSize-cards-normal m-0 flex-grow-1">
                        <a href="#" target="_blank">${nameArtist1}</a>
                    </p>
                    </div>
                </div>
              </div>
              <div class="col card-col">
                <div class="d-flex">
                  <a href="#" target="_blank">
                      <img
                        src="${imgArtist2}"
                        alt="${nameArtist2}"
                        class="small-img"
                      />
                  </a>
                  <div
                    class="d-flex align-items-center custom-paddingLeft-cards flex-grow-1 bg-darkgray-color"
                  >
                    <p class="custom-fontSize-cards-normal m-0 flex-grow-1">
                        <a href="#" target="_blank">${nameArtist2}</a>
                    </p>
                    </div>
                </div>
              </div>
              <div class="col card-col">
                <div class="d-flex">
                  <a href="#" target="_blank">
                      <img
                        src="${imgArtist3}"
                        alt="${nameArtist3}"
                        class="small-img"
                      />
                  </a>
                  <div
                    class="d-flex align-items-center custom-paddingLeft-cards flex-grow-1 bg-darkgray-color"
                  >
                    <p class="custom-fontSize-cards-normal m-0 flex-grow-1">
                        <a href="#" target="_blank">${nameArtist3}</a>
                    </p>
                    </div>
                </div>
              </div>
              <div class="col card-col">
                <div class="d-flex">
                  <a href="#" target="_blank">
                      <img
                        src="${imgArtist4}"
                        alt="${nameArtist4}"
                        class="small-img"
                      />
                  </a>
                  <div
                    class="d-flex align-items-center custom-paddingLeft-cards flex-grow-1 bg-darkgray-color"
                  >
                    <p class="custom-fontSize-cards-normal m-0 flex-grow-1">
                        <a href="#" target="_blank">${nameArtist4}</a>
                    </p>
                    </div>
                </div>
              </div>
              <div class="col card-col">
                <div class="d-flex">
                  <a href="#" target="_blank">
                      <img
                        src="${imgArtist5}"
                        alt="${nameArtist5}"
                        class="small-img"
                      />
                  </a>
                  <div
                    class="d-flex align-items-center custom-paddingLeft-cards flex-grow-1 bg-darkgray-color"
                  >
                    <p class="custom-fontSize-cards-normal m-0 flex-grow-1">
                        <a href="#" target="_blank">${nameArtist5}</a>
                    </p>
                    </div>
                </div>
              </div>
              <div class="col card-col">
                <div class="d-flex">
                  <a href="#" target="_blank">
                      <img
                        src="${imgArtist6}"
                        alt="${nameArtist6}"
                        class="small-img"
                      />
                  </a>
                  <div
                    class="d-flex align-items-center custom-paddingLeft-cards flex-grow-1 bg-darkgray-color"
                  >
                    <p class="custom-fontSize-cards-normal m-0 flex-grow-1">
                        <a href="#" target="_blank">${nameArtist6}</a>
                    </p>
                    </div>
                </div>
              </div>
            </div>
        `;
      wrapperDiscoverMore.innerHTML = `
        <h3 class="custom-paddingTop-lg custom-paddingBottom-lg m-0">
              Alcuni album per te
            </h3>

            <div
              id="discover-more"
              class="row row-cols-2 row-cols-sm-3 row-cols-md-4 gy-3"
            >
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum7}"
                        class="card-img-top"
                        alt="${titleAlbum7}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum7}</a>
                    </h5>
                    <p class="card-text">${typeAlbum7} di <a href="#" target="_blank">${nameArtist7}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum8}"
                        class="card-img-top"
                        alt="${titleAlbum8}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum8}</a>
                    </h5>
                    <p class="card-text">${typeAlbum8} di <a href="#" target="_blank">${nameArtist8}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum9}"
                        class="card-img-top"
                        alt="${titleAlbum9}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum9}</a>
                    </h5>
                    <p class="card-text">${typeAlbum9} di <a href="#" target="_blank">${nameArtist9}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum10}"
                        class="card-img-top"
                        alt="${titleAlbum10}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum10}</a>
                    </h5>
                    <p class="card-text">${typeAlbum10} di <a href="#" target="_blank">${nameArtist10}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum11}"
                        class="card-img-top"
                        alt="${titleAlbum11}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum11}</a>
                    </h5>
                    <p class="card-text">${typeAlbum11} di <a href="#" target="_blank">${nameArtist11}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum12}"
                        class="card-img-top"
                        alt="${titleAlbum12}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum12}</a>
                    </h5>
                    <p class="card-text">${typeAlbum12} di <a href="#" target="_blank">${nameArtist12}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum13}"
                        class="card-img-top"
                        alt="${titleAlbum13}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum13}</a>
                    </h5>
                    <p class="card-text">${typeAlbum13} di <a href="#" target="_blank">${nameArtist13}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum14}"
                        class="card-img-top"
                        alt="${titleAlbum14}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum14}</a>
                    </h5>
                    <p class="card-text">${typeAlbum14} di <a href="#" target="_blank">${nameArtist14}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum15}"
                        class="card-img-top"
                        alt="${titleAlbum15}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum15}</a>
                    </h5>
                    <p class="card-text">${typeAlbum15} di <a href="#" target="_blank">${nameArtist15}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum16}"
                        class="card-img-top"
                        alt="${titleAlbum16}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum16}</a>
                    </h5>
                    <p class="card-text">${typeAlbum16} di <a href="#" target="_blank">${nameArtist16}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum17}"
                        class="card-img-top"
                        alt="${titleAlbum17}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum17}</a>
                    </h5>
                    <p class="card-text">${typeAlbum17} di <a href="#" target="_blank">${nameArtist17}</a></p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card bg-darkgray-color text-light">
                  <a href="#" target="_blank">
                      <img
                        src="${imgAlbum18}"
                        class="card-img-top"
                        alt="${titleAlbum18}"
                      />
                  </a>
                  <div class="card-body">
                    <h5>  
                        <a href="#" target="_blank">${titleAlbum18}</a>
                    </h5>
                    <p class="card-text">${typeAlbum18} di <a href="#" target="_blank">${nameArtist18}</a></p>
                  </div>
                </div>
              </div>
            </div>
        `;
      discoverMoreHide.innerHTML = `
        <div class="card-mobile p-4 pb-3 mt-4">
        <div class="d-flex flex-column gap-4">
          <div class="d-flex gap-4">
            <img
              src="${imgAlbum7}"
              alt="${titleAlbum7}"
              class="xs-img"
              style="box-shadow: 0px 0px 15px 0px white"
            />
            <div class="d-flex flex-column gap-2">
              <p class="m-0 text-secondary">${typeAlbum7.toUpperCase()}</p>
              <h3 class="m-0">${titleAlbum7}</h3>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <i
                class="bi bi-suit-heart-fill custom-fontSize-xl color-primary"
              ></i>
              <i
                class="bi bi-three-dots-vertical custom-fontSize-xl custom-marginLeft-md"
              ></i>
            </div>
            <div class="d-flex align-items-center gap-3">
              <p class="m-0 text-secondary">${numTrackArtist7} ${type7.toUpperCase()}</p>
              <i class="bi bi-play-fill icon-play custom-fontSize-xl"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card-mobile p-4 pb-3 mt-4">
        <div class="d-flex flex-column gap-4">
          <div class="d-flex gap-4">
            <img
              src="${imgAlbum8}"
              alt="${titleAlbum8}"
              class="xs-img"
              style="box-shadow: 0px 0px 15px 0px white"
            />
            <div class="d-flex flex-column gap-2">
              <p class="m-0 text-secondary">${typeAlbum8.toUpperCase()}</p>
              <h3 class="m-0">${titleAlbum8}</h3>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <i
                class="bi bi-suit-heart-fill custom-fontSize-xl color-primary"
              ></i>
              <i
                class="bi bi-three-dots-vertical custom-fontSize-xl custom-marginLeft-md"
              ></i>
            </div>
            <div class="d-flex align-items-center gap-3">
              <p class="m-0 text-secondary">${numTrackArtist8} ${type8.toUpperCase()}</p>
              <i class="bi bi-play-fill icon-play custom-fontSize-xl"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="card-mobile p-4 pb-3 mt-4">
        <div class="d-flex flex-column gap-4">
          <div class="d-flex gap-4">
            <img
              src="${imgAlbum9}"
              alt="${titleAlbum9}"
              class="xs-img"
              style="box-shadow: 0px 0px 15px 0px white"
            />
            <div class="d-flex flex-column gap-2">
              <p class="m-0 text-secondary">${typeAlbum9.toUpperCase()}</p>
              <h3 class="m-0">${titleAlbum9}</h3>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex">
              <i
                class="bi bi-suit-heart-fill custom-fontSize-xl color-primary"
              ></i>
              <i
                class="bi bi-three-dots-vertical custom-fontSize-xl custom-marginLeft-md"
              ></i>
            </div>
            <div class="d-flex align-items-center gap-3">
              <p class="m-0 text-secondary">${numTrackArtist9} ${type9.toUpperCase()}</p>
              <i class="bi bi-play-fill icon-play custom-fontSize-xl"></i>
            </div>
          </div>
        </div>
      </div>
        `;
    }
  } catch (error) {
    console.log(error);
  }
});

const getTracklist7 = async (tracklistArtist7) => {
  const URL = tracklistArtist7;
  const responseTracklistArtist7 = await fetch(URL);
  if (responseTracklistArtist7.ok) {
    const parseBody = await responseTracklistArtist7.json();
    return parseBody.total;
  }
};

const getTracklist8 = async (tracklistArtist8) => {
  const URL = tracklistArtist8;
  const responseTracklistArtist8 = await fetch(URL);
  if (responseTracklistArtist8.ok) {
    const parseBody = await responseTracklistArtist8.json();
    return parseBody.total;
  }
};

const getTracklist9 = async (tracklistArtist9) => {
  const URL = tracklistArtist9;
  const responseTracklistArtist9 = await fetch(URL);
  if (responseTracklistArtist9.ok) {
    const parseBody = await responseTracklistArtist9.json();
    return parseBody.total;
  }
};

// const getTracklist8 = async (tracklistArtist8) => {
//   const newURL = `"${tracklistArtist8}"`;

//   const responseTracklistArtist8 = await fetch(newURL);
//   if (responseTracklistArtist8.ok) {
//     const numTrackAlbum8 = await responseTracklistArtist8.json().data[1];
//     return numTrackAlbum8;
//   }
// };

// const getTracklist9 = async (tracklistArtist9) => {
//   const newURL = `"${tracklistArtist9}"`;

//   const responseTracklistArtist9 = await fetch(newURL);
//   if (responseTracklistArtist9.ok) {
//     const numTrackAlbum9 = await responseTracklistArtist9.json().data[1];
//     return numTrackAlbum9;
//   }
// };
