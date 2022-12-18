const dv_desktopMenu = document.querySelector('.desktop-menu');
const li_navbarEmail = document.querySelector('.navbar-email');

const dv_mobileMenu = document.querySelector('.mobile-menu');
const btn_menuMobile = document.querySelector('#btn_menuMobile');

const sd_productDetail = document.querySelector('.product-detail');
const li_navbarShoppingCart = document.querySelector('.navbar-shopping-cart');



li_navbarEmail.addEventListener('click', fnctn__desktopMenu__toggleInactive);
btn_menuMobile.addEventListener('click', fnctn__menuMobile__toggleInactive);
li_navbarShoppingCart.addEventListener('click', fnctn__productDetail__toffleInactive);



function fnctn__desktopMenu__toggleInactive() {
    if (!sd_productDetail.classList.contains('inactive')) {
        sd_productDetail.classList.add('inactive');
    }
    console.log('fnctn__desktopMenu__toggleInactive');
    dv_desktopMenu.classList.toggle('inactive');
}

function fnctn__menuMobile__toggleInactive() {
    console.log('fnctn__menuMobile__toggleInactive');
    dv_mobileMenu.classList.toggle('inactive');
    if (!sd_productDetail.classList.contains('inactive')) {
        sd_productDetail.classList.add('inactive');
    }
}

function fnctn__productDetail__toffleInactive() {
    if (!dv_desktopMenu.classList.contains('inactive')) {
        dv_desktopMenu.classList.add('inactive');
    }
    if (!dv_mobileMenu.classList.contains('inactive')) {
        dv_mobileMenu.classList.add('inactive');
    }
    console.log('fnctn__productDetail__toffleInactive');
    sd_productDetail.classList.toggle('inactive');
} 