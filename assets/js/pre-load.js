document.addEventListener('DOMContentLoaded', function() {
  const preloaderVideo = document.getElementById('preloader-video');
  const preloader = document.getElementById('preloader');
  
  // When video ends, hide preloader and show content
  preloaderVideo.addEventListener('ended', function() {
      document.body.classList.add('loaded');
      
      // Optional: Remove preloader from DOM after animation
      setTimeout(() => {
          preloader.remove();
      }, 500); // Match this with CSS transition time
  });
  
  // Fallback: If video doesn't load or play, hide after 5 seconds
  setTimeout(function() {
      if (!document.body.classList.contains('loaded')) {
          document.body.classList.add('loaded');
          preloader.remove();
      }
  }, 7000); // Updated to 5 seconds as per the comment
});