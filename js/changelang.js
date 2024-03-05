function changeLanguage(language) {
  fetch("./texts.json")
    .then((response) => response.json())
    .then((data) => {
      const texts = data[language];
      document.getElementById("link1").textContent = texts.features;
      document.getElementById("link2").textContent = texts.portfolio;
      document.getElementById("link3").textContent = texts.pricing;
      document.getElementById("link4").textContent = texts.feedback;
      document.getElementById("link5").textContent = texts.ideas;
      document.getElementById("link6").textContent = texts.inspire;
      document.querySelector("h4").textContent = texts.craft_your_website;
      document.querySelector("h1").textContent = texts.aspiring_junior;
      document.querySelector("p").innerHTML = texts.site_description;
      document.querySelector(".header").textContent = texts.features_header;
      document.querySelectorAll(".features .card h4")[0].textContent =
        texts.free_tutorials;
      document.querySelectorAll(".features .card p")[0].textContent =
        texts.free_tutorials_description;
      document.querySelectorAll(".features .card h4")[1].textContent =
        texts.fix_your_bugs;
      document.querySelectorAll(".features .card p")[1].textContent =
        texts.fix_your_bugs_description;
      document.querySelectorAll(".features .card h4")[2].textContent =
        texts.history;
      document.querySelectorAll(".features .card p")[2].textContent =
        texts.history_description;
      document.querySelectorAll(".features .card h4")[3].textContent =
        texts.cooperation;
      document.querySelectorAll(".features .card p")[3].innerHTML =
        texts.cooperation_description +
        ' <a href="./cv_about/index.html">' +
        texts.join_now +
        '<i class="ri-arrow-right-line"></i></a>';
      document.querySelectorAll(".skills .left .info h3")[0].textContent =
        texts.skills_title;
      document.querySelectorAll(".skills .left .info p ")[0].textContent =
          texts.skills_description;
        
    })
    .catch((error) => console.error("Error fetching texts:", error));
}
