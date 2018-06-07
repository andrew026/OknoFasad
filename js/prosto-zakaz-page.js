/*
Файл для страницы заказа
*/
var mapHandrl,
	formHandlr;
jQuery(function($){
	mapHandrl = new GMapHandler.MapHndlr();//обработчик карты
	formHandlr = new GMapHandler.OrderFormHandler();//обработчик формы
	mapHandrl.initOrderMap(false, formHandlr);
	
	/* OkpWidget.WdgObj.specialKeeping({
		wth: "Самый быстрый замер в Москве!",
		wtp: "Закажите замер сегодня и наслаждайтесь новыми окнами через 7 дней! Менеджер замера перезвонит за 25 секунд",
		nwth: "",
		nwtp: "Закажите замер сегодня и наслаждайтесь новыми окнами через 7 дней!",
		hint: "заявка со страницы заказа"
	}); */
	
	/*
		Прокрутка страницы до заголовка
	*/
	
	setTimeout(function(){
		$('html, body').animate({
			scrollTop: 170
		  }, 1000, 'swing');
	}, 800);
	
	
	//--------ПЕРЕНОС ФРАЗЫ В ЗАГОЛОВОК ЗАКАЗА-------------------
	var replace_phrase = localStorage.getItem("prosto_zakaz_phrase");
	if (replace_phrase) {
		$("span.replace-zakaz-word").html(replace_phrase);
		localStorage.removeItem("prosto_zakaz_phrase");
	}
	//--------/перенос фразы в заголовок заказа------------------
	
});