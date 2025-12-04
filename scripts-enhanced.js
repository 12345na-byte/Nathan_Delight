// const sections = document.querySelectorAll('.section-box');
// function checkSections() {
//   const triggerBottom = window.innerHeight * 0.9; // Trigger animation when 90% visible

//   sections.forEach(section => {
//     const sectionTop = section.getBoundingClientRect().top;

//     if (sectionTop < triggerBottom) {
//       section.classList.add('appear');  // Add class to trigger CSS animation
//     } else {
//       section.classList.remove('appear'); // Remove if section out of view (optional)
//     }
//   });
// }

// // Smooth scroll for nav links with href starting with #
// const navLinks = document.querySelectorAll('nav a[href^="#"]');

// navLinks.forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetID = this.getAttribute('href');
//     const targetSection = document.querySelector(targetID);
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Run checkSections on scroll and on page load
// window.addEventListener('scroll', checkSections);
// window.addEventListener('load', checkSections);
