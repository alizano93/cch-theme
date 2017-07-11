function BannerResize(){
    if($( window ).width() <= 518) { 
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
$(document).ready(function(){
    BannerResize();
});
$( window ).resize(function() {
    BannerResize();
});