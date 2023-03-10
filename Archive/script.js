window.addEventListener("hashchange", navigateToPage);

function navigateToPage() {
  var content = document.getElementById("content");
  var page = window.location.hash.substr(1);

  switch(page) {
    case "one":
      fetch("./modules/one/one.html")
        .then(response => response.text())
        .then(data => {
          content.innerHTML = data;
        });
      break;
    case "two":
      fetch("two.html")
        .then(response => response.text())
        .then(data => {
          content.innerHTML = data;
        });
      break;
    case "three":
      fetch("three.html")
        .then(response => response.text())
        .then(data => {
          content.innerHTML = data;
        });
      break;
    default:
      content.innerHTML = "404 - Page not found";
  }
}





function toggleDrawer() {
  var drawer = document.getElementById("drawer");
  drawer.classList.toggle("closed");
}