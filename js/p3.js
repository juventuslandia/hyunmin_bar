(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    var $menuP3 = $(".menu-p3 > a"),
    $menuA3 = $(".menu-a3 > a");

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
            $menuP3.mouseenter(function(){
                $menuP3.stop().animate({
                    color: "#DBA731"
                }, 300, "easeInOutQuad");
            });
            $menuP3.mouseleave(function(){
                $menuP3.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            $menuA3.mouseenter(function(){
                $menuA3.stop().animate({
                    color: "#DBA731"
                }, 300, "easeInOutQuad");
            });
            $menuA3.mouseleave(function(){
                $menuA3.stop().animate({
                    color: "#000000"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo.png' alt='logo'>");
        }
        if(wScroll >= cover.offset().top && wScroll <= page.offset().top) {
            console.log("아웃");
            headerM.css({
                "color" : "#DBA731"
            });
            $menuP3.mouseenter(function(){
                $menuP3.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuP3.mouseleave(function(){
                $menuP3.stop().animate({
                    color: "#DBA731"
                }, 300, "easeInOutQuad");
            });
            $menuA3.mouseenter(function(){
                $menuA3.stop().animate({
                    color: "#ffffff"
                }, 300, "easeInOutQuad");
            });
            $menuA3.mouseleave(function(){
                $menuA3.stop().animate({
                    color: "#DBA731"
                }, 300, "easeInOutQuad");
            });
            headerL.html("<img src='./images/logo_w.png' alt='logo_w'>");
        }
    });

});
})(jQuery);