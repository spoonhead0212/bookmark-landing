'use strict';

const hamburgerMenu = document.querySelector('.hamburger');
const MenuNav = document.querySelector('.navigation');
const NavContent = document.querySelector('.mob');
const deskLogo = document.querySelector('#desk-logo');

hamburgerMenu.addEventListener('click', function() {
    MenuNav.classList.add('nav-show')
    NavContent.classList.add('nav-display')
    deskLogo.classList.add('desk')
    this.classList.add('desk')
})

document.querySelector('#cancel').addEventListener('click', function() {
    MenuNav.classList.remove('nav-show')
    NavContent.classList.remove('nav-display')
    deskLogo.classList.remove('desk')
    hamburgerMenu.classList.remove('desk')
})
// ------------------------


const tabs = document.querySelectorAll('.tab-btn')
const tab_box = document.querySelectorAll('.wrap-cont');

for(const tab of tabs) {
    let value = tab.dataset.key
    tab.addEventListener('click', function() {
        if (value === 'simple') {
            tab_box[0].classList.add('active')
            tab_box[1].classList.remove('active')
            tab_box[2].classList.remove('active')
        } else if (value === 'speedy'){
            tab_box[1].classList.add('active')
            tab_box[0].classList.remove('active')
            tab_box[2].classList.remove('active')
        } else if (value === 'easy'){
            tab_box[2].classList.add('active')
            tab_box[1].classList.remove('active')
            tab_box[0].classList.remove
        }
    })
    }

    const accordion_top = document.querySelectorAll('.accordion-top')
    const accordion_bottom = document.querySelectorAll('.accordion-bottom')
    // const accord_top = document.querySelectorAll('.accord-head')
    const rotate_arrow = document.querySelectorAll('.arrow')
    for(const each_accordion of accordion_top) {
        let value = each_accordion.dataset.key;
        each_accordion.addEventListener('click', function(){
            if (value === 'first-accord') {
                accordion_bottom[0].classList.toggle('activated')
                rotate_arrow[0].classList.toggle('rotate')
            } else if (value === 'second-accord'){
                accordion_bottom[1].classList.toggle('activated')
                rotate_arrow[1].classList.toggle('rotate')
            } else if (value === 'third-accord'){
                accordion_bottom[2].classList.toggle('activated')
                rotate_arrow[2].classList.toggle('rotate')
            } else if (value === 'fourth-accord'){
                accordion_bottom[3].classList.toggle('activated')
                rotate_arrow[3].classList.toggle('rotate')
            }
        })
    }

    // rotate arrow
    
    