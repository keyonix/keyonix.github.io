
//Header
$(document).ready(function(){
	$('#bg').fadeIn(3500);
	$('#header-tagline').delay(450).slideDown(1000);
});

// Mobile fixes
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    // Mobile vh100 scroll fix
    function calcVH() {
        $('#header').innerHeight( $(this).innerHeight() );
    }
    calcVH();
    $(window).on('resize orientationchange', function() {
        calcVH();
    })

    // Mobile bg cover fix
    $('#bg').css({ 'background-size': 'auto', 'background-position': '0% 0%' });
}

// Navbar buttons
$('.scroll-down, #nav-about').click (function() {
    $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
    return false;
});

$('#nav-solutions').click (function() {
	$('html, body').animate({scrollTop: $('#solutions').offset().top }, 'slow');
	return false;
});

$('#nav-contacts').click (function() {
    $('html, body').animate({scrollTop: $('.contacts').offset().top }, 'slow');
    return false;
});

// Scrol down
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

// Contacts
// Test for placeholder support
$.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

// Hide labels by default if placeholders are supported
if($.support.placeholder) {
    $('.form-label').each(function(){
        $(this).addClass('js-hide-label');
    });  

    // Code for adding/removing classes here
    $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
        
        // Cache our selectors
        var $this = $(this),
            $parent = $this.parent().find("label");

        if (e.type == 'keyup') {
            if( $this.val() == '' ) {
                $parent.addClass('js-hide-label'); 
            } else {
                $parent.removeClass('js-hide-label');   
            }                     
        } 
        else if (e.type == 'blur') {
            if( $this.val() == '' ) {
                $parent.addClass('js-hide-label');
            } 
            else {
                $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
            }
        } 
        else if (e.type == 'focus') {
            if( $this.val() !== '' ) {
                $parent.removeClass('js-unhighlight-label');
            }
        }
    });
}

$('#contact-form').submit(function(event){
  $('#contacts-header').text($('#contacts-header').data('confirm-submit'));
});