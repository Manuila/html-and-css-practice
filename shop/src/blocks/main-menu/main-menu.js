$(document).ready(function() {
  $('.mobile-menu__trigger').click(function() {
    $('.main-menu__list').slideToggle(500);
  });
  
  $(window).resize(function() {		
		if (  $(window).width() > 768 ) {			
			$('.main-menu__list').removeAttr('style');
		 }
	});
});