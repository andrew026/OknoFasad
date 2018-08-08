var mapHandrl;
var mrkr;
jQuery(function($){
	mapHandrl = new GMapHandler.MapHndlr();
	mrkr = new google.maps.Marker({
			title: "Наш Офис",
			position: {lat: 55.680046, lng: 37.278863},
			icon: mapHandrl.imgsDir + "map-ball.png",
			animation: google.maps.Animation.DROP
		});
	mapHandrl.initMap("prod_map", {lat: 55.680044, lng: 37.260343}, 14);//55.796738, 37.499440 маркер - //55.797136, 37.518971
	mrkr.setMap(mapHandrl.curMap);
	
	
	
	
	
	
	//-------------------------АНИМАЦИИ----------------------------
	if ( func_animationWasShown() ) {
		console.log('no animate "' + location.pathname + '"');
		//здесь исправляем то, что устанавливалось в коде для анимации.
		/*------*/
		$("#prod_block_1 .width-clip").eq(0).css( "width", "100%" );
		$("#prod_text_1").css( "opacity", "1" );
		$("#prod_worker_bg_2").addClass( "slide-active" );
		/*------*/
	} else {
		console.log('animate');
		func_animationWasShown(true);
		
		prepareProdAnimation();
		animateFirstBlock();
		$(window).on( "scroll", animateWorkerBlock);
		$(window).on( "scroll", animateGalleryBlock);
		$(window).on( "scroll", animateMapBlock);
	}
	
	//анимация для блока с чеками
	function animateFirstBlock (evnt) {
		setTimeout(function(){$("#prod_block_1 .width-clip.element-animated").css("width", "100%");}, 500);
		setTimeout(function(){$("#prod_block_1 .prod-block-ram-box.element-animated").css("opacity", "1").css("right", "25px");}, 1000);
		setTimeout(function(){$("#prod_text_1.element-animated").css("opacity", "1").css("margin-top", "0px");}, 1700);
	}
	function animateWorkerBlock (evnt) {
		if ($(this).scrollTop() >= 170) {//this - window
			$(this).off("scroll", animateWorkerBlock);//отвязываем обработчик от события
			nakrutka($("#prod_windws_count"), 50, "", 123, true);
			$("#prod_worker_bg.element-animated").addClass("slide-active");
			setInterval(function(){rotateSlides($("#opyt_photo_slides div.prod-block-bg"))}, 4000);
			setTimeout(function(){$("#prod_block_2 .prod-block-ram-box.element-animated").css("opacity", "1").css("left", "25px");}, 500);
			setTimeout(function(){$("#prod_text_2.element-animated").css("opacity", "1").css("margin-top", "0px");}, 2500);
		}
	}
	function animateGalleryBlock (evnt) {
		if ($(this).scrollTop() >= 820) {//this - window
			$(this).off("scroll", animateGalleryBlock);//отвязываем обработчик от события
			
			$("#prod_gallery_block .prod-block-ram-box.element-animated").css("opacity", "1");
			setTimeout(function(){
				$(".prod-gall-prev.element-animated").each(function(indx){
					var obj = $(this);
					setTimeout(function(){
						obj.css("opacity", "1");
					}, indx*200);
				});
			}, 500);
			setTimeout(function(){$("#prod_text_3.element-animated").css("opacity", "1").css("margin-top", "0px");}, 2500);
		}
	}
	function animateMapBlock (evnt) {
		if ($(this).scrollTop() >= 1450) {//this - window
			$(this).off("scroll", animateMapBlock);//отвязываем обработчик от события
			
			$("#prod_map_block.width-clip.element-animated").css("width", "100%");
			
			setTimeout(function(){mrkr.setMap(mapHandrl.curMap);}, 600);
			setTimeout(function(){$("#prod_map_block .white-abs-arrow-panel.element-animated").css("opacity", "1").css("left", "50px");}, 1300);
		}
	}
	//--------/анимации---------------------------------------------
	var prodFotoRotationInteval = setInterval(function(){
		rotateSlides($(".prod-foto-slide"));
	}, 7000);
	
	winPrlx($(".prod-foto-slide img"),100, "right");
});

/*подготовка анимации на странице производства*/
function prepareProdAnimation() {
	
	//первый блок
	$("#prod_block_1 .width-clip").eq(0).css("width", "0%").addClass("element-animated");
	$(".column-text-2").css("margin-top", "90px").css("opacity", "0").addClass("element-animated");
	$("#prod_block_1 .prod-block-ram-box").eq(0).css("right", "0px").css("opacity", "0").addClass("element-animated");
	//блок с рабочим
	$("#prod_worker_bg").eq(0).addClass("element-animated");
	$("#prod_block_2 .prod-block-ram-box").eq(0).css("opacity", "0").css("left", "0px").addClass("element-animated");
	//блок галереи
	$("#prod_gallery_block .prod-block-ram-box").eq(0).css("opacity", "0").addClass("element-animated");
	$(".prod-gall-prev").css("opacity", "0").addClass("element-animated");
	//карта
	$("#prod_map_block.width-clip").eq(0).css("width", "0%").addClass("element-animated");
	mrkr.setMap(null);
	$("#prod_map_block .white-abs-arrow-panel").eq(0).css("opacity", "0").css("left", "0px").addClass("element-animated");
	
}