const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const backdrop = document.querySelector('[backdrop]');
const hamburger = document.querySelector(".hamburger");

const bodyScrollLock = require('body-scroll-lock');

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    backdrop.classList.add('is-hidden');
    bodyScrollLock.enableBodyScroll(document.body);
    hamburger.classList.remove("is-active");

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}