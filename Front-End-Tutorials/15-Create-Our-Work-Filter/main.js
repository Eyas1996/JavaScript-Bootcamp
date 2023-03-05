let switcherList = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherList.forEach((li) => {
  li.addEventListener("click", removeClass);
  li.addEventListener("click", removeImg);
});

// Remove Active Class From All Elements and add it to the Current Element.
function removeClass() {
  switcherList.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    // console.log(switcherList);
  });
}

function removeImg() {
  imgs.forEach((img) => {
    img.style.display = "none";
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    })
  });
}
