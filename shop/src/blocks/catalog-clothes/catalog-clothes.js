$(document).ready(function(){
  $('.slider-clothes').slick({
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 5,
    variableWidth: true,
    prevArrow: $('.slider-clothes-button-prev'),
    nextArrow: $('.slider-clothes-button-next'),
  });
 });