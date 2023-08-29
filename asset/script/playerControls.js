const volumeIcon = document.getElementById("var-icon");
const audioSlider = document.getElementById("audio-slider");
const buttonsToToggle = document.getElementsByClassName("btn-toggle-custom");
console.log(buttonsToToggle);

const iconchange1 = function () {
  if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-off text-white" style="font-size: 12px"></i>` ||
    volumeIcon.innerHTML === `<i class="bi bi-volume-up text-white" style="font-size: 12px"></i>`
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-mute text-white" style="font-size: 12px"></i>`;
  } else if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-mute text-white" style="font-size: 12px"></i>` &&
    audioSlider.value < 50
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-off text-white" style="font-size: 12px"></i>`;
  } else if (
    volumeIcon.innerHTML === `<i class="bi bi-volume-mute text-white" style="font-size: 12px"></i>` &&
    audioSlider.value > 50
  ) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-up text-white" style="font-size: 12px"></i>`;
  }
};

const iconchange2 = function () {
  if (audioSlider.value > 50) {
    volumeIcon.innerHTML = `<i class="bi bi-volume-up text-white" style="font-size: 12px"></i>`;
  } else {
    volumeIcon.innerHTML = `<i class="bi bi-volume-off text-white" style="font-size: 12px"></i>`;
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
