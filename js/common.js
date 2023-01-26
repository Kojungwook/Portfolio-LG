$(function(){

// login down
  $('.my-tooltip').on('mouseenter', function(){
    $('.my-tooltip-detail').addClass('active');
  });
  $('.my-tooltip').on('mouseleave', function(){
    $('.my-tooltip-detail').removeClass('active');
  });

// header-bottom down
  $('.menu-wrap > ul > li').on('mouseover', function(){
    $(this).addClass('active');
  });
  $('.menu-wrap > ul > li').on('mouseout', function(){
    $(this).removeClass('active');
  });

// slide btn
  $('.slideBtn.play').on('click', function(){
    $('.slideBtn.play').removeClass('active');
    $('.slideBtn.stop').addClass('active');
  });
  $('.slideBtn.stop').on('click', function(){
    $('.slideBtn.play').addClass('active');
    $('.slideBtn.stop').removeClass('active');
  });

// top btn
  // $(window).scroll(function () {
  //     var _winTop = $(window).scrollTop();
  //
  //     if(_winTop > 200){
  //         $('.floating-block').addClass('active');
  //     } else if(_winTop <= 200){
  //         $('.floating-block').removeClass('active');
  //     }
  //
  //     if(_winTop > 48){
  //         $('header').addClass('fixed');
  //     } else {
  //         $('header').removeClass('fixed');
  //     }
  // });

// main btn
  // $('.floating-custom-wrap .main-btn').on('click', function(){
  //   $('.floating-custom-wrap').toggleClass('active');
  //   $(this).toggleClass('active').siblings('.service-list').toggle();
  // });

// footer button
  $('.menu-opener').on('click', function(){
    $('.pc-dropdown-wrap').toggleClass('open');
    if($('.pc-dropdown-wrap').hasClass('open')){
      $('.menu-opener').children('span').text('메뉴 접기');
    }else{
      $('.menu-opener').children('span').text('메뉴 전체보기');
    }
  });
});
