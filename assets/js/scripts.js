'use strict'


const hamburgerMenu = document.querySelector('#hamburger')
const nav = document.querySelector('nav')
const hamburgerMenuContent = document.querySelector('#hamburger-menu-content')
const mobileMenu = document.querySelector('#mobile-menu')

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-hamburger-active')
    hamburgerMenuContent.classList.toggle('hamburger-menu-content-active')
    
    setTimeout(() => {
        mobileMenu.classList.toggle('mobile-menu-active')
    }, 600)
})
