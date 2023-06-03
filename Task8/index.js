const trainElement = document.getElementById("train");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", () => {
  trainElement.style.animationPlayState = "running";
});

stopBtn.addEventListener("click", () => {
  trainElement.style.animationPlayState = "paused";
});
