let hours = document.getElementById("hours");
let mints = document.getElementById("mints");
let sec = document.getElementById("sec");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

let mint = 0;
let second = 0;
let hur = 0;
let interval;
let isRunning = false;

function updateDisplay() {
  sec.innerHTML = second < 10 ? "0" + second : second;
  mints.innerHTML = mint < 10 ? "0" + mint : mint;
  hours.innerHTML = hur < 10 ? "0" + hur : hur;
}

function stpwatch() {
  second++;
  if (second == 60) {
    second = 0;
    mint++;
  }
  if (mint == 60) {
    mint = 0;
    hur++;
  }
  updateDisplay();
}

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(interval);
    startStopBtn.innerHTML = "Start";
    startStopBtn.classList.replace("btn-danger", "btn-success");
  } else {
    interval = setInterval(stpwatch, 1000);
    startStopBtn.innerHTML = "Stop";
    startStopBtn.classList.replace("btn-success", "btn-danger");
  }
  isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  startStopBtn.innerHTML = "Start";
  startStopBtn.classList.replace("btn-danger", "btn-success");
  isRunning = false;
  mint = 0;
  second = 0;
  hur = 0;
  updateDisplay();
});
