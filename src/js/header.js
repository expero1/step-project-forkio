'use strict';

const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar__menu__list');
const toggle = document.querySelectorAll('.navbar__button__burger-toggle');

function showMenu() {
    toggle.forEach(elem => {
        if(elem.style.opacity === '1') {
            elem.style.opacity = '0';
            navbar.classList.remove('active');
        } else {
            elem.style.opacity = '1';
            navbar.classList.add('active');
        }
    })
}

window.addEventListener("click", (e) => {
    let trg = e.target;
    if (burger.contains(trg)) {
        showMenu();
    } else if (!navbar.contains(trg)) {
        navbar.classList.remove('active');
        toggle[1].style.opacity = '0';
        toggle[0].style.opacity = '1';
    }
})