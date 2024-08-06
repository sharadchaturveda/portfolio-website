
// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! Thank you for reaching out.');
});
