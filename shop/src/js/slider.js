$(document).ready(function(){
  $('.slider-main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable:false,
    arrows:true,
  });
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