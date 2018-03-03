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
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75 // 25% visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        
        const classSlug = `${entry.target.className}--in-view`;
        entry.target.classList.add(classSlug);
        // if you want to stop watching, you can 
        observer.unobserve(entry.target);
      }
    }, options) 
  });
  
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

navColor();

document.addEventListener("scroll", () => {
  // pinNav();
});
