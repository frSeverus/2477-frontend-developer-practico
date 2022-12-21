const dv_desktopMenu = document.querySelector('.desktop-menu');
const li_navbarEmail = document.querySelector('.navbar-email');

const dv_mobileMenu = document.querySelector('.mobile-menu');
const btn_menuMobile = document.querySelector('#btn_menuMobile');

const sd_shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const li_navbarShoppingCart = document.querySelector('.navbar-shopping-cart');

const dv_cardsContainer = document.querySelector('.cards-container');

const dv_productDetailClose = document.querySelector('.product-detail-close');
const sd_productDetail = document.querySelector('#product-detail');


li_navbarEmail.addEventListener('click', fnctn__desktopMenu__toggleInactive);
btn_menuMobile.addEventListener('click', fnctn__menuMobile__toggleInactive);
li_navbarShoppingCart.addEventListener('click', fnctn__shoppingCartContainer__toggleInactive);
dv_productDetailClose.addEventListener('click', fnctn__productDetalil__addInactive);


function fnctn__desktopMenu__toggleInactive() {
    if (!sd_shoppingCartContainer.classList.contains('inactive')) {
        sd_shoppingCartContainer.classList.add('inactive');
    }
    if (!sd_productDetail.classList.contains('inactive')) {
        sd_productDetail.classList.add('inactive');
    }
    console.log('fnctn__desktopMenu__toggleInactive');
    dv_desktopMenu.classList.toggle('inactive');
}

function fnctn__menuMobile__toggleInactive() {
    if (!sd_shoppingCartContainer.classList.contains('inactive')) {
        sd_shoppingCartContainer.classList.add('inactive');
    }
    if (!sd_productDetail.classList.contains('inactive')) {
        sd_productDetail.classList.add('inactive');
    }
    console.log('fnctn__menuMobile__toggleInactive');
    dv_mobileMenu.classList.toggle('inactive');
    
}

function fnctn__shoppingCartContainer__toggleInactive() {
    if (!dv_desktopMenu.classList.contains('inactive')) {
        dv_desktopMenu.classList.add('inactive');
    }
    if (!dv_mobileMenu.classList.contains('inactive')) {
        dv_mobileMenu.classList.add('inactive');
    }
    if (!sd_productDetail.classList.contains('inactive')) {
        sd_productDetail.classList.add('inactive');
    }
    
    console.log('fnctn__shoppingCartContainer__toggleInactive');
    sd_shoppingCartContainer.classList.toggle('inactive');
} 

function fnctn__productDetalil__addInactive() {
    console.log('fnctn__productDetalil__addInactive');
    sd_productDetail.classList.add('inactive');
}


// =================================================


const mg__product = document.querySelector('.product-detail-image');
const p__productPrice = document.querySelector('.product-detail-price');
const p__productName = document.querySelector('.product-detail-name');
const p__productDescription = document.querySelector('.product-detail-description');


function fnctn__productDetail__removeInactive(parametro) {
    if (!dv_desktopMenu.classList.contains('inactive')) {
        dv_desktopMenu.classList.add('inactive');
    }
    if (!dv_mobileMenu.classList.contains('inactive')) {
        dv_mobileMenu.classList.add('inactive');
    }
    if (!sd_shoppingCartContainer.classList.contains('inactive')) {
        sd_shoppingCartContainer.classList.add('inactive');
    }

    console.log('fnctn__productDetalil__removeInactive');
    sd_productDetail.classList.remove('inactive');

    console.log(parametro);

    mg__product.setAttribute('src', parametro.path[0].src);
    p__productPrice.innerText = parametro.path[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].data;
    p__productName.innerText = parametro.path[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].data;
    p__productDescription.innerText = "sin informacion";
}


// ==================================================

const productList = []; 
/*
Creamos el array que tendra la informacion de los productos. Un Array de Objetos
*/

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computer',
    price: 300,
    img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'TShirt',
    price: 10,
    img: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
Introducimos por el momento manualmente los productos
*/

function fntn__renderProducts(arr) {
    
    /*
    Definimos la funcion que plasmara en pantalla el contenido del array
    */
    for (product of arr) {
        // Comenzamos un ciclo que recorre el array señalado  en el parametro

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // Creamos un elemento. Lo llamaremos con la constante productCard y sera de tipo div y tendra por clase product-card. Aun no esta en el HTML

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        // IDEM

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        // IDEM

        const productInfoDiv = document.createElement('div');
        // IDEM

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        // IDEM

        const productName = document.createElement('p');
        productName.innerText = product.name;
        // IDEM

        const productInfoFigure = document.createElement('figure');
        // IDEM

        const productImgCart = document.createElement('img');
        // IDEM

        productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart)
        // Dentro del figure se agrega el icono del carrigo

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        // Dentro del div de info se agrega el precio y el nombre

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        // Ya dentro del info se agrega los dos elementos padres que recien mencionamos (...InfoDiv e ...InfoFigure)

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        // Se agregan a su vez estos dos a productCard que es padre de productIno y productImg

        /* Lo hecho hasta ahora es parte del bloque de un producto. La siguiente linea incluye el producto a la listqa de productos a mostrar, que es padre de aquellos
        */

        dv_cardsContainer.appendChild(productCard);

        

    }
}

fntn__renderProducts(productList);
//Definida la funcion, la llamamos con el array correspondiente donde guardamos el contenido.

//=============================================================

const sctn_productCard = document.querySelectorAll('.product-card');

for (element in sctn_productCard) {
    sctn_productCard[element].addEventListener('click', fnctn__productDetail__removeInactive);
}
