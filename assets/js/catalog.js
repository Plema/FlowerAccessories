$(document).ready(function(){

  $('.tabs > h3').on('click', function() {
    $('.tabs > h3').removeClass('active');
    $(this).addClass('active');
  });

  $('.sort-price').on('click', function() {
    $('.sort-price').removeClass('active');
    $(this).addClass('active');
  });

  $('.sort-text').on('click', function() {
    $('.sort-text').removeClass('active');
    $(this).addClass('active');
  });

  $('.one-filter > h5').on('click', function() {
    $(this).parent().find('li').toggleClass('active');
  });

});