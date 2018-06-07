var index_banner_int;
jQuery(function($){
	
	//анимации строятся на transition;
	//в теле страницы есть в конце - вызов функции, 
	//которая задаёт нужным элементам первичные значения
	
	//анимация каждого блока собрана в отдельной функции, которая выполняется 1 раз
	//при прокрутке до опр. места
	//Анимации
	if ( func_animationWasShown() ) {
		//здесь исправляем то, что устанавливалось в коде для анимации.
		/*------*/
		jQuery("h1").css("opacity", "1");
		jQuery("#sub_h1").css("opacity", "1");
		jQuery("#sub_h1_sub").css("opacity", "1");
		jQuery("#main_slide_btn").css("opacity", "1");
		/*------*/
		winPrlx($(".win-prlx-bg"));
	} else {
		func_animationWasShown(true);
		
		$(window).on( "scroll", animateBillSect);
		$(window).on( "scroll", animatePriceWindows);
		$(window).on( "scroll", animateManagersMap);
		$(window).on( "scroll", animateOrderSteps);
		$(window).on( "scroll", animateGarant);
		$(window).on( "scroll", animateDostav);
		//setTimeout(animateMainSlide, 700);
	}
	
	//swiper для главного баннера
	var indx_slider = $('#main_banner'),
		indx_slides = indx_slider.find('.index-banner-slide'),
		indx_sld_page_bulls = indx_slider.find('.pager-bullet');
	//console.log(indx_slides);
	//console.log(indx_sld_page_bulls);
	index_banner_int = setInterval(function(){
		//if ( !indx_slider.is(':hover') ) {
			rotateSlides(indx_slides, indx_sld_page_bulls);			
		//}
	},3500);
	_activateBullets(indx_sld_page_bulls, indx_slides);
	/*index_banner_swiper = new Swiper('.swiper-index-wrapper',{
		wrapperClass: 'swiper-index-wrapper',
		pagination: '.swiper-index-ban-pag',
		slideClass: 'index-banner-slide',
		paginationClickable: true,
		effect: 'fade',
		spaceBetween: 200
	});*/
	
	
	
	//анимация для блока с чеками
	function animateMainSlide (evnt) {
		
		$("h1.element-animated").css("opacity", "1");
		setTimeout(function(){$("#sub_h1.element-animated").css("opacity", "1");}, 1000);
		setTimeout(function(){$("#sub_h1_sub.element-animated").css("opacity", "1");}, 2000);
		setTimeout(function(){$("#main_slide_btn.element-animated").css("opacity", "1");}, 3500);
		//setTimeout(function(){$("#main_slide_img.element-animated").css("opacity", "1").css("left", "");}, 5000);
	}
	
	//анимация для блока с чеками
	function animateBillSect (evnt) {
		if ($(this).scrollTop() >= 300) {//this - window
			$(this).off("scroll", animateBillSect);//отвязываем обработчик от события
			
			//первым выходит чек справа
			$("#other_bill_paper_clip.element-animated").css("top", "0px");
			//потом чек просто окон
			setTimeout(function(){$("#top_bill_paper_clip.element-animated").css("top", "0px");}, 1100);
			//показывается стрелка от чека (анимация высоты обрезающего контейнера)
			setTimeout(function(){$("#bills_arrow_box.element-animated").css("height", "189px");}, 2300);
			//показываем весь блок со слайдами
			setTimeout(function(){$("#econom_slides_container.element-animated").css("opacity", "1");}, 3100);
			//показываем первый слайд добавлением класса
			setTimeout(function(){
				$("#econom_slides_container.element-animated #econom_slides_box .econom-slide:first-child").addClass("slide-active");
				var wiggle_interval;
				wiggle_interval = setInterval(function(){
					$("#econom_next").toggleClass("next-hovered").on("mouseenter", function(evnt){clearInterval(wiggle_interval); $(this).off("mouseenter")});
				}, 500);
				$("#econom_next").data("wiggle", wiggle_interval);
			}, 3500);
		}
	}
	
	//анимация окон и цен
	function animatePriceWindows (evnt) {
		if ($(this).scrollTop() >= 1417) {//this - window 
			$(this).off("scroll", animatePriceWindows);//отвязываем обработчик от события
			
			$("#win_container.element-animated").css("opacity", "1"); // все окна
			//800 (transition 0.8s)
			winPrlx($(".win-prlx-bg"));// определена в prosto-func.js
			
			setTimeout(function(){
				$("span.cross-out-clip.element-animated").each(function(indx){
					var obj = $(this);
					setTimeout(function(){obj.css("width", "100%");}, indx*600);
				});
			}, 800);
			
			setTimeout(function(){
				$("div.prosto-price-box.element-animated").css("opacity", "1").css("bottom", "");
				
				$("span.prosto-our-price.element-animated").each(function(indx){
					var obj = $(this);
					setTimeout(function(){
						nakrutka(obj, 100, "green-color", 221, true, function(box){// определена в prosto-func.js
							box.siblings(".replace-rub-sym.element-animated").addClass("green-color");
						});
					}, 900);
				});
			}, 2600);
		}
	}
	
	//функция анимации карты
	function animateManagersMap (evnt) {
		if ($(this).scrollTop() >= 2230) {//this - window
			clearInterval($("#econom_next").data("wiggle"));//отключаем болтание сладера
			$(this).off("scroll", animateManagersMap);//отвязываем обработчик от события
			
			$("#managers_map.element-animated").css("right", "").css("opacity", "1"); // ФОТО менеджера
			//накрутка менеджеров
			nakrutka($("#bolee_text.element-animated #men_count"), 40, "green-color");
			//большие слова появляются позже чем начинается накрутка счётчика...
			setTimeout(function(){$("#bolee_text.element-animated").css("opacity", "1");}, 300);
			//стрелка
			setTimeout(function(){$("#manager_arrow.element-animated").css("width", "125px");}, 2000);
			//пояснение более часа...
			setTimeout(function(){$("#one_hour_text.element-animated").css("opacity", "1");}, 2900);
			//цвет не хочет анимироваться
		}
	}
	
	//функция анимации процесса заказа
	function animateOrderSteps (evnt) {
		if ($(this).scrollTop() >= 2760) {//this - window
			$(this).off("scroll", animateOrderSteps);//отвязываем обработчик от события
			
			$("div.order-step.element-animated").each(function(indx){
				var obj = $(this);
				setTimeout(function(){obj.css("opacity", "1");}, indx*500);
			});
		}
	}
	//функция анимации СУММЫ и ГАРАНТИИ после процесса заказа
	function animateGarant (evnt) {
		if ($(this).scrollTop() >= 3090) {//this - window
			$(this).off("scroll", animateGarant);//отвязываем обработчик от события
			$("#down_summ.element-animated").css("height", "57px"); // сумма
			//800 (transition 0.8s)
			
			
			//большие слова появляются вместе с накруткой лет...
			setTimeout(function(){$("#garant_text.element-animated").css("opacity", "1");}, 800);
			//накрутка лет гарантии
			setTimeout(function(){nakrutka($("#garant_years.element-animated"), 200, "green-color" );}, 800);
			//1600
			setTimeout(function(){$("#garant_img.element-animated").css("right", "0").css("opacity", "1");}, 2000); // картинка
			//3400
			//пояснение гарантии...
			setTimeout(function(){$("#garant_sub_text.element-animated").css("opacity", "1");}, 2600);
		}
	}
	

	
	
	//функция анимации блока УСПЕЕМ ЗА НЕДЕЛЮ
	function animateDostav (evnt) {
		if ($(this).scrollTop() >= 3700) {//this - window
			$(this).off("scroll", animateDostav);//отвязываем обработчик от события
			
			$("#dost_img.element-animated").css("left", "").css("opacity", "1").css("height", "370px"); // машина приехала
			//800 (transition 0.8s)
			
			//большие слова появляются...
			setTimeout(function(){$("#dost_text.element-animated").css("opacity", "1");}, 800);
			//1600
			setTimeout(function(){$("#dost_sub_text.element-animated").css("top", "").css("opacity", "1");}, 1200); // картинка
		}
	}
	
	
	
	var econom_slides = $("div.econom-slide");
	
	$("#econom_next").on("click", function(evnt){
		rotateSlides (econom_slides); // определена в prosto-func.js
	});
	
});

function prepareMainPageAnimation () {
	//анимация должна показываться только при первом входе на страницу
	//сохораняем массив с урлами, на которых мы уже показывали анимацию.
	
	if ( func_animationWasShown() ) {
		console.log('no aminate "' + location.pathname + '"');
		return;
	} else {
		console.log('animate');
	}
	//Задаём первоначальные значения для всех элементов с анимацией.
	//главный слайд
	
	
	jQuery("h1").css("opacity", "0").addClass("element-animated");
	jQuery("#sub_h1").css("opacity", "0").addClass("element-animated");
	jQuery("#sub_h1_sub").css("opacity", "0").addClass("element-animated");
	jQuery("#main_slide_btn").css("opacity", "0").addClass("element-animated");
	//jQuery("#main_slide_img").css("opacity", "0").css("left","120px").addClass("element-animated");
	
	//------------ЧЕКИ И СЛАЙДЫ ------------
	//чеки
	jQuery("#top_bill_paper_clip").css("top", "-380px").addClass("element-animated");
	jQuery("#other_bill_paper_clip").css("top", "-490px").addClass("element-animated");
	//стрелка
	jQuery("#bills_arrow_box").css("height", "0px").addClass("element-animated");
	//слайды с экономией (скрываем весь блок и первый слайд)
	jQuery("#econom_slides_container").css("opacity", "0").addClass("element-animated").find("#econom_slides_box .econom-slide:first-child").removeClass("slide-active");
	
	//------------БЛОК С МЕНЕДЖЕРОМ ------------
	//карта
	jQuery("#managers_map").css("opacity", "0").css("right", "-200px").addClass("element-animated");
	//большой текст
	jQuery("#bolee_text").css("opacity", "0").addClass("element-animated");
	//число менеджеров
	jQuery("#men_count").removeClass("green-color").addClass("element-animated");
	// в течении часа
	jQuery("#one_hour_text").css("opacity", "0").addClass("element-animated");
	jQuery("#manager_arrow").css("width", "0px").addClass("element-animated");
	
	//------------ЭТАПЫ ЗАКАЗА ------------
	//этапы
	jQuery("div.order-step").css("opacity", "0").addClass("element-animated");
	// сумма
	jQuery("#down_summ").css("height", "0px").addClass("element-animated");
	// заголовок гарантии
	jQuery("#garant_text").css("opacity", "0").addClass("element-animated");
	// годы гарантии
	jQuery("#garant_years").removeClass("green-color").addClass("element-animated");
	// подзаголовок гарантии
	jQuery("#garant_sub_text").css("opacity", "0").addClass("element-animated");
	// картинка гарантии
	jQuery("#garant_img").css("opacity", "0").css("right", "100px").addClass("element-animated");
	
	//------------ЦЕНЫ ------------
	//все окна
	jQuery("#win_container").css("opacity", "0").addClass("element-animated");
	//зачёркивание
	jQuery("span.cross-out-clip").css("width", "0%").addClass("element-animated");
	//наша цена
	jQuery("div.prosto-price-box").css("opacity", "0").css("bottom", "50px").addClass("element-animated");
	//накрутка нашей цены
	jQuery(".prosto-our-price").removeClass("green-color").addClass("element-animated");
	jQuery("#prosto_our_price_5500").text("8 000");
	jQuery("#prosto_our_price_8500").text("12 000");
	jQuery("#prosto_our_price_11500").text("16 000");
	
	
	jQuery(".prosto-price span.replace-rub-sym").removeClass("green-color").addClass("element-animated");
	//--------УСПЕЕМ ЗА НЕДЕЛЮ-----
	//машина
	jQuery("#dost_img").css("opacity", "0").css("left", "200px").css("height", "330px").addClass("element-animated");
	//фраза
	jQuery("#dost_text").css("opacity", "0").addClass("element-animated");
	//фраза
	jQuery("#dost_sub_text").css("opacity", "0").css("top", "80px").addClass("element-animated");
}

