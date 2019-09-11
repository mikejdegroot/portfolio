'use strict';

$(function () {

  $('.main-nav__item').on('click', function () {
    // if (!$(this).has('ul')) return null;
    var $thisSub = $(this).children('.sub-menu');
    $('.sub-menu').not($thisSub).slideUp();
    $thisSub.slideToggle();
  });

  $('.project-trigger').on('click', function () {
    var dataId = $(this).attr('data-id');
    var $thisProject = $('#' + dataId);
    $('.project').not($thisProject).removeClass('.active');

    $thisProject.toggleClass('active');
  });
});