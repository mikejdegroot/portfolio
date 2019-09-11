$(() => {

  $('.main-nav__item').on('click', function() {
    // if (!$(this).has('ul')) return null;
    const $thisSub = $(this).children('.sub-menu');
    $('.sub-menu').not($thisSub).slideUp();
    $thisSub.slideToggle();
  });

  $('.project-trigger').on('click', function() {
    const dataId = $(this).attr('data-id');
    const $thisProject = $(`#${dataId}`);
    $('.project').not($thisProject).removeClass('.active');

    $thisProject.toggleClass('active');
  });


});
