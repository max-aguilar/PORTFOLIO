// console.log('Texto de Prueba');


// let btn = document.getElementById("btn-hero");
// let el = document.getElementById("section-destination");

// btn.addEventListener('click', function () {
//     // preventDefault();
//     let rect = el.getBoundingClientRect();
//     console.log(rect);
//     let offset = rect.top - 100;
//     window.scrollTo({
//         top: offset,
//         behavior: "smooth"
//     });
// });







const hamburger = document.querySelector(".menu-hamburguesa");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

console.log(hamburger);
console.log(navbar);

function mobileMenu() {
    console.log('Diste click en el menu hamburguesa');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.add("active");
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.remove("active");
        navbar.classList.add("hidden");
    }
    
    console.log(navbar); 
}





const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.container-btn-card').style.display = 'flex';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.container-btn-card').style.display = 'none';
    });
});

/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

*/

// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// let slideInterval = setInterval(nextSlide, 3000);

// function nextSlide() {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// }

const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');

carousel.addEventListener('animationend', () => {
    carousel.style.animation = 'none';
    setTimeout(() => {
        carousel.style.animation = '';
    }, 20);
});


// document.getElementById("btn-hero").addEventListener("click", function() {
//     document.getElementById("acerca-de").scrollIntoView({
//         behavior: "smooth"
//     });
// });

// function redirect()
//     {
//     window.location.href="#acerca-de";
//     }


// const button = document.querySelector('#btn-hero');
// const section2 = document.querySelector('#acerca-de');

// button.addEventListener('click', function() {
//     section2.scrollIntoView({ behavior: 'smooth' });
// });





