"use strict";
document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('.menu-icon');
    let dropdownList = document.querySelector('.dropdown-list');

    menuIcon.addEventListener('click', function () {
        dropdownList.classList.toggle('visible');
    });
});
