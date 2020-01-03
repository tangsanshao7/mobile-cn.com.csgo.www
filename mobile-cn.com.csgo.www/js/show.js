function delayURL(url, time) {
  setTimeout("top.location.href = '" + url + "'", time);
}
$(function () {

  var mySwiper = new Swiper('.game_lunbo', {
      autoplay: false,//可选选项，自动滑动
      direction: 'vertical',
      watchSlidesVisibility: true,
      resistanceRatio: 0,
  })

  var mySwiper2 = new Swiper('.lunbo2', {
      autoplay: false,//可选选项，自动滑动
      direction: 'horizontal',
      setWrapperSize: true,
      resistanceRatio: 0,
  })

  var mySwiper3 = new Swiper('.lunbo3', {
      autoplay: false,//可选选项，自动滑动
      direction: 'horizontal',
      setWrapperSize: true,
      // resistanceRatio : 0,
      slidesPerView: 3,
      spaceBetween: 60,
  })
})
$(document).ready(function () {
  $(".toTop").on("click", function () {
    $("body").animate({
      scrollTop: 0
    }, 500);
  });

  $(".bar").on("click", function () {
    $(".box").css("display", "block");
    $(".silder_bar").css({
      "transform": "translate(0,0)",
      "transition": " all 0.3s ease 0s",
      "opacity": 1
    });
    $(".silder_bar_bg").show();
  });

  $(".silder_bar .close_silder_bar,.silder_bar_bg").on("click", function () {
    $(".box").css("display", "none");
    $(".silder_bar").css("transform", "translate(-100%,0)");
    $(".silder_bar_bg").hide();
  });
  $(".btn_code").on("click", function () {
    $(".silder_bar").css("transform", "translate(-100%,0)");
    $(".silder_bar_bg").hide();
    $(".S_pop_code").show();
  })
  $(".close_pop_code").on("click", function () {
    $(".box").css("display", "none");

    $(".S_pop_code").hide();
  })

  $(".silder_bar ul li").on("click", ".p_link", function () {
    if ($(this).hasClass("on")) return;
    var dl = $(this).parent().find("dl");
    $(".silder_bar ul li .p_link").removeClass("on");
    $(this).addClass("on");
    if (dl.length == 1) {
      $(".silder_bar ul li dl").hide().css({
        height: 0
      });
      var h = Math.ceil(dl.find("dd").length / 2) * Math.ceil(dl.find("dd").eq(0).height());
      dl.show().animate({
        height: h
      }, 300);
    } else {
      $(".silder_bar ul li dl").hide().animate({
        height: 0
      }, 0);
    }
  })

})



$.fn.extend({
  //---元素拖动插件
  dragging: function (data) {
      var $this = $(this);
      var xPage;
      var yPage;
      var X; //
      var Y; //
      var father = $this.parent();
      var defaults = {
          move: 'both',
          hander: 1
      }
      var opt = $.extend({}, defaults, data);
      var movePosition = opt.move;
      var hander = opt.hander;
      if (hander == 1) {
          hander = $this;
      } else {
          hander = $this.find(opt.hander);
      }

      //---初始化
      father.css({
          "position": "relative"
      });
      $this.css({
          "position": "absolute"
      });
      hander.css({
          "cursor": "move"
      });
      var faWidth = father.width();
      var faHeight = father.height();
      var isMove;
      $this[0].addEventListener('touchstart', touchStart);
      $this[0].addEventListener('touchmove', touchMove);
      $this[0].addEventListener('touchend', touchEnd);

      function touchStart(e) {
          isMove = true;
          e.preventDefault();
          tx = parseInt($this.css('width'));
          x = e.touches[0].pageX;
      }

      function touchMove(e) {
          if (isMove) {
              e.preventDefault();
              $(".right_img").css("width", e.touches[0].pageX + "px");
              console.log(e.touches[0].pageX)
              if (e.touches[0].pageX <= 10) {
                  $(".right_img").css("width", 10 + "px");
              }
              if (e.touches[0].pageX >= faHeight - 10) {
                  $(".right_img").css("width", (faHeight - 10) + "px");
              }
          }
      }

      function touchEnd(e) {
          isMove = false;
      }
  }
});
