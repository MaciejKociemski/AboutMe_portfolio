function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

function addScrollListener(link, targetSelector, instance = 0) {
  link.addEventListener("click", () => {
    scrollToElement(targetSelector, instance);
  });
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

addScrollListener(link1, ".header");
addScrollListener(link2, ".header", 1);
addScrollListener(link3, ".header",3);
addScrollListener(link4, ".header", 2);
addScrollListener(link4, ".header", 4);


function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}