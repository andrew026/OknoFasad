jQuery(function($){
	//сменяем слайды выгод при навидении на секцию квартиры
	var economy_slides_interval;
	$("div.price-example-block").on("mouseover", function(evnt){
		var this_block = $(this);
		var this_slides = this_block.find("div.price-example-economy-slide");
		economy_slides_interval = setInterval(function(){
			rotateSlides(this_slides);//определена в prosto-func.js
		}, 2000);
	});
	$("div.price-example-block").on("mouseout", function(evnt){
		clearInterval(economy_slides_interval);
	});
	winPrlx($("#price_page_block .win-prlx-bg"), 50);
	
	//------------Анимации-----------
	if ( func_animationWasShown() ) {
		console.log('no animate "' + location.pathname + '"');
		//поправляем изменения разметки для этой страницы
		$("#price_example_2k").css("opacity", "1");
		$("#price_ex_win_bal_1k").css("opacity", "1");
		$("#price_ex_win_2_1k").css("opacity", "1");
		$("#win_capt_bal_1k").css("opacity", "1");
		$("#win_capt_2_1k").css("opacity", "1");
		
	} else {
		console.log('animate');
		func_animationWasShown(true);
		
		//var arrowBottwigleInterval;
		animate1kBlock();
		animate2kBlock();
		//$(window).on( "scroll", animate2kBlock);
		$(window).on( "scroll", animate3kBlock);
		$(window).on( "scroll", animatePriceBlock);
	}
	
	
	
	
	
	
	function animate2kBlock (evnt) {
		//if ($(this).scrollTop() >= 450) {}//this - window
		setTimeout(function(){
			//$(this).off("scroll", animate2kBlock);//отвязываем обработчик от события
			$("#price_example_2k.element-animated").css("opacity", "1");
			//clearInterval(arrowBottwigleInterval);
			//$("#price_1k_animate_bott.element-animated").hide();
		}, 3000);
	}
	function animate3kBlock (evnt) {
		if ($(this).scrollTop() >= 850) {//this - window
			$(this).off("scroll", animate3kBlock);//отвязываем обработчик от события
			$("#price_example_3k.element-animated").css("opacity", "1");
		}
	}
	function animatePriceBlock (evnt) {
		if ($(this).scrollTop() >= 1450) {//this - window
			$(this).off("scroll", animatePriceBlock);//отвязываем обработчик от события
			$("#price_page_block.element-animated").css("opacity", "1");
		}
	}
	
	
	function animate1kBlock (evnt) {
		//заголовок
		setTimeout(function(){$("#price_example_h2_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 200);
		setTimeout(function(){$("#price_example_h2_words_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 900);
		//окна
		setTimeout(function(){$("#price_ex_win_bal_1k.element-animated, #win_capt_bal_1k.element-animated").css("opacity", "1");}, 1900);
		setTimeout(function(){$("#price_ex_win_2_1k.element-animated, #win_capt_2_1k.element-animated").css("opacity", "1");}, 2600);
		//блок справа
		setTimeout(function(){$("#price_summ_box_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 3600);
		
		//текст цена перекупщика текст
		setTimeout(function(){$("#dealer_price_text_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 4500);
		setTimeout(function(){$("#dealer_price_text_1k.element-animated").css("width", "210px").css("color", "inherit").css("font-size", "");}, 5000);
		//цена перекупщика
		setTimeout(function(){$("#dealer_price_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 5500);
		setTimeout(function(){$("#dealer_price_1k.element-animated").css("color", "inherit").css("font-size", "");}, 6000);
		//черта за ценой перекупщика
		setTimeout(function(){$("#summ_del_dealer_pr_1k.element-animated").css("width", "100%");}, 6500);
		//наша цена текст
		setTimeout(function(){$("#our_price_text_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 7000);
		//наша цена
		setTimeout(function(){
			$("#our_price_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");
			nakrutka($("#prosto_our_price_20200"), 50, "", 483, true, function(box){$("#our_price_1k").addClass("green-color");});
		}, 7500);
		//фраза экономии
		setTimeout(function(){$("#economy_phrase_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 9500);
		setTimeout(function(){$("#economy_phrase_words_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 10300);
		setTimeout(function(){$("#economy_phrase_1k.element-animated").css("font-size", "").css("left", "");}, 11300);
		//слайды
		setTimeout(function(){$("#economy_slides_box_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 11800);
		//кнопка
		setTimeout(function(){$("#order_btn_1k.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 12900);
		//разблокируем страницу
		//setTimeout(function(){$("body.element-animated").css("overflow", "").css("height", "");}, 13200);
		
		//стрелка вниз
		/*arrowBottwigleInterval = setInterval(function(){
			$("#price_1k_animate_bott.element-animated").toggleClass("animate-bottom-arrow-lower");
		}, 500);
		$("#price_1k_animate_bott.element-animated").on("mouseover", function(evnt){
			clearInterval(arrowBottwigleInterval);
		});
		$("#price_1k_animate_bott.element-animated").on("click", function(evnt){
			$('html, body').animate({
				scrollTop: 680
			}, '900', 'swing');
			$(this).hide();
		});
		setTimeout(function(){$("#price_1k_animate_bott.element-animated").addClass("transition-05-ease-out").css("opacity", "1");}, 13200);*/
	}
});
function prepare1kAimation () {
	if ( func_animationWasShown() ) {
		return;
	} 
	//блок ОДНОКОМНАТНОЙ квартиры
	//блокируем страницу до конца анимации 1комнт.
	//$("body").css("overflow", "hidden").css("height", "1100px").addClass("element-animated");
	//заголовок
	$("#price_example_h2_1k").css("opacity", "0").addClass("element-animated");
	$("#price_example_h2_words_1k").css("opacity", "0").addClass("element-animated");
	//окна
	$("#price_ex_win_bal_1k, #price_ex_win_2_1k, #win_capt_bal_1k, #win_capt_2_1k").addClass("element-animated");
	
	//весь правый блок за суммой
	$("#price_summ_box_1k").css("opacity", "0").addClass("element-animated");
	
	//текст цен перекупщика
	$("#dealer_price_text_1k").css("opacity", "0").css("width", "350px").css("font-size", "30px").css("color", "black").addClass("element-animated");
	//черта за ценой перекупщика
	$("#summ_del_dealer_pr_1k").css("width", "0%").addClass("element-animated");
	//цена перекупщика
	$("#dealer_price_1k").css("opacity", "0").addClass("element-animated").css("font-size", "50px").css("color", "black");
	//наша цена текст
	$("#our_price_text_1k").css("opacity", "0").addClass("element-animated");
	//наша цена
	$("#our_price_1k").css("opacity", "0").addClass("element-animated").removeClass("green-color");
	//фраза с экономией
	$("#economy_phrase_1k").css("opacity", "0").css("font-size", "25px").css("width", "400px").css("left", "50px").addClass("element-animated");
	//слова фразы с экономией
	$("#economy_phrase_words_1k").css("opacity", "0").addClass("element-animated");
	//слайды
	$("#economy_slides_box_1k").css("opacity", "0").addClass("element-animated");
	//кнопка
	$("#order_btn_1k").css("opacity", "0").addClass("element-animated");
	//стрелка вниз
	$("#price_1k_animate_bott").css("display", "block").css("opacity", "0").addClass("element-animated");
}

function preparePriceBlocksAimation () {
	if ( func_animationWasShown() ) {
		return;
	} 
	//скрываем блоки цен кроме первого
	$(".price-example-block, #price_page_block").not("#price_example_1k").css("opacity", "0").addClass("element-animated").addClass("transition-05-ease-out");
}