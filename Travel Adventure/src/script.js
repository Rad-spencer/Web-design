// Toggle the navbar menu on mobile
// const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');


// popular card 
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let activeIndex = 0;

//testimonial
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;


// hamburger.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// Sticky Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "20px";
    }
});


//search filter

$(document).ready(function() {
    function fetchSuggestions(input, elementId) {
        $.ajax({
            url: `https://api.teleport.org/api/cities/?search=${input}`,
            method: 'GET',
            success: function(data) {
                let suggestions = data._embedded['city:search-results'].map(city => city.matching_full_name);
                $(`#${elementId}`).empty();
                suggestions.forEach(function(suggestion) {
                    $(`#${elementId}`).append(`<li>${suggestion}</li>`);
                });
            }
        });
    }

    $('#from-destination').on('input', function() {
        let input = $(this).val();
        if (input.length > 2) {
            fetchSuggestions(input, 'from-suggestions');
        } else {
            $('#from-suggestions').empty();
        }
    });

    $('#to-destination').on('input', function() {
        let input = $(this).val();
        if (input.length > 2) {
            fetchSuggestions(input, 'to-suggestions');
        } else {
            $('#to-suggestions').empty();
        }
    });

    $('#from-suggestions, #to-suggestions').on('click', 'li', function() {
        $(this).closest('.input-group').find('input').val($(this).text());
        $(this).parent().empty();
    });
});



// popular card 


const updateCarousel = () => {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next', 'hidden');
        
        if (index === activeIndex) {
            item.classList.add('active');
        } else if (index === (activeIndex - 1 + items.length) % items.length) {
            item.classList.add('prev');
        } else if (index === (activeIndex + 1) % items.length) {
            item.classList.add('next');
        } else {
            item.classList.add('hidden');
        }
    });
};

prevButton.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % items.length;
    updateCarousel();
});

updateCarousel();



//Testimonials


function showTestimonial(index) {
    const offset = -index * 100;
    document.querySelector('.testimonial-slider').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showTestimonial(index);
    });
});

setInterval(autoSlide, 3000);

showTestimonial(currentIndex);



//footer section

// GSAP animations for footer elements
gsap.from(".footer-links ul li", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".gallery-grid a img", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out"
});


gsap.from(".social-media a", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
    delay: 1.5,
    ease: "power2.out"
});


