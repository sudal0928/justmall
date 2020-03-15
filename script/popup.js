
/*
$(".popup_button").click(function(){
  $(".popup").addClass("active");
});

$(".popup button").click(function(){
  $(".popup").removeClass("active");
});
*/

// popup

 $('#popup_button').on('click', function(){
     $('.popup').fadeIn();
 });

 $('.팝업닫기').on('click', function(){
     $('.popup').fadeOut();
 });
