'use strict'

/*
 * Avoided using jQuery
 */
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
    let sideNav = document.querySelector('.sidenav-container');
    let sideBtn = document.querySelector('.sidenav-trigger');
    let sideOverlay = document.querySelector('.sidenav-overlay');
    let sideCloseBtn = document.querySelector('.sidenav-close');

    /*
     * Check is element is in view
     * Should probably change this since it adds load to the website
     * due to being constantly checking for elements
     */
    function isScrolledIntoView(e) {
        let rect = e.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
        return elemTop < window.innerHeight && elemBottom >= 5;
    }

    /*
     * Fires up the animation checking function.
     *
     */
    function checkAni() {
        const elemAnimUp = document.querySelectorAll('.elem-anim-up');

        for (let i = 0; i < elemAnimUp.length; i++) {
            let currentChild = elemAnimUp[i];
            if (isScrolledIntoView(currentChild)) {
                currentChild.classList.add('anim');
            }
        }
    }

    /*
     * This is where the window event listener it's added.
     * Everytime the user scrolls it will check if the element it's on the screen
     * I know, it's not the best way to do this, will change when I have more time.
     */
    window.addEventListener('scroll', function () {
        checkAni();
    });
    checkAni();

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
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: false,
        loop: false,
        pagination: {
            el: '.project-pagination',
            type: 'bullets',
            bulletElement: 'button',
            clickable: true,
        }
    });
})