let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  modal.style.display = "none";
  window.location.href = "index.html";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "./index.html";
  }
};
