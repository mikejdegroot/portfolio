'use strict';

$(function () {

  $(window).scroll(updateHeader).trigger('scroll');

  function updateHeader() {
    var viewportHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= viewportHeight - 40) {
      $('header').addClass('translucent');
    } else {
      $('header').removeClass('translucent');
    }

    if (scrollTop <= 700) {
      $('.projosIndex').addClass('hidden');
    } else if (scrollTop <= 1800) {
      $('.projosIndex').removeClass('hidden');
    } else {
      $('.projosIndex').addClass('hidden');
    }
    $('#blackOverlay').css('opacity', scrollTop / $('#blackOverlay').height());
  }

  $('nav a').on('click', scrollToSection);

  function scrollToSection() {
    var section = $(this).attr('href');
    $('body').animate({
      scrollTop: $(section).offset().top - $('header').height()
    }, 400, function () {
      if ($(window).width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  $('.menu').on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }
});