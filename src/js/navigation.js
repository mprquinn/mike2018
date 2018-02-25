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

function navColor() {
  const defaultColor = "#000000";
  const sections = [
    {
      name: "landing",
      offset: document.querySelector(".landing").getBoundingClientRect().top,
      height: document.querySelector(".landing").getBoundingClientRect().height,
      color: "#ffffff"
    },
    {
      name: "projects",
      offset: document
        .querySelector(".projects .section__title")
        .getBoundingClientRect().top,
      height: document.querySelector(".projects").getBoundingClientRect()
        .height,
      color: "#ffffff"
    }
  ];
  document.addEventListener("scroll", () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    sections.forEach(section => {
      if (top >= section.offset && top < section.height + section.offset) {
        document.documentElement.style.setProperty(`--navColor`, section.color);
      } else {
        document.documentElement.style.setProperty(`--navColor`, defaultColor);
      }
    });
  });
}

window.addEventListener("load", () => {
  // navColor();
});

document.addEventListener("scroll", () => {
  pinNav();
});
