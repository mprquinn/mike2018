const banner = document.querySelector(".landing__parallax-wrapper");
const bannerDims = {
  w: banner.getBoundingClientRect().width,
  h: banner.getBoundingClientRect().height
};
const foreground = document.querySelector(".landing__foreground");
const midground = document.querySelector(".landing__midground");
const limit = {
  x: 30,
  y: 12
};

banner.addEventListener("mousemove", e => {
  const mouse = {
    x: e.pageX,
    y: e.pageY
  };
  const clamped = {
    x: mouse.x / bannerDims.w * limit.x - limit.x / 2,
    y: mouse.y / bannerDims.h * limit.y - limit.y / 2
  };

  document
    .querySelector(".landing")
    .style.setProperty("--move-x", clamped.x + "px");
  document
    .querySelector(".landing")
    .style.setProperty("--move-y", clamped.y + "px");
});

function sizeImages() {
  const bannerWrapDims = document.querySelector(".landing").getBoundingClientRect();
  console.log(bannerWrapDims);
  foreground.style.width = window.innerWidth + 50+ 'px';
  midground.style.width = window.innerWidth +50+ 'px';
}

window.onload = () => {
  // sizeImages();
};

window.onresize = () => {
  // sizeImages();
}
