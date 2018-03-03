function sectionScroll() {
  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75 // 75% visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        const classSlug = `${entry.target.className}--in-view`;
        entry.target.classList.add(classSlug);
        // if you want to stop watching, you can
        observer.unobserve(entry.target);
      }
    }, options);
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}

sectionScroll();
