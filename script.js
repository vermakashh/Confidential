const video = document.getElementById("scrollVideo");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // How far the user has scrolled
  const videoHeight = document.querySelector(".video-container").offsetHeight;

  // Factor to reduce the speed of the animation (higher = slower)
  const speedFactor = 1; // Adjust this value to control the speed

  // Scale the scroll percentage by the speed factor
  const scrollPercent = Math.min((scrollTop / videoHeight) * speedFactor, 1);

  // Control video playback based on adjusted scroll percentage
  if (video.readyState >= 3) {
    video.currentTime = video.duration * scrollPercent;
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
