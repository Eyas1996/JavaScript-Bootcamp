let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // Remove All Class From All Elements
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active Class To the Element on click
    e.currentTarget.classList.add("active");
    // give display None to All Divs
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // link the Div Content with the tab by dataset.cont and give it display Block on Click
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});
