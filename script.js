document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  const links = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    let fromTop = window.scrollY + 100;
    links.forEach(link => {
      let section = document.querySelector(link.getAttribute("href"));
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});