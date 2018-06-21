$(document).ready(function(){
  $('.slider__main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable:false,
    arrows:true,
  });
  $('.slider__clothes').slick({
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 5,
    variableWidth: true
  });
 });