$(function() {
  $('.slider').slick({
    dots: true,
    arrows: false
  });

  $('.faq__item').click(function() {
    $(this).toggleClass('faq__list--active');
  });

  $('.burger').click(function(event) {
    $('.burger, .burger__line, .header__nav').toggleClass('active');
    $('.overlay').toggleClass('active');
    $('body').toggleClass('fixed');
  });

  $('.btn__default').click(function() {
    $('.btn__default').removeClass('btn--active');
    $('.how__content').removeClass('how__content--active');
    $(this).addClass('btn--active');
    $($(this).attr('href')).addClass('how__content--active');
});


});