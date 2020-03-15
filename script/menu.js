$(".navi_box").mouseover(function(){
  $(this).children(".menu_box").stop().slideDown();
})

$(".navi_box").mouseleave(function(){
  $(this).children(".menu_box").stop().slideUp();
})
