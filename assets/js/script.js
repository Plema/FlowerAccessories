$(document).ready(function(){

  $('.open').on('click', function() {
    $('nav').addClass('open-nav');
  });
  $('.close-nav').on('click', function() {
    $('nav').removeClass('open-nav');
  });

  $('.button-circle').on('click', function() {
    $('.search > input').addClass('open-input');
  });

  $(".quantity-arrow-minus").bind("click", function(){
    var $quantityNum = $(this).parent().parent().find(".quantity-num");
      if ($quantityNum.val() > 1){
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    });
    $(".quantity-arrow-plus").bind("click", function(){
    var $quantityNum = $(this).parent().parent().find(".quantity-num");
        $quantityNum.val(+$quantityNum.val() + 1);
    });

});