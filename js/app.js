$(document).ready(
  $(".menu__item").click('.menu__link',function(e){
    $(".menu__item").removeClass("menu__item--current");
    $(this).addClass("menu__item--current");
  })
);
