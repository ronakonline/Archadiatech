// navbar scroll js


const navbar = document.querySelector('.bottam-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// menu bar toggle bar

$(document).ready(function () {
    function checkViewportWidth() {
        if ($(window).width() <= 1199) {
            // Code to run when viewport width is 992px or less
            $("#nav1").click(function () {
                $("#sub1").slideToggle("1000");
            });
            $("#nav2").click(function () {
                $("#sub2").slideToggle("1000");
            });
            $("#nav3").click(function () {
                $("#sub3").slideToggle("1000");
            });
            $("#nav4").click(function () {
                $("#sub4").slideToggle("1000");
            });
            $("#menu1").click(function () {
                $("#sum1").slideToggle("1000");
            });
            $("#menu2").click(function () {
                $("#sum2").slideToggle("1000");
            });
            $("#menu3").click(function () {
                $("#sum3").slideToggle("1000");
            });
            $("#menu4").click(function () {
                $("#sum4").slideToggle("1000");
            });
            $("#menu5").click(function () {
                $("#sum5").slideToggle("1000");
            });
            $("#menu6").click(function () {
                $("#sum6").slideToggle("1000");
            });

        }
    }

    // Check viewport width on page load
    checkViewportWidth();

    // Check viewport width on window resize
    $(window).resize(function () {
        checkViewportWidth();
    });
});

// var card = $(".main-image");


// $(document).on("mousemove",function(e) {  
//   var ax = -($(window).innerWidth()/2- e.pageX)/20;
//   var ay = ($(window).innerHeight()/2- e.pageY)/20;
//   card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
// });



// owl carousel link

$('.project-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})


$('.testimonial-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

$('.blog-section .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.partner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1200:{
            items:5
        }
    }
})


// back to top button

$(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
        $('.back-to-top').show();
    } else {
        $('.back-to-top').hide();
    }
});

$('.back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
