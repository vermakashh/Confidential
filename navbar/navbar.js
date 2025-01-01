function loadNavbar(navbarPlaceholderId, navbarPath) {
  // Load the navbar dynamically
  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(navbarPlaceholderId).innerHTML = data;

      // Re-initialize navbar JavaScript
      initializeNavbar();
    })
    .catch(error => console.error("Error loading navbar:", error));
}

function initializeNavbar() {
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector(".search-bar");

  if (searchIcon && searchBar) {
    searchIcon.addEventListener("click", () => {
      searchBar.classList.toggle("active");
      searchBar.focus(); // Focus on the input when it opens
    });
  } else {
    console.error("Navbar elements not found!");
  }
}
