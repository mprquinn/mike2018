const nav = document.querySelector("nav");
const navList = document.querySelector(".navigation ul");
const navTop = navList.getBoundingClientRect().top;
const navHeight = nav.getBoundingClientRect().height;

function pinNav() {
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const navPinclassName = "navigation--pinned";
  if (top >= navHeight) {
    document.documentElement.style.setProperty("--navPad", `${navHeight}px`);
    nav.classList.add(navPinclassName);
  } else {
    nav.classList.remove(navPinclassName);
    document.documentElement.style.setProperty("--navPad", "0px");
  }
}

document.addEventListener("scroll", () => {
  pinNav();
});
