document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".search-bar");
  
    searchIcon.addEventListener("click", () => {
      searchBar.classList.toggle("active");
      searchBar.focus(); // Focus on the input when it opens
    });
  });