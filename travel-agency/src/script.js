// GSAP Animations for Header and Hero Section
gsap.from(".header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
});

gsap.from(".logo", {
    duration: 1.5,
    opacity: 0,
    x: -100,
    ease: "power3.out",
    delay: 0.5,
});

gsap.from(".nav ul li", {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: "power3.out",
    delay: 0.8,
    stagger: 0.2,
});

gsap.from(".search-bar", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power3.out",
    delay: 1.2,
});

gsap.from(".cta .btn-book-now", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: "power3.out",
    delay: 1.5,
});


gsap.from(".hero-content h1", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power3.out",
    delay: 0.5,
});

gsap.from(".hero-content p", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power3.out",
    delay: 0.8,
});

gsap.from(".hero-content .btn-explore", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power3.out",
    delay: 1.1,
});

// Parallax Scrolling Effect with Two Background Images
gsap.to(".parallax-bg.bg1", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

gsap.to(".parallax-bg.bg2", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

// GSAP Animations for About Us Section
gsap.from(".about-us-image img", {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
    }
});

gsap.from(".about-us-text", {
    duration: 1,
    opacity: 0,
    y: 100,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const tourCards = document.querySelectorAll('.tour-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            tourCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;
    const intervalTime = 2000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
        document.querySelector('.testimonial-slider').style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    showSlide(currentIndex);
    setInterval(nextSlide, intervalTime);
});

document.addEventListener("DOMContentLoaded", function() {
    const typewriterText = "Ready to explore the world? Book your dream trip today!";
    const typewriterSpeed = 100;
    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            document.getElementById("cta-typewriter").innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, typewriterSpeed);
        } else {
            // After the text is fully typed, wait for 5 seconds and then reset
            setTimeout(function() {
                document.getElementById("cta-typewriter").innerHTML = ""; // Clear the text
                i = 0; // Reset the counter
                typeWriter(); // Restart the typewriter effect
            }, 5000);
        }
    }

    typeWriter(); // Start the typewriter effect
});



window.addEventListener('scroll', function() {
    var map = document.getElementById('map');
    var mapPosition = map.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (mapPosition < screenPosition) {
        map.style.animation = 'zoomIn 0.5s ease forwards';
    }
});

 window.addEventListener('load', () => {
    document.querySelector('.footer').classList.add('fade-in');
  });