let video = document.getElementById("myVideo");
let Btn = document.getElementById("Btn");

function pauseBtn() {
  if (video.paused) {
    video.play();
    Btn.innerHTML = "Pause";
  } else {
    video.pause();
    Btn.innerHTML = "Play";
  }
}
