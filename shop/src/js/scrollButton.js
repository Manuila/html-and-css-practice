var btnScroll = $('#btnScrollToTop');

$(window).scroll(function() {
  $(window).scrollTop() > 300 ? btnScroll.addClass('show') : btnScroll.removeClass('show');
});

btnScroll.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

