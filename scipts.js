const dv_desktopMenu = document.querySelector('.desktop-menu');
const li_navbarEmail = document.querySelector('.navbar-email');

li_navbarEmail.addEventListener('click', fnctn__desktopMenu__toggleInactive);

function fnctn__desktopMenu__toggleInactive(){
    console.log('fnctn__desktopMenu__toggleInactive');
    dv_desktopMenu.classList.toggle('inactive');
}