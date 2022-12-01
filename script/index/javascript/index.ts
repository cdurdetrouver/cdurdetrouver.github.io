let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let moutains_behind = document.getElementById("mountains_behind");
let moutains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let header = document.querySelector("header");
let value = 0;

window.addEventListener("scroll", function () {
  value = window.scrollY;
  moutains_front.style.top = -value + "px";
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 0.5 + "px";
  moutains_behind.style.top = value * 0.5 + "px";
  moutains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 2.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});
