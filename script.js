


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
const link6 = document.getElementById("link6");

addScrollListener(link1, ".header");
addScrollListener(link2, ".header", 1);
addScrollListener(link3, ".header", 4);
addScrollListener(link4, ".header", 2);
addScrollListener(link5, ".header", 3);
addScrollListener(link6, ".header", 5);

function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const emailForm = document.getElementById("emailForm");
//   const emailInput = document.getElementById("emailInput");

//   emailForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     if (validateEmail(emailInput.value)) {
//       alert("Form submitted successfully!");
//       // Tutaj możesz dodać kod obsługi poprawnego formularza
//     } else {
//       alert("Invalid email address. Please enter a valid email.");
//     }
//   });

//   function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");

  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateEmail(emailInput.value)) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        //   width: "300",
        toast: true,
        position: "top-end",
        timer: 1300,

        text: "Your email is valid.",
      });
    } else {
      Swal.fire({
        toast: true,
        icon: "error",
        width: "300",
        text: "Please enter a valid email address.",
        position: "top-end",
        timer: 1500,
      });
    }
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const darkmode = new Darkmode();

  document
    .getElementById("darkmode-toggle")
    .addEventListener("click", function () {
      darkmode.toggle();

      const isDarkMode = document.body.classList.contains("dark-mode");
      document.body.classList.toggle("dark-mode", !isDarkMode);
    });
});

