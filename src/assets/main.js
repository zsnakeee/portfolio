import './style.css'
import Alpine from 'alpinejs';
import 'iconify-icon';
import {webScripts} from './web-scripts.js';
import {webProjects} from './web-projects.js';
import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

window.webScripts = webScripts;
window.webProjects = webProjects;

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

let atTopOfPage = true;
window.addEventListener("scroll", () => {
    atTopOfPage = window.scrollY === 0;
    document.querySelector("nav").classList.toggle("scrolled", !atTopOfPage);
});

window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-c',
            prevEl: '.swiper-button-prev-c',
        },
    });
});


window.scrollToSection = (section) => {
    document.querySelector(section).scrollIntoView({behavior: 'smooth'});
};