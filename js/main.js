$(document).on('click', '.tabs .tabs__nav-link', toggleTab);

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav:true,
  	items:1,
  	dots:true,
  	loop:true,
  	navText:['<svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="#fff"><path d="M19.83-.035l2.089 2.099L4.13 19.947l17.847 17.939-2.09 2.099L-.048 19.947z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="#fff"><path d="M2.098-.035L.009 2.064l17.789 17.883L-.048 37.886l2.089 2.099 19.935-20.038z"/></svg>'],
  });
});

function toggleTab(e) {
    e.preventDefault();

    var tabItems = $('.tabs .tabs__item');
    var navItems = $('.tabs .tabs__nav-link');

    var currentNavItem = $(this);
    var activeNavItemClass = 'tabs__nav-link--active';

    var currentBodyItem = $(this).attr('href');
    var activeBodyItemClass = 'tabs__item--active';


	$(tabItems).removeClass(activeBodyItemClass);
    $(navItems).removeClass(activeNavItemClass);

    $(currentBodyItem).addClass(activeBodyItemClass);
    currentNavItem.addClass(activeNavItemClass);  
};

//****** Закрытие и открытие модальных окон ********//

var сartModal = document.querySelector(".cart-add");
var cartModalClose = document.querySelector(".cart-add .modal-close");
var mapModal = document.querySelector(".map-popup");
var mapModalClose = document.querySelector(".map-popup .modal-close");
var writeModal = document.querySelector(".write-us");
var writeModalClose = document.querySelector(".write-us .modal-close");

cartModalClose.addEventListener("click", function () {
    сartModal.classList.remove("modal-show");
});

mapModalClose.addEventListener("click", function () {
    mapModal.classList.remove("modal-show");
});
writeModalClose.addEventListener("click", function () {
    writeModal.classList.remove("modal-show");
});

var btnInCart = document.querySelector(".item__in-cart");
var btnWriteUs = document.querySelector(".contact-us-btn");
var map = document.querySelector(".main-about-right__link-map");

btnInCart.addEventListener("click", function(evt) {
  evt.preventDefault();
  сartModal.classList.add("modal-show");
});

btnWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeModal.classList.add("modal-show");
});

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});