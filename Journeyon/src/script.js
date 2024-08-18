document.addEventListener('DOMContentLoaded', () => {
    // GSAP animation for header appearing effect
    gsap.to('.header', { 
        duration: 1.5, 
        opacity: 1, 
        y: 0, 
        ease: 'power3.out'
    });

    // GSAP animation for hero section appearing effect
    gsap.to('.hero', { 
        duration: 2, 
        opacity: 1, 
        ease: 'power3.out',
        delay: 0.5
    });

    // Locomotive Scroll initialization
    const scroll = new LocomotiveScroll({
        el: document.querySelector('body'),
        smooth: true
    });
});



window.addEventListener('scroll', function() {
    const section = document.querySelector('.captured-moment');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.querySelector('.content-wrapper').classList.add('active');
    }
});



// Optional: JavaScript for form validation or interactivity
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
});
