const dv_desktopMenu = document.querySelector('.desktop-menu');
const li_navbarEmail = document.querySelector('.navbar-email');
const dv_mobileMenu = document.querySelector('.mobile-menu');
const btn_menuMobile = document.querySelector('#btn_menuMobile');


li_navbarEmail.addEventListener('click', fnctn__desktopMenu__toggleInactive);
btn_menuMobile.addEventListener('click', fnctn__menuMobile__toggleInactive);


function fnctn__desktopMenu__toggleInactive(){
    console.log('fnctn__desktopMenu__toggleInactive');
    dv_desktopMenu.classList.toggle('inactive');
}

function fnctn__menuMobile__toggleInactive() {
    console.log('fnctn__menuMobile__toggleInactive');
    dv_mobileMenu.classList.toggle('inactive');
}