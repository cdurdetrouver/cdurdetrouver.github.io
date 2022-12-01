var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var moutains_behind = document.getElementById("mountains_behind");
var moutains_front = document.getElementById("mountains_front");
var text = document.getElementById("text");
var btn = document.getElementById("btn");
var header = document.querySelector("header");
var value = 0;
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
//# sourceMappingURL=index.js.map