// add animation and white back ground to the nav
const body = document.querySelector("body");
const nav = document.querySelector("nav");

body.onscroll = logScroll;

function logScroll() {
  let yScroll = window.scrollY;
  if (yScroll > 100) {
    nav.classList.add("white-bg");
    nav.classList.add("animate-from-top");
  } else {
    nav.classList.remove("white-bg");
    nav.classList.remove("animate-from-top");
  }
}
// full page photo descreption
let photo = document.querySelector(".photo");
// add close functionality to the button
let close = document
  .querySelector(".photo .btn")
  .addEventListener("click", () => {
    photo.classList.remove("d-grid");
  });
let figures = document.querySelectorAll(".gallary figure");

function displayClickedPhoto(e) {
  // display the photo section and change the content within it
  photo.classList.add("d-grid");
  let getSrc = e.path[0].src;
  let getAlt = e.path[0].alt;
  document.querySelector(".photo figure img").src = getSrc;
  document.querySelector(".photo figure img").alt = getAlt;
  document.querySelector(".photo figure figcaption").innerHTML = getAlt;
}
// add event listener to every fighre
for (let figure = 0; figure < figures.length; figure++) {
  figures[figure].addEventListener("click", displayClickedPhoto);
}
