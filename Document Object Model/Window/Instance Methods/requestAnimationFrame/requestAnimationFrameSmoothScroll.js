// EXAMPLE:
// Codepen: https://codepen.io/caleblopez/pen/VYwWPGP
function smoothScrollToTop() {
  const duration = 1000;
  const start = window.pageYOffset;
  const end = 0;
  const change = end - start;
  let startTime = null;

  function animateScroll(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + change * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }
  requestAnimationFrame(animateScroll);
}

document
  .querySelector(".back-to-top")
  .addEventListener("click", smoothScrollToTop);
