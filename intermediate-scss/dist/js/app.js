'use strict';

/* global google:true */

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

  function initMap() {
    var lat = $('#map').data('lat');
    var lng = $('#map').data('lng');
    var latLng = { lat: parseFloat(lat), lng: parseFloat(lng) };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: latLng
    });

    new google.maps.Marker({
      map: map,
      position: latLng
    });
  }

  initMap();

  $('.menu').on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }
});