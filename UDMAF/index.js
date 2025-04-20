const faders = document.querySelectorAll('.fade-in-section'); //Gets elements with fade-in-section class
const observer = new IntersectionObserver((entries, observer) => { //detects when element enters or leaves the viewport
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  }); //for each entry it checks if the element is currently visible on viewport, and if so, adds class "visible" to element and stops watching the element
}, {
  threshold: 0.3 //30% of element must be visible
});
faders.forEach(fader => observer.observe(fader)); //start observing each class