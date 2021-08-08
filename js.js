$num = $('.ui-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.ui-card:nth-child(' + $even + ')').addClass('active');
  $('.ui-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.ui-card:nth-child(' + $odd + ')').addClass('active');
  $('.ui-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.ui-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.ui-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.container').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.container').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});

//アニメーション属性を持つ要素を非表示、animated属性を追加
$('*[animation]').addClass('invisible animated');

$(window).scroll(function () {
  $('*[animation]').each(function () {
    //アニメーションをさせる要素の上の位置
    var imgPos = $(this).offset().top;
    //ウインドウ上部の位置
    var scroll = $(window).scrollTop();
    //アニメーションを発火させる位置
    var position = imgPos - window.innerHeight + window.innerHeight / 5;

    //animation属性に記載されたアニメーション名を取得
    if (this.hasAttribute('animation')) {
        var animation = this.getAttribute('animation');
    }
    //発火位置まで来たら要素を表示し、アニメーションをclass名に追加
    if (scroll > position) {
      $(this).removeClass('invisible').addClass(animation);
    }
    //ページのトップまでスクロールしたら要素を非表示（リセット）
    if (scroll < 10) {
      $(this).removeClass(animation).addClass('invisible');
    }
  });
});


$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});