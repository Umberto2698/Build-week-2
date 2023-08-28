const volumeIcon = document.getElementById("var-icon");
const audioSlider = document.getElementById("audio-slider");
const buttonsToToggle = document.getElementsByClassName("btn-toggle-custom");
console.log(buttonsToToggle);

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
  console.log("test");
};

for (i = 0; i < buttonsToToggle.length; i++) {
  buttonsToToggle[i].addEventListener("click", toggleColor);
}

audioSlider.addEventListener("input", iconchange2);

volumeIcon.addEventListener("click", iconchange1);
