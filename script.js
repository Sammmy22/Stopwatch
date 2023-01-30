let hour = 0,
  minute = 0,
  second = 0;

const hourDisplay = document.querySelector("#hour");
const minuteDisplay = document.querySelector("#minute");
const secondDisplay = document.querySelector("#second");

let running = null;

function stopwatch() {
  second++;
  if (second == 60) {
    minute++;
    second = 0;
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }

  second < 10
    ? (secondDisplay.innerHTML = "0" + second)
    : (secondDisplay.innerHTML = second);

  minute < 10
    ? (minuteDisplay.innerHTML = "0" + minute)
    : (minuteDisplay.innerHTML = minute);

  hour < 10
    ? (hourDisplay.innerHTML = "0" + hour)
    : (hourDisplay.innerHTML = hour);
}

document.querySelector("#start").addEventListener("click", function () {
  if (running !== null) {
    clearInterval(running);
  }
  running = setInterval(function () {
    stopwatch();
  }, 1000);
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(running);
});

document.querySelector("#reset").addEventListener("click", function () {
  clearInterval(running);

  hourDisplay.innerHTML = "0" + 0;
  minuteDisplay.innerHTML = "0" + 0;
  secondDisplay.innerHTML = "0" + 0;

  hour = 0;
  second = 0;
  minute = 0;
});
