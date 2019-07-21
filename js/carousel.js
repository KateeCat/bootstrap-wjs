$(function () {
	// 目的：轮播图随着屏幕大小的改变更改图片src
	// 1.屏幕宽度，判断w<768为移动端,>为非移动端
	// 2.为移动端写小图src，非移动端写大图src
	$(window).on("resize",function () {
		// 初始化提示插件
        $('[data-toggle="tooltip"]').tooltip()
		var width = $(window).width();
		var item = $(".carousel .item");
		if(width<768){
			item.each(function (index,value){
				var item = $(this);
				var smallImage = item.data("smallImage");
				item.html(' <a href="javascript:;" class="mobileImg"><img src="'+smallImage+'" alt="..."> </a>');
			});
		}else {
			item.each(function (index,value){
				var item = $(this);
				var bigImage = item.data("largeImage");
				// item.html(' <a href="javascript:;" class="pcImg"></a><img src="'+bigImage+'" alt="..."> ');
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+bigImage+"')"));
			});
		}
	}).trigger("resize");//点击的时候先触发一次

	var startX,endX,distanceX;
	var carousel_inner = $(".carousel-inner")[0];
	var carousel = $(".carousel");
	carousel_inner.addEventListener("touchstart",function (e) {
		startX = e.targetTouches[0].clientX;
	});
	carousel_inner.addEventListener("touchend",function (e){
		endX = e.changeTouches[0].clientX;
		distanceX = startX - endX;
		if(distanceX<0){
			carousel.carousel('next');
		}else if(distanceX>0){
			carousel.carousel('prev');
		}
	});

	var ul = $(".wjs_product .nav-tabs");
	var li = ul.find("li");
	var totolWidth = 0;
	li.each(function (index,value) {
		totolWidth = totolWidth +$(this).outerWidth();
	});
	ul.width(totolWidth);
    /*使用插件实现导航条的滑动操作*/
    var myScroll = new IScroll('.wrapper',{
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });
});
