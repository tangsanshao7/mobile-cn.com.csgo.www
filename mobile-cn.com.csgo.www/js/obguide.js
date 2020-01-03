$(document).ready(function () {
  //  荣耀免费领取
  $('.container .main .btn .left').click(function () {
      window.location.href = './free.html';
      console.log(8888)
  })

  //  荣耀免费领取
  $('.container .main .btn .right').click(function () {
      window.location.href = './free1.html';
  })

  var activeIndex;
  // 缩略轮播图
  var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
      spaceBetween: 0,
      paginationType: 'fraction',
      centeredSlides: false,
      slideToClickedSlide: true,
      spaceBetween: 10,
      
      onSlideChangeStart: function (swiper) {
          $('.diff').css({
              'opacity': '0.4',
              'border': '1px solid transparent'
          })
          activeIndex = swiper.activeIndex
          $('.diff').eq(activeIndex).css({
              'opacity': '1',
              'border': '1px solid rgb(208, 179,119)'
          })
      }
  });


  var lists = $('.diff');
  lists.eq(0).css({
      opacity: '1',
      border: '1px solid rgb(208, 179,119)'
  })
  for (var i = 0; i < lists.length; i++) {
      if (lists[i].tagName = 'DIV') {
          lists[i].onclick = (function (i) {
              return function () {
                  for (var j = 0; j < lists.length; j++) {
                      lists[j].style.opacity = '0.4'
                      lists[j].style.border = '1px solid transparent'
                  }
                  lists[i].style.opacity = '1'
                  lists[i].style.border = '1px solid rgb(208, 179,119)'
                  galleryTop.slideTo(i, 1000, false); //切换到第
              }
          })(i)
      }
  }

  var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: false,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      onlyExternal: true,
      slidesOffsetBefore: 0,
  });

  // galleryTop.params.control = galleryThumbs;
  // galleryThumbs.params.control = galleryTop;

  // 进官网
  $('.enter-guan').click(function () {
      window.location.href = '../list/main.html';
  })

  //
  $('.word2').click(function () {
      window.location.href = '//www.csgo.com.cn/news/gamenews/20170913/206234.shtml';
  })

})