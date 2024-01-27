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

addScrollListener(link1, ".header");
addScrollListener(link2, ".header", 1);
addScrollListener(link3, ".column");
