  $(document).ready(function(){

  $('.slider-delivery > div').on('click', function() {

    $('.slider-delivery > div').removeClass('active');

    $(this).parent().parent().find(".all-blocks").removeClass().addClass("all-blocks");
    var $thisClass = $(this).attr("class");
    var $some = $(this).parent().parent().find(".all-blocks").addClass($thisClass + "-show");


    $(this).addClass('active');
  });
  
});