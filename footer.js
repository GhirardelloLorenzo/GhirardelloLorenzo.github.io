// JavaScript to slide up the footer when scrolled to the bottom of the page

window.addEventListener('scroll', function () {
  var footer = document.getElementById('footer');
  var scrollPosition = window.scrollY + window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;

  // Adjust the threshold as needed
  var threshold = 100;

  if (documentHeight - scrollPosition < threshold) {
      footer.style.transform = 'translateY(0)'; // Slide up to original position
  } else {
      footer.style.transform = 'translateY(100%)'; // Slide out of view
  }
});