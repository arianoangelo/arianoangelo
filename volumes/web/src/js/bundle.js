'use strict'

import Swiper, {Autoplay, Pagination} from 'swiper/swiper-bundle';
import {gsap, Power2} from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.config({
    nullTargetWarn: false, // para que não avise quando não encontra as classes.
});

gsap.registerPlugin(ScrollTrigger);
Swiper.use([Pagination, Autoplay])


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {

    /*
     * Anims
     */

    const animCustom = gsap.utils.toArray('.anim');
    const animate = gsap.utils.toArray('.animate');

    animCustom.forEach(custom => {
        gsap.to(custom, {
            scrollTrigger: {
                trigger: custom,
                onEnter: function () {
                    custom.classList.add('el-anim');
                },
            }
        })
    });

    animate.forEach(anim => {
        gsap.to(anim, {
            scrollTrigger: {
                trigger: anim,
                onEnter: function () {
                    gsap.to(anim, {autoAlpha: 1, y: 0, x: 0, ease: Power2.easeInOut, duration: .8, overwrite: true});
                },
            }
        })
    });

    let sideNav = document.querySelector('.sidenav');
    let sideBtn = document.querySelector('.header__button-container');
    let sideOverlay = document.querySelector('.sidenav__overlay');
    let sideCloseBtn = document.querySelector('.sidenav__close');

    sideBtn.addEventListener('click', function () {
        sideNav.classList.add('side-open');
        sideOverlay.classList.remove('sidenav-overlay-hide');
    });

    sideOverlay.addEventListener('click', function () {
        sideNav.classList.remove('side-open');
        sideOverlay.classList.add('sidenav-overlay-hide');
    });

    sideCloseBtn.addEventListener('click', function () {
        sideNav.classList.remove('side-open');
        sideOverlay.classList.add('sidenav-overlay-hide');
    })

    /* Swiper */

    var swiperProject = new Swiper('.swiper-project', {
        speed: 800,
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        pagination: {
            el: '.project-detail__pagination',
            type: 'bullets',
            bulletElement: 'button',
            clickable: true,
        }
    });
})