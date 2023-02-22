'use strict';

const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar_menu_list');

window.addEventListener("click", (e) => {
    let trg = e.target;
    if (burger.contains(trg)) {
        showMenu();
    } else {
    if (!navbar.contains(trg) && navbar.classList.contains('active')) {
        burger.innerHTML = '<span>&#x2013;<br>&#x2014;<br>&#x2014;</span>';
        navbar.classList.remove('active');
        navbar.classList.add('inactive');
    }
    }
});

function showMenu() {
    if(burger.innerHTML === '<span style="font-size: 60px;">&times;</span>' || burger.innerHTML === '<span style="font-size: 60px;">×</span>') {
        burger.innerHTML = '<span>&#x2013;<br>&#x2014;<br>&#x2014;</span>';
        navbar.classList.remove('active');
        navbar.classList.add('inactive');
    } else {
        burger.innerHTML = '<span style="font-size: 60px;">&times;</span>';
        navbar.classList.remove('inactive');
        navbar.classList.add('active');
    }
}