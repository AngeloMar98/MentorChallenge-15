"use strict";

const days = document.querySelector(".counter-days").querySelector("span");
const hours = document.querySelector(".counter-hours").querySelector("span");
const minutes = document
  .querySelector(".counter-minutes")
  .querySelector("span");
const seconds = document
  .querySelector(".counter-seconds")
  .querySelector("span");

let countdown = 1_209_600;

let d = String(Math.floor(countdown / 86400)).padStart(2, "0");
let h = String(Math.floor((countdown % 86400) / 3600)).padStart(2, "0");
let m = String(Math.floor(((countdown % 86400) % 3600) / 60)).padStart(2, "0");
let s = String(Math.floor((((countdown % 86400) % 3600) % 60) % 60)).padStart(
  2,
  "0"
);

const updateClock = function () {
  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
  if (countdown === 0) {
    clearInterval(interval);
    document.querySelector(".main").querySelector("p").textContent =
      "PATIENT OR CHEATER?";
  }
};

updateClock();

const interval = setInterval(() => {
  countdown--;
  d = String(Math.floor(countdown / 86400)).padStart(2, "0");
  h = String(Math.floor((countdown % 86400) / 3600)).padStart(2, "0");
  m = String(Math.floor(((countdown % 86400) % 3600) / 60)).padStart(2, "0");
  s = String(Math.floor((((countdown % 86400) % 3600) % 60) % 60)).padStart(
    2,
    "0"
  );
  updateClock();
}, 1000);
