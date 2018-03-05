function sectionScroll() {
  const sections = document.querySelectorAll("section");

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.75 // 75% visible
  // };

  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (entry.intersectionRatio > 0) {
  //       const classSlug = `${entry.target.className}--in-view`;
  //       entry.target.classList.add(classSlug);
  //       // if you want to stop watching, you can
  //       observer.unobserve(entry.target);
  //     }
  //   }, options);
  // });

  // sections.forEach(section => {
  //   observer.observe(section);
  // });
  const wH = window.innerHeight;
  sections.forEach(section => {
    if (section.getBoundingClientRect().top <= wH / 1.3) {
      if (section.className !== "landing landing--loaded" && !section.className.includes("--in-view")) {
        const classSlug = `${section.className}--in-view`;
        section.classList.add(classSlug);
      }
    }
  });
}

window.addEventListener("scroll", () => {
  sectionScroll();
});

