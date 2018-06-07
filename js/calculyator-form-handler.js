jQuery(function($){
	var calc_form = $("#calc_form"),
		inpt_phone = $("#calc_form_phone"),
		slct_okrug = $("#edit-submitted-okrug"),
		form_sbmt = $("#calc_form_sbmt"),
		form_loader = $("#calc_form_loader"),
		form_hid_text = $("#form_comment"),
		form_notif = $("#calc_form_notification"),
		change_event_sent = false;
	
	//скрываем поле с округом - пока все заявки на диспетчера
	slct_okrug.find('option[value=9]').prop('selected', true);
	slct_okrug.hide();
	
	form_sbmt.on("click", function(evnt) {
		evnt.preventDefault();
		calc_form.hide();
		form_loader.show();
		//отправляем запрос на сервер
		var post_data = "op=lead";
		post_data += ( "&wdg_phone=" + inpt_phone.val() );							// телефон
		post_data += ( "&wdg_okrug=" + slct_okrug.val() );							// ID округа
		post_data += ( "&pre_calc=" + encodeURIComponent( form_hid_text.val() ) );		// предварительный расчёт
		
		post_data += ( "&ep_url=" + encodeURIComponent( OkpWidget.WdgObj.ep ) );		// полный URL входа - достаём из объекта Виджета
		post_data += ( "&rfr_url=" + encodeURIComponent( OkpWidget.WdgObj.rfr ) );		// полный URL referrer-а - достаём из объекта Виджета
		post_data += ( "&actp_url=" + encodeURIComponent( window.location.href ) );		// текущий полный url
		post_data += ( "&wdg_phr=" + encodeURIComponent( "Расчёт окон в калькуляторе" ) );// выбранная для этого показа фраза
		post_data += "&wdg_phrt=uform";													// тип выбранной фразы для этого показа
		post_data += "&l_type=calc";// тип заявки
		
		$.ajax({
			type: "POST",
			url: '/core/widget/',
			data: post_data,
			success: sbmtHandler
		});
		
		function sbmtHandler (response_data, ajax_status, xhr_obj) {
			var response_obj = JSON.parse(response_data);
			form_loader.hide();
			
			if (response_obj.status == "error") {//--ответ об ошибке
			
				if (response_obj.errorcode == "phone") {//если был отправлен неправильный телефон
					form_notif.html(response_obj.text).show();
					//очищаем поле
					setTimeout(function(){//проверить - вероятно не будет работать из за области видимости
						//возвращаем форму
						form_notif.hide(200);
						calc_form.show(300);
					}, 3000);
				}
				
				if (response_obj.errorcode == "no_okrug") {//если округ не определился
					form_notif.html(response_obj.text).show();
					//очищаем поле
					setTimeout(function(){//проверить - вероятно не будет работать из за области видимости
						//возвращаем форму
						form_notif.hide(200);
						calc_form.show(300);
					}, 3000);
				}
					
					
				if (response_obj.errorcode == "spam_block") {//если блокировка по спаму
					form_notif.html('Ваша заявка уже принята.<br>Менеджер заказа свяжется с Вами в ближайшее время.').show();//response_obj.text
					//здесь можно сохранить информацию о блокировке и на последующих страницах не активировать формы
				}

				return;
				
			} //--конец условия для ответа об ошибке
			
			//по идее здесь нужно отправлять событие аналитики, когда пришёл ОК с сервера
			//GOOGLE-аналитика
			if (typeof ga == "function") ga('send', 'event', 'Calculator Form', 'Submit', slct_okrug.find("option:selected").text());
			ga('send', 'pageview', '/calculator-form-submit');
			//if (typeof _gaq == "object" && typeof _gaq.push == "function") _gaq.push(['_trackEvent', 'DialogWidget','DialogWidget Submit']);
			if (typeof yaCounter33657694 == "object") yaCounter33657694.reachGoal('Calculator submit');
			
			form_notif.html(response_obj.text).show();
		}
		return false;
		
	});
	inpt_phone.on('change', fireChangeEvent);
	slct_okrug.on('change', fireChangeEvent);
	
	function fireChangeEvent () {
		if (!change_event_sent) {
			change_event_sent = true;
			if (typeof ga == "function") ga('send', 'event', 'Calculator Form', 'Change');
		}
	}
	
	
	/*---------------------------------------------
					ЗАГОЛОВОК КАЛЬКУЛЯТОРА
	---------------------------------------------*/
	var saved_h1 = localStorage.getItem("prosto_calc_page_h1");
	if (saved_h1) {
		$("h1").html(saved_h1);
		console.log("заголовок есть. подмена.");
	} else {
		localStorage.setItem("prosto_calc_page_h1", $("h1").html());
		console.log("заголовок сохранён");
	}
	/*---------------------------------------------
					/заголовок калькулятора
	---------------------------------------------*/
	
	//скрываем иконку калькулятора
	$("#calc_icon_link").hide();
	
	form_loader.hide();
	return false;
	
});