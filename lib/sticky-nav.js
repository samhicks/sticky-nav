// Sticky nav

$(document).ready(function(){

	$(window).scroll(function(){
	
		// Find height of the hero div
		var heroHeight = $('[data-role="hero"]').innerHeight();
		var nav = $('[data-role="nav"]');
		
		// If the vertical position of the navigation is greater than or equal 
		// to the height of the hero div add a class of fixed
		if($(this).scrollTop()>=heroHeight) {
			nav.addClass('sticky-nav');
		} else {
			nav.removeClass('sticky-nav');
		}
	});
});
