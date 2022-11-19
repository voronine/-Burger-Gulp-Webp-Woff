console.log('hello')

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

let search = document.querySelector('._icon-search');
search.addEventListener("click", function () {
    document.querySelector(".header__search__menu").classList.toggle("active_header__search__menu");

});


let catalog_li = document.querySelector('._catalog__link');
catalog_li.addEventListener("click", function () {
    document.querySelector(".menu-2-header__body").classList.toggle("active");
    document.querySelector(".container-menu-2").classList.toggle("active-container-menu-2");
});


window.onclick = function (event) {

    if (!event.target.matches('.header-menu')) {
        let dropdowns = document.getElementsByClassName("active_header__search__menu");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('header__search__menu')) {
                openDropdown.classList.remove('active_header__search__menu');
            }
        }
    }

    if (!event.target.matches('.menu-2')) {

        let dropdowns = document.getElementsByClassName("menu-2-header__body");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('menu-2-header__body')) {
                openDropdown.classList.remove('active');
            }
        }
        let dropdowns1 = document.getElementsByClassName("active-container-menu-2");

        for (let k = 0; k < dropdowns1.length; k++) {
            let openDropdown1 = dropdowns1[k];
            if (openDropdown1.classList.contains('container-menu-2')) {
                openDropdown1.classList.remove('active-container-menu-2');
            }
        }
    }
}

let age_li = document.querySelector('._age-li');
age_li.addEventListener("click", function () {
    document.querySelector(".menu-3-header__body").classList.toggle("active_menu-3-header__body");
});

let burger = document.querySelector('.header__burger');
burger.addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector('.menu-1-header__body').classList.toggle('active');
    document.querySelector('.header__logo').classList.toggle('active');
    document.querySelector('.header__block').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__body').classList.toggle('active');
    document.querySelector('.menu-2-header__body').classList.toggle('active-media');
    document.querySelector('.back').classList.toggle('active')
});

let back = document.querySelector('.back');
back.addEventListener("click", function () {
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector('.menu-1-header__body').classList.toggle('active');
    document.querySelector('.header__logo').classList.toggle('active');
    document.querySelector('.header__block').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.header__body').classList.toggle('active');
    document.querySelector('.menu-2-header__body').classList.toggle('active-media');
    document.querySelector('.back').classList.toggle('active');

});


let selectHeader1 = document.querySelector('.select1');
selectHeader1.addEventListener("click", function () {
    document.querySelector(".select__header").classList.toggle("active");
});
let selectHeader2 = document.querySelector('.select2');
selectHeader2.addEventListener("click", function () {
    document.querySelector(".select__header2").classList.toggle("active2");
});



let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });
    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select1'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
select();
let select2 = function () {
    let selectHeader = document.querySelectorAll('.select__header2');
    let selectItem = document.querySelectorAll('.select__item2');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });
    function selectToggle() {
        this.parentElement.classList.toggle('is-active2');
    }
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select2'),
            currentText = select.querySelector('.select__current2');
        currentText.innerText = text;
        select.classList.remove('is-active2');
    }
};
select2();