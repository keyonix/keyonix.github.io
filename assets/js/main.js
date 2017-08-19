
//Header
$(document).ready(function(){
	$('#bg').fadeIn(3500);
	$('#header-tagline').delay(450).slideDown(1000);
});


// $('#header-tagline').show('clip', 3000);


// Scrol down
$('.scroll-down, #nav-solutions').click (function() {
  $('html, body').animate({scrollTop: $('section.solutions').offset().top }, 'slow');
  return false;
});