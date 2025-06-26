// スクロール時にヘッダーの背景色を変更する例
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 50) {
    $('header').css('background-color', '#111');
  } else {
    $('header').css('background-color', '#222');
  }
});
