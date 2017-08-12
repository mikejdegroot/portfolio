/* global google:true */

$(() => {

  $(window).scroll(updateHeader).trigger('scroll');



  function updateHeader() {
    const viewportHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    if(scrollTop >= viewportHeight - 40) {
      $('header').addClass('translucent');

    } else {
      $('header').removeClass('translucent');
    }
  }

  $('nav a').on('click',scrollToSection);

  function scrollToSection() {
    const section = $(this).attr('href');
    $('body').animate({
      scrollTop: $(section).offset().top -$('header').height()
    }, 400, () => {
      if ($(window).width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  function initMap() {
    const lat = $('#map').data('lat');
    const lng = $('#map').data('lng');
    const latLng = { lat: parseFloat(lat), lng: parseFloat(lng) };

    const map = new google.maps.Map(document.getElementById('map'), {
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
