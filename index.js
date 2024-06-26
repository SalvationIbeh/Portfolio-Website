document.addEventListener('DOMContentLoaded', () => {
  // Add animation to navbar links on hover
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.classList.add('animate__animated', 'animate__bounce');
    });
    link.addEventListener('mouseleave', () => {
      link.classList.remove('animate__animated', 'animate__bounce');
    });
  });

  // Initialize Bootstrap carousel with custom settings
  const carousel = new bootstrap.Carousel(document.querySelector('#projectCarousel'), {
    interval: 3000,
    wrap: true
  });

  // Add animations to sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('animate__animated', 'animate__fadeIn');
  });

  // Add smooth scrolling for anchor links with offset
  const scrollOffset = document.querySelector('.navbar').offsetHeight;
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - scrollOffset,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add active class to navbar links on scroll with offset
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - scrollOffset;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const sectionId = section.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (activeLink) {
          navLinks.forEach(link => link.classList.remove('active'));
          activeLink.classList.add('active');
        }
      }
    });
  });
});

// Navbar link animation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Example of ES6+ feature usage
  const updateYear = () => {
    const year = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${year} Salvation Ibeh`;
  };
  updateYear();
});
