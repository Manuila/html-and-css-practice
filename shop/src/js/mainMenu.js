$(document).ready(function() {
  $('.nav-main-toggle').click(function() {
    $('.nav-main__list').slideToggle(500);
  });
  
  $(window).resize(function() {		
		if (  $(window).width() > 768 ) {			
			$('.nav-main__list').removeAttr('style');
		 }
	});
});