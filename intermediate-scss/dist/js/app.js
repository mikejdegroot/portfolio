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

  //Burger menu animation with greensock / gsap
  var menu = $('.menu'),
      menuitem1 = $('.menu__item--1'),
      menuitem2 = $('.menu__item--2'),
      menuitem3 = $('.menu__item--3'),
      speed = 0.15;

  //instantiate  timeline
  var tl = new TimelineLite({ paused: true }); //pause default

  //collapse menu
  tl.to(menuitem1, speed, { top: 20, ease: Quint.easeOut }, 'label--1').to(menuitem3, speed, { top: -20, ease: Quint.easeOut }, 'label--1'

  //rotate all items
  ).to([menuitem1, menuitem2, menuitem3], speed, { rotation: -90, ease: Quint.easeOut }

  //expand menu
  ).to(menuitem1, speed, { left: 20, ease: Quint.easeOut }, 'label--2').to(menuitem3, speed, { right: 20, ease: Quint.easeOut }, 'label--2');

  // play timeline on click, reverse animation if active
  menu.click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      tl.play();
    } else {
      tl.reverse();
    }
  });

  $('.menu').on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }
});