let up = document.querySelector(".up");

// show and hidde the btn button
window.onscroll = () =>
  this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");

// Scroll Up on Click
up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
