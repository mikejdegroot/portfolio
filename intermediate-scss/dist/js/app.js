'use strict';

$(function () {

  var $gaSummary = $('.gaSumarry');
  var $name = $('.name');
  var $bangerDesc = $('.projoTwoDesc');

  $(window).scroll(updateHeader).trigger('scroll');

  function updateHeader() {
    var viewportHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var tripleHeight = $('#blackOverlay').height();
    if (scrollTop >= viewportHeight - 40) {
      $('header').addClass('translucent');
    } else {
      $('header').removeClass('translucent');
    }

    if (scrollTop <= 650) {
      $gaSummary.hide();
      $bangerDesc.hide();
      $name.show();
    } else if (scrollTop <= 1900) {
      $gaSummary.show();
      $name.hide();
      $bangerDesc.hide();
    } else if (scrollTop <= 2500) {
      $bangerDesc.show();
    } else {
      $gaSummary.hide();
    }

    $('#blackOverlay').css('opacity', scrollTop / tripleHeight);
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