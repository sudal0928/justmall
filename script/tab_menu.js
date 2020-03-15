/* 공지사항 부분 class를 on으로 놓고 갤러리는 class 지정 안했을 때
$(".tab_menu > li > a").click(function() {
  $(this).parent().addClass("on").siblings().removeClass("on");
  return false;
});
*/

$(".tab_menu > li > a").click(function() {
  $(this).parent().attr('class',"notice").siblings().attr('class',"gallery");
  return false;
});
