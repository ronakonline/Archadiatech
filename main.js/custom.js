// Navbar Scroll Effect
const navbar = document.querySelector('.bottam-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu Bar Toggle
$('#menu_open').on('click', function(){
    $('body').addClass('menuoverlab');
});

$('#menu_close').on('click', function(){
    $('body').removeClass('menuoverlab');
});

// Owl Carousel Initialization
$('.project-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 }
    }
});

$('.testimonial-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 2 }
    }
});

$('.blog-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 }
    }
});

$('.partner-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: { items: 2 },
        600: { items: 3 },
        1200: { items: 5 }
    }
});

// Back to Top Button
$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
});

// Dynamic Active Navigation Link Based on Scroll
const sections = document.querySelectorAll('section'); // Assuming each section has a <section> tag
const navLinks = document.querySelectorAll('.menu-bar .nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Offset for header height
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Close Mobile Menu on Link Click (Optional for better UX)
$('.menu-bar .nav-link').on('click', function() {
    if ($(window).width() <= 992) {
        $('body').removeClass('menuoverlab');
    }
});
