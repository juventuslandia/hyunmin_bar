(function($){
$(document).ready(function(){
// READY 

    /* 프로젝트 헤더 색 변경  */
    var page = $(".page-container");
    var headerM = $(".header-menu-links a");
    var headerL = $(".header-wrap a");
    var cover = $(".cover");
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll >= page.offset().top) {
            console.log("도달");
            headerM.css({
                "color" : "#000"
            });
        }
        if(wScroll >= cover.offset().top && wScroll <= page.offset().top) {
            console.log("아웃");
            headerM.css({
                "color" : "#277043"
            });
        }
    });

});
})(jQuery);