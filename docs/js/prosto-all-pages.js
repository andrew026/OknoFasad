jQuery(function($){
/*	$("#head_callback").on('click', function(evnt){
		evnt.preventDefault();
		 OkpWidget.WdgObj.openWidget({
			wth: "",//заголовок в рабочее время
			wtp: "Менеджер в вашем районе перезвонит за 25 секунд и подробно проконсультирует по интересующим вопросам.",
			nwth: "",//заголовок в нерабочее время
			nwtp: "Менеджер в вашем районе перезвонит Вам и подробно проконсультирует по интересующим вопросам.",
			hint: "заявка на обратный звонок"
		}); 
		//OkpWidget.WdgObj.openWidget();//пока открываем как от трубки
	});
	
	$(".calc_line_widget").on('click', function(evnt){
		evnt.preventDefault();
		 OkpWidget.WdgObj.openWidget({
			wth: "",//заголовок в рабочее время
			wtp: "Менеджер перезвонит за 25 секунд и примет Вашу заявку",
			nwth: "",//заголовок в нерабочее время
			nwtp: "Менеджер перезвонит Вам и примет заявку на остекление",
			hint: "заявка на расчет"
		}); 
		//OkpWidget.WdgObj.openWidget();//пока открываем как от трубки
	});
	*/
	
	
	lightbox.option({
      'showImageNumberLabel': false
    })
	lightbox.init();
	
	
	//----------прыгающая кнопка при прокрутке------------
	// кешируем объекты и данные
	var win_obj = $(window),
		page_y = win_obj.scrollTop(),// текущее положение окна (перед очередной прокруткой)
		jump_timeout_id = 0,// ID таймаута сброса позиции кнопки
		phone_link_obj = $("a.jumping-btn"),// ID таймаута сброса позиции кнопки
		calc_link_obj = $("#calc_icon_link");// ID таймаута сброса позиции кнопки
	//текущее положение кнопки (сдвиг) НЕ РАБОТАЕТ, если определять здесь! (CSS ещё не успевают подгрузиться)
	//нужно определять в момент подгрузки файла стилей, что тоже не получится, поэтому определяем каждый раз

	win_obj.scroll(scrollJump);// запускаем прыгалку только если версия не мобильная
	function scrollJump (evnt) {//функция прыгалки
		var offst = win_obj.scrollTop() - page_y;//на сколько пикселей прокрутили в этот раз
		var norm_bottom = parseInt( phone_link_obj.css("bottom") ) ;//значение из файла стилей виджета
		
		phone_link_obj.css("bottom", norm_bottom + offst + "px");//прибавляем к нормальному положеиню кнопки сдвиг
		calc_link_obj.css( "bottom", ( norm_bottom + offst + 120) + "px" );
		//добавится инлайновый стиль, который не виден .css("bottom"), .css("bottom") возвращает всегда CSS из первичного файла или кода
		//но выглядит это так как мы хотели примерно )) так что И так сойдёт
		if (jump_timeout_id == 0) { // если таймер сброса позиции не установлен то устанавливаем
			jump_timeout_id = setTimeout(returnJump, 500);
		}
		
		page_y = win_obj.scrollTop();//обновляем текущую произицию страницы 
	}
	function returnJump () {//функция сброса позиции кнопки
		phone_link_obj.css("bottom", "");
		calc_link_obj.css("bottom", "");
		jump_timeout_id = 0;//сбрасываем ID таймера.
	}
	
	//---------------------------------------------------------
	
	
	//----------КНОПКА ВВЕРХ------------------------------------
	var up_div = $("#div-vverh");
	up_div.on("click", function() {
	  $('html, body').animate({
		scrollTop: 0
	  }, '1500', 'swing');
	  return false;
	});
	win_obj.scroll(function() {
	   if ($(this).scrollTop() >= 800) {
           $('#div-vverh').fadeIn();
       } else {
			$('#div-vverh').fadeOut();
       };
    });
	//----------/кнопка вверх------------------------------------
	
	
	//--------ПЕРЕНОС ФРАЗЫ В ЗАГОЛОВОК ЗАКАЗА-------------------
	$("a.zakaz-title-replace").on("click", function(evnt){
		var replace_phrase = $(this).data("zakaz-phrase");
		if (replace_phrase) {
			localStorage.setItem("prosto_zakaz_phrase", replace_phrase);
		}
	});
	//--------/перенос фразы в заголовок заказа------------------
	
	
	
});