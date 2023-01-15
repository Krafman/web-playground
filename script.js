function toggleDrawer() {
  var drawer = document.getElementById("drawer");
  drawer.classList.toggle("closed");
}

function navigateToPage(page) {
  var content = document.getElementById("content");
  switch(page) {
    case "one":
      fetch("modules/one/one.html")
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
  }
}