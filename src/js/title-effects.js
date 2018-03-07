function titleEffects() {
  // first one has a different class
  const title = document.querySelector('.landing h1');
  charming(title);

  const otherTitles = document.querySelectorAll(".section__title");
  otherTitles.forEach(title => {
    charming(title);
  });
}

titleEffects();

window.addEventListener("load", () => {
  // load();
})

function load() {
  // use intersection observer
  // turn this into an array
  const sections = document.querySelector('.landing');
  // turn this into a foreach
  sections.classList.add('landing--loaded');
}