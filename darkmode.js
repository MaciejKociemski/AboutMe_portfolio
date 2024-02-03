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
