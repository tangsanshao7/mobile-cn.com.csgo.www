function delayURL(url, time) {
  setTimeout("top.location.href = '" + url + "'", time);
}


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