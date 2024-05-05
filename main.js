document.addEventListener('DOMContentLoaded', function() {
  var slideText = document.getElementById('slideText');
  
  // Function to slide text onto the screen
  function slideInText() {
    slideText.style.opacity = 1;
    slideText.style.transform = 'translateY(0)'; // Move text to its original position
  }

  // Call the function after a delay
  setTimeout(slideInText, 1000); // Change 1000 to the desired delay in milliseconds
});
