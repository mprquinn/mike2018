function titleEffects() {
  // turn into array
  const titles = document.querySelector('.landing h1');
  charming(titles);
}

titleEffects();

window.addEventListener("load", () => {
  load();
})

function load() {
  // turn this into an array
  const sections = document.querySelector('.landing');
  // turn this into a foreach
  sections.classList.add('landing--loaded');
}