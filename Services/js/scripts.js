document.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('[data-sr-id="1"]', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200
  });
  ScrollReveal().reveal('[data-sr-id="2"]', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400
  });
  ScrollReveal().reveal('[data-sr-id="3"]', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 600
  });
});