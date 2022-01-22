let stars = document.querySelector(".stars");
let moon = document.querySelector(".moon");
let mountains3 = document.querySelector(".mountains3");
let mountains4 = document.querySelector(".mountains4");
let river = document.querySelector(".river");
let boat = document.querySelector(".boat");
let mountains7 = document.querySelector(".mountains7");
let para = document.querySelector(".images p");

window.addEventListener("scroll", () => {
  console.log(scrollY);
  stars.style.left = scrollY + "px";
  moon.style.top = scrollY * 2.5 + "px";
  mountains3.style.top = scrollY * 0.8 + "px";
  mountains4.style.top = scrollY * 0.4 + "px";
  river.style.top = scrollY * 0.4 + "px";
  boat.style.top = scrollY * 0.4 + "px";
  boat.style.left = scrollY * 1.3 + "px";
  para.style.fontSize = scrollY * 0.7 + "px";
  para.style.transform = `translateX(-${scrollY}px)`;
  let start = document.querySelector(".start");
  if (scrollY >= 73) {
    para.style.fontSize = "51px";
    para.style.transform = `translateX(-73px)`;
  }
  if (scrollY >= 140) {
    start.style.background = "linear-gradient(#07507a,#10001f)";
  } else {
    start.style.background = "linear-gradient(#200016,#10001f)";
  }
});
