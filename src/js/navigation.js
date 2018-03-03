const nav = document.querySelector("nav");
const body = document.querySelector("body");
const firstSection = document.querySelector(".landing");

function pinNav() {
  const topOff = firstSection.getBoundingClientRect().top;
  console.log(topOff);
  if (topOff <= 0) {
    console.log('passed');
    nav.classList.add("navigation--pinned");
    body.classList.add("body--padded");
  } else {
    nav.classList.remove("navigation--pinned");
    body.classList.remove("body--padded");
  }
}

document.addEventListener("scroll", () => {
  console.log("test");
  pinNav();
});