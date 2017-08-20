
//Header
$(document).ready(function(){
	$('#bg').fadeIn(3500);
	$('#header-tagline').delay(450).slideDown(1000);
});


// $('#header-tagline').show('clip', 3000);


// Scrol down
$('.scroll-down, #nav-solutions').click (function() {
	$('html, body').animate({scrollTop: $('section.about-solutions').offset().top }, 'slow');
	return false;
});



$(document).ready(function() { 
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);
});