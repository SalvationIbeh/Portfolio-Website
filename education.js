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

  // Navbar Animation
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });

  // Scroll Animation for Sections
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 1s ease-out';
    observer.observe(section);
  });

  // Section Animation
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.boxShadow = '0 10px 20px rgba(0, 128, 128, 0.2)';
      section.style.transform = 'translateY(-10px)';
    });
    section.addEventListener('mouseleave', () => {
      section.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      section.style.transform = 'translateY(0)';
    });
  });
});

// Add active class to navbar links on scroll with offset
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link'); // Declare navLinks here

  sections.forEach(section => {
    const sectionTop = section.offsetTop - window.pageYOffset;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        navLinks.forEach(link => link.classList.remove('active')); // Use the fixed navLinks here
        activeLink.classList.add('active');
      }
    }
  });
});
