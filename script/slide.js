/*
start();
var imgs = 2;
var now = 0;

function start(){
	$(".slide_box > img").eq(0).siblings().css({"margin-top":"-300px"});
	setInterval(function(){slide();},3000);
}

function slide(){
	now = now == imgs?0:now+=1;
	$(".slide_box > img").eq(now-1).css({"margin-top":"-300px"});
	$(".slide_box > img").eq(now).css({"margin-top":"0px"});
}
*/


//아래에서 위로 올라가는 이미지 슬라이드.
setInterval( function(){             //setInterval(); 함수 반복 실행
  $(".slide_box").delay("2500");
  $(".slide_box").animate({marginTop:  "-300px" },"500");
  $(".slide_box").delay("2500");
  $(".slide_box").animate({marginTop:  "-600px" },"500");
  $(".slide_box").delay("2500");
  $(".slide_box").animate({marginTop:  "0" },"500");
});
