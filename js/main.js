var min = 708
function BannerResize(){
    if($( window ).width() <= min) { 
        $("#bkgd").attr("src","../images/Home/banner/mobile/Home-B2.jpg");
        $("#img-banner1").attr("src","../images/Home/banner/mobile/Home-B4.png");
        $("#img-banner4").attr("src","../images/Home/banner/mobile/Home-B8.png");
        $("#bkgd-b").addClass("hide");
        $("#img-banner").addClass("hide");
        $("#img-banner2").addClass("hide");
        $("#img-banner3").addClass("hide");

    } else {
        $("#bkgd").attr("src","../images/Home/banner/Home-B2.png");
        $("#img-banner1").attr("src","../images/Home/banner/Home-B4.png");
        $("#img-banner4").attr("src","../images/Home/banner/Home-B8.png");
        $("#bkgd-b").removeClass("hide");
        $("#img-banner").removeClass("hide");
        $("#img-banner2").removeClass("hide");
        $("#img-banner3").removeClass("hide");
    }

}
function Seccion2Resize(){
    if($( window ).width() <= min) { 
        $("#section2-container>img").attr("src","../images/Home/seccion 2/mobile/Home-A4.jpg");
    }
    else {
        $("#section2-container>img").attr("src","../images/Home/seccion 2/Home-A4.jpg");
    }
}

function Seccion3Resize(){
    if($( window ).width() <= min) { 
        $("#section3-container>img").attr("src","../images/Home/seccion 3/mobile/Home-A7.jpg");
    }
    else {
        $("#section3-container>img").attr("src","../images/Home/seccion 3/Home-A7.jpg");
    }
}
$(document).ready(function(){
    BannerResize();
    Seccion2Resize();
    Seccion3Resize();
});
$( window ).resize(function() {
    BannerResize();
    Seccion2Resize();
    Seccion3Resize();
});