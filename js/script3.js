$(document).ready(function(){
    $(window).resize(function() {
        wdth=$(window).width();
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
      dots: true,
   });
  $('.slider-nav').slick({
 
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    vertical: true
  });
  $('.icon_blue').click(function(){
    $('.description_blue').fadeIn();
    $('.description_yellow').fadeOut();
    $('.description_gray').fadeOut();

  });
  $('.icon_yellow').click(function(){
    $('.description_yellow').fadeIn();
    $('.description_blue').fadeOut();
    $('.description_gray').fadeOut();
  });
  $('.icon_gray').click(function(){
    $('.description_gray').fadeIn(500);
    $('.description_blue').fadeOut(500);
    $('.description_yellow').fadeOut(500);
  });
  



});
