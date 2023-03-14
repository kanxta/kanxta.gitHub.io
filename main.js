//jquery ハンバーガーメニュー
$('.nav_toggle').on('click', function () {
  $('.nav_toggle, .nav').toggleClass('show');
});

function hidecap(){
  $(".bod").css("display", "inline");
  $(".cap").css("display","none");
}