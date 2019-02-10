$(document).on('click', '.tabs .tabs__nav-link', toggleTab);

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	nav:true,
  	items:1,
  	dots:false,
  	loop:true,
  	navText:['<svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="#fff"><path d="M19.83-.035l2.089 2.099L4.13 19.947l17.847 17.939-2.09 2.099L-.048 19.947z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="22" height="40" viewBox="0 0 22 40" fill="#fff"><path d="M2.098-.035L.009 2.064l17.789 17.883L-.048 37.886l2.089 2.099 19.935-20.038z"/></svg>'],
  });
});

function toggleTab(e) {
    e.preventDefault();

    var tabItems = $('.tabs__item');
    var navItems = $('.tabs__nav-link');

    var activeNavClass = 'tabs__nav-link--active';
    var activeBodyClass = 'tabs__item--active';
	var tabId = $(this).attr('href');

	$(tabItems).removeClass(activeBodyClass);
    $(navItems).removeClass(activeNavClass);

    $(tabId).addClass(activeBodyClass);
    $(this).addClass(activeNavClass);
}
/*$('.pop-manufacturer').click(function(){
	$('.pop-manufacturer').css({
		'opacity': '0.5'
	})
});*/