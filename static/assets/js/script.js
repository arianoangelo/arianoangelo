'use strict'

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

    function isScrolledIntoView(e) {
        let rect = e.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
        return elemTop < window.innerHeight && elemBottom >= 5;
    }

    function checkAni() {
        const elemAnimUp = document.querySelectorAll('.elem-anim-up');

        for (let i = 0; i < elemAnimUp.length; i++) {
            let currentChild = elemAnimUp[i];
            if (isScrolledIntoView(currentChild)) {
                currentChild.classList.add('anim');
            }
        }
    }

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

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
})