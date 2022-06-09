var idx = 0;
function swiperPlay(){
    idx++;
    $(".swiper-box").stop().animate({"left": -1920 * idx},"normal",function(){
        if(idx > 3){
            idx = 0;
            $(".swiper-box").css({"left": 0});
            $(".swiper-tab").find("li").removeClass("swiper-current").eq(0).addClass("swiper-current");
        }
    });
    $(".swiper-tab").find("li").removeClass("swiper-current").eq(idx).addClass("swiper-current");
}
var timer = setInterval(swiperPlay,2000);
$(".swiper-tab").find("li").click(function(){
    idx = $(this).index();
    $(".swiper-tab").find("li").removeClass("swiper-current").eq(idx).addClass("swiper-current");
    $(".swiper-box").stop().animate({"left": -1920 * idx},"normal")
})
$(".swiper-tab").find("li").hover(function(){
    clearInterval(timer);
},function(){
    timer = setInterval(swiperPlay,2000);
})
