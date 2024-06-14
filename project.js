document.addEventListener('DOMContentLoaded', function() {
    // Navbar Animation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });


    // Projects hover effect
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.boxShadow = '0 10px 20px rgba(0, 128, 128, 0.3)';
        });
        project.addEventListener('mouseleave', () => {
            project.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
