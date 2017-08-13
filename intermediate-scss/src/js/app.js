$(() => {

  $(window).scroll(updateHeader).trigger('scroll');



  function updateHeader() {
    const viewportHeight = $(window).height();
    const scrollTop = $(window).scrollTop();
    const tripleHeight = ($('#blackOverlay').height());
    if(scrollTop >= viewportHeight - 40) {
      $('header').addClass('translucent');

    } else {
      $('header').removeClass('translucent');
    }

    if(scrollTop <= 650){
      $('.gaSumarry').addClass('hidden');
      $('.name').removeClass('hidden');
    } else if(scrollTop <= 1200) {
      $('.gaSumarry').removeClass('hidden');
      $('.name').addClass('hidden');
    } else {
      $('.gaSumarry').addClass('hidden');
    }
    $('#blackOverlay').css('opacity',scrollTop/tripleHeight);

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



  $('.menu').on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }
});
