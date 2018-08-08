$(document).ready(function(){
	
	var calc_storage=$.localStorage;
	var calc_storage_write=false;
	
	var selected_profile=0;
	
	// Профили для конструктора характеристик
	var profile=[];
	
	// Название, коэффициент цены
	profile[0]=['Окна ЭVOnorm<br>Профиль VEKA Euroline (60 мм) + теплопакет 2.0 EVO с теплой рамкой (30 мм)',1.18,'ЭVOnorm'];
	profile[1]=['Окна ЭVOnorm<br>Профиль VEKA Euroline (60 мм) + теплопакет 2.0 EVO с теплой рамкой (30 мм)',1.18,'ЭVOnorm'];
	profile[2]=['Окна ЭVOnorm<br>Профиль VEKA Euroline (60 мм) + теплопакет 2.0 EVO с теплой рамкой (30 мм)',1.18,'ЭVOnorm'];
	profile[3]=['Окна Классик<br>Профиль VEKA WHS (72 мм) + теплопакет 2.0 EVO  с теплой рамкой (36 мм)',1.4,'Классик'];
	profile[4]=['Окна Идеал<br>Профиль VEKA WHS (72 мм) + мультифункциональный стеклопакет с теплой рамкой (40 мм)',1.5,'Идеал'];
	profile[5]=['Окна Престиж<br>Профиль VEKA Softline (82 мм) + мультифункциональный теплопакет (44 мм)',2,'Престиж'];
	profile[6]=['Окна Элит<br>Профиль VEKA Alphaline (90 мм) + мультифункциональный теплопакет (42 мм)',2.5,'Элит'];
	
	// Название, коэффициент цены
	profile[0]=['Окна VEKA WHS 60<br><br>Профиль VEKA WHS (60 мм) + стеклопакет (до 32 мм)',1,'VEKA WHS 60','Профиль Veka WHS с толщиной рамы 60мм и стеклопакетом до 32мм является недорогим решением, тем не менее соответствующим всем международным и российским стандартам качества и защиты.'];
	
	profile[1]=['Окна VEKA WHS 60<br><br>Профиль VEKA WHS (60 мм) + стеклопакет (до 32 мм)',1,'VEKA WHS 60','Профиль Veka WHS с толщиной рамы 60мм и стеклопакетом до 32мм является недорогим решением, тем не менее соответствующим всем международным и российским стандартам качества и защиты.'];

	profile[2]=['Окна VEKA WHS HALO 72<br><br>Профиль VEKA WHS Halo (72 мм) + теплопакет (до 32 мм)',1.37,'VEKA WHS HALO 72','Профиль Veka WHS является совместным «детищем» немецких и английских специалистов. Главным достоинством профиля Века ВХС является ценовая доступность при сохранении высоких качественных параметров.'];
	profile[3]=['Окна VEKA EUROLINE<br><br>Профиль VEKA Euroline (58 мм) + замкнутое армирование + теплопакет (до 32 мм)',1.6,'VEKA EUROLINE','Универсальный профиль для изготовления оконных и дверных систем с широкими функциональными возможностями. Veka Euroline является оптимальным решением для тех, кто ищет высокое качество по доступной цене.'];
	
	profile[4]=['Окна VEKA SOFTLINE<br><br>Профиль VEKA Softline (70 мм) + замкнутое армирование + теплопакет (до 42 мм)',1.88,'VEKA SOFTLINE','Оконные системы из пятикамерного профиля Veka Softline могут эффективно эксплуатироваться в климатических зонах с низкими температурами: сорокоградусные морозы считаются штатной рабочей температурой для окон Софтлайн от Veka.'];
	
	profile[5]=['Окна VEKA SOFTLINE 82<br><br>Профиль VEKA Softline (82 мм) + мультифункциональный теплопакет (до 52 мм)',2.97,'VEKA SOFTLINE 82','Инновационный профиль от Veka с повышенными характеристиками теплосбережения и звукоизоляции в сочетании с элегантным дизайном. Veka SOFTline 82 - профиль премиум класса.'];
	
	profile[6]=['Окна VEKA ALPHALINE<br><br>Профиль VEKA Alphaline (90 мм) + мультифункциональный теплопакет (до 50 мм)',4.44,'VEKA ALPHALINE','Эксклюзивная система высококачественных энергоэффективных профилей Veka ALPHAline имеет превосходный дизайн, многокамерное строение и большую толщину профиля, что обеспечивает высокие потребительские качества и великолепный внешний вид.'];
	
	var options_hints=[];
	
	options_hints[1]=[];
	options_hints[1][5]='стандартный вариант для городских квартир, не имеет особых преимуществ, зато стоит недорого';
	options_hints[1][6]=options_hints[1][5];
	options_hints[1][7]=options_hints[1][5];
	options_hints[1][8]=options_hints[1][5];
	options_hints[1][9]='улучшенный стеклопакет позволит лучше сохранять тепло зимой и прохладу летом';
	options_hints[1][10]=options_hints[1][9];
	options_hints[1][11]=options_hints[1][9];
	options_hints[1][12]='применение замкнутого армирования профиля защитит Вашу квартиру от холода даже в сложных условиях';
	options_hints[1][13]=options_hints[1][12];
	options_hints[1][14]=options_hints[1][13];
	options_hints[1][15]='этот вариант подойдет для холодных зим и жаркого лета, а также остекления загородного дома';
	options_hints[1][16]=options_hints[1][15];
	options_hints[1][17]=options_hints[1][15];
	options_hints[1][18]='профиль и теплопакет высшего качества справятся с любыми самыми сложными условиями зимой и летом';
	options_hints[1][19]=options_hints[1][18];
	options_hints[1][20]=options_hints[1][18];
	
	options_hints[2]=[];
	options_hints[2][5]='подойдет для окон выходящих в тихий двор и летних загородных домов с тихими соседями';
	options_hints[2][6]=options_hints[2][5];
	options_hints[2][7]=options_hints[2][5];
	options_hints[2][8]=options_hints[2][5];
	options_hints[2][9]='увеличенный стеклопакет и дополнительные камеры в профиле защитят от шума даже окна выходящие на городскую улицу';
	options_hints[2][10]=options_hints[2][9];
	options_hints[2][11]=options_hints[2][9];
	options_hints[2][12]='дополнительная защита от постороннего шума даже в случае выхода окон на шумную дорогу';
	options_hints[2][13]=options_hints[2][12];
	options_hints[2][14]=options_hints[2][13];
	options_hints[2][15]='стеклопакет и профиль с множеством воздушных камер сохранит тишину и покой в сложных условиях - например рядом с оживленной трассой или стройкой';
	options_hints[2][16]=options_hints[2][15];
	options_hints[2][17]=options_hints[2][15];
	options_hints[2][18]='никакие внешние шумы не будут вас больше беспокоить благодаря лучшим технологиям изготовления профиля, стеклопакета и правильного монтажа';
	options_hints[2][19]=options_hints[2][18];
	options_hints[2][20]=options_hints[2][18];
	
	options_hints[3]=[];
	options_hints[3][5]='стандартное решение для остекления квартиры или загородного дома';
	options_hints[3][6]=options_hints[3][5];
	options_hints[3][7]=options_hints[3][5];
	options_hints[3][8]=options_hints[3][5];
	options_hints[3][9]='применение iСтекла в конструкции стеклопакета сделает ваш дом светлее, при этом не перегревая его';
	options_hints[3][10]=options_hints[3][9];
	options_hints[3][11]=options_hints[3][9];
	options_hints[3][12]='уменьшенная ширина стенок профиля увеличит площадь остекления на 10-15% пропуская больше естественного света в ваш дом';
	options_hints[3][13]=options_hints[3][12];
	options_hints[3][14]=options_hints[3][13];
	options_hints[3][15]='применение уменьшенного профиля со специальными просветленными стеклами наполнит светом вам дом, защитив его от вредных ультрафиолетовых лучей';
	options_hints[3][16]=options_hints[3][15];
	options_hints[3][17]=options_hints[3][15];
	options_hints[3][18]='элегантный и красивый профиль высшего качества вместе с умным стеклопакетом позволит вам насладиться солнечным светом в полной мере, не перегревая дом';
	options_hints[3][19]=options_hints[3][18];
	options_hints[3][20]=options_hints[3][18];
	
	var active_slider=0;
	
	// Скролл при открытии страницы
	$('html, body').delay(100).animate({
        scrollTop: ($('.step-1').offset().top-270) // поправка на шапку -90 (было -80)
    }, 1000);
    
    //calc_storage.removeAll();
    
    var calc_loaded=false;
    
    function load_storage(){
    	if(calc_storage.isEmpty('calc_last_step')){
    		//calc_storage.removeAll();
    		calc_storage.set('calc_last_step','1');
    		calc_storage_write=true;
    		setTimeout(function(){ activate_step($('.step-1')); }, 2000);
    	}else{
    		calc_storage_write=false;
    		
	    	setTimeout(function(){ activate_step($('.step-'+calc_storage.get('calc_last_step'))); }, 1000);
	    	
	    	if(!calc_storage.isEmpty('calc_step.0.v1.val')){
	    		$('.step-0 #'+calc_storage.get('calc_step.0.v1.val')).trigger('click');
	    		$('.step-0').find('[data-check="'+calc_storage.get('calc_step.0.v1.val')+'"]').addClass('active_selector');
	    		$('.step-0').removeClass('calculator15_invalid_step');
	    	}
	    	
	    	
	    	if(!calc_storage.isEmpty('calc_step.1.v1.val')){
	    		$('.step-1 #'+calc_storage.get('calc_step.1.v1.val')).trigger('click');
	    		$('.step-1').find('[data-check="'+calc_storage.get('calc_step.1.v1.val')+'"]').addClass('active_selector');
	    		$('.step-1').removeClass('calculator15_invalid_step');
	    	}
	    	
	    	if(!calc_storage.isEmpty('calc_win_array')){
				
				$('.win_price_window:not(:first-child)').remove();
				
				calc_storage.get('calc_win_array').forEach(function(item, i, arr) {
					if(i>0)$('.win_price_add').trigger('click');
					//alert(item.wintype);
					
					$('.win_price_window').eq(i).find('.win_price_selector select').val(item.wintype).trigger('change');
					$('.win_price_window').eq(i).find('.sizex').val(item.sizex);
					$('.win_price_window').eq(i).find('.sizey').val(item.sizey);

					//alert(parseInt(item.s2));
					$('.win_price_window').eq(i).find('.win_price_opens_1_check').prop('checked', parseInt(item.s1)).trigger('change');
					$('.win_price_window').eq(i).find('.win_price_opens_2_check').prop('checked', parseInt(item.s2)).trigger('change');
					$('.win_price_window').eq(i).find('.win_price_opens_3_check').prop('checked', parseInt(item.s3)).trigger('change');
					
				});
	
	    		$('.step-2').removeClass('calculator15_invalid_step');
	    	}
	    	
	    	if(!calc_storage.isEmpty('calc_step.3.v1.val')){
	    		
	    		if(calc_storage.get('calc_step.3.v1.val')!='sacce1v3'){
		    		$('.calculator15_step_acc_1 .calculator15_step_acc_add').hide();
		    		$('.calculator15_step_acc_1').closest('.calculator15_step_acc').css('height','581px');
		    		$('#'+calc_storage.get('calc_step.3.v1.val')).trigger('click');
		    		//$('.calculator15_step_acc_1').closest('.calculator15_step_acc').find('.form_group_add input').eq(0).val(calc_storage.get('calc_step.3.v1.length'));
		    		$('.acc_slider_1').slider('value',calc_storage.get('calc_step.3.v1.length'));
		    		$('.calculator15_step_acc_1').closest('.calculator15_step_acc').find('.acc_color').eq(calc_storage.get('calc_step.3.v1.color')).trigger('click');
	    		}
	    		
	    		if(calc_storage.get('calc_step.3.v2.val')!='sacce2v2'){
		    		$('.calculator15_step_acc_2 .calculator15_step_acc_add').hide();
		    		$('.calculator15_step_acc_2').closest('.calculator15_step_acc').css('height','581px');
		    		$('#'+calc_storage.get('calc_step.3.v2.val')).trigger('click');
		    		//$('.calculator15_step_acc_2').closest('.calculator15_step_acc').find('.form_group_add input').eq(0).val(calc_storage.get('calc_step.3.v2.length'));
		    		$('.acc_slider_2').slider('value',calc_storage.get('calc_step.3.v2.length'));
		    		$('.calculator15_step_acc_2').closest('.calculator15_step_acc').find('.acc_color').eq(calc_storage.get('calc_step.3.v2.color')).trigger('click');
	    		}
	    		
	    		if(calc_storage.get('calc_step.3.v3.val')!='sacce3v2'){
		    		$('.calculator15_step_acc_3 .calculator15_step_acc_add').hide();
		    		$('.calculator15_step_acc_3').closest('.calculator15_step_acc').css('height','581px');
		    		$('#'+calc_storage.get('calc_step.3.v3.val')).trigger('click');
		    		//$('.calculator15_step_acc_3').closest('.calculator15_step_acc').find('.form_group_add input').eq(0).val(calc_storage.get('calc_step.3.v3.length'));
		    		$('.acc_slider_3').slider('value',calc_storage.get('calc_step.3.v3.length'));
		    		$('.calculator15_step_acc_3').closest('.calculator15_step_acc').find('.acc_color').eq(calc_storage.get('calc_step.3.v3.color')).trigger('click');
	    		}
	    		
	    		$('.step-3').removeClass('calculator15_invalid_step');
	    	}
	    	
	    	if(!calc_storage.isEmpty('calc_step.5.v1.val')){
	    	
	    		$('#'+calc_storage.get('calc_step.5.v1.val')).trigger('click');
	    		$('#'+calc_storage.get('calc_step.5.v2.val')).trigger('click');
	    		$('#'+calc_storage.get('calc_step.5.v3.val')).trigger('click');
	    		
	    		$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().find('input').eq(0).val(calc_storage.get('calc_step.5.v1.length'));    	
	    		$('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val(calc_storage.get('calc_step.5.v2.length'));    		
	    	
	    	$('.step-5').removeClass('calculator15_invalid_step');
	    	}
	    	
	    	calc_storage_write=true;
    	}  
		
		calc_loaded=true;
    }
    
    // Добавление нового окна
	
	$('.win_price_add').on('click',function(){
		original=$('.win_price_window').eq(0);
		clone=original.clone(true);
		clone.hide();
		clone.insertBefore($('.win_price_add'));
		//clone.show('slide', {direction: 'left'}, 1000);
		clone.css('width','0%').show().animate({'width':'33%'},1000);
		clone.find('.win_price_selector select').val('2');
		clone.find('.win_price_selector select').trigger('change');
		clone.find('.win_price_opens_1_check').prop('checked', true);
		clone.find('.win_price_opens_2_check').prop('checked', false);
		clone.find('.win_price_opens_3_check').prop('checked', false);
		
		clone.find('.win_price_opens_1_check').trigger('change');
		clone.find('.win_price_opens_2_check').trigger('change');
		clone.find('.win_price_opens_3_check').trigger('change');
	});

	
	// Удаление окна
	
	$('.win_price_delete').on('click',function(){
		if($('.win_price_window').length>1){
			original=$(this).closest('.win_price_window');
			original.animate({'width':'0%'},1000,"linear",function(){
				 $(this).remove();
				 });
		}else{
			alert('Нельзя удалить последнее окно');
		}
		
		return false;
		
	});
	

	
    $('.calculator15_step_windows_selector > div').on('click',function(){
    	$('#'+$(this).data('check')).click();
    	$('.calculator15_step_windows_selector > div.active_selector').removeClass('active_selector');
    	$(this).addClass('active_selector');
    	activate_step($(this).closest('.calculator15_step').next());
    });
    
    $('.calculator15_step_dom_selector > div').on('click',function(){
    	$('#'+$(this).data('check')).click();
    	$('.calculator15_step_dom_selector > div.active_selector').removeClass('active_selector');
    	$(this).addClass('active_selector');
    	activate_step($(this).closest('.calculator15_step').next());
    });
    
    ga('send', 'pageview', '/calculator-step-0');
	
	// Активация следующего шага
	$('.calculator15_next_step').on('click',function(){
		activate_step($(this).parent().next());
	});
	
	// Активация выбранного шага, если он доступен
	$('.calculator15_step_header').on('click',function(){
		if(!($(this).parent().hasClass('calculator15_active_step')) && !($(this).parent().hasClass('calculator15_invalid_step'))){
			activate_step($(this).parent());
		}
	});
	
	
	
	
	// Скроллер для прокрутчика окон
	$('.calc15_arrow_left').on('click',function(){ 
		if($('.active_window').prev('.win_price_window').is(":visible")) $('.active_window').prev('.win_price_window').find('.win_price_params a').trigger('click');
	});
	
	$('.calc15_arrow_right').on('click',function(){
		if($('.active_window').next('.win_price_window').is(":visible")) $('.active_window').next('.win_price_window').find('.win_price_params a').trigger('click');
	});
		
	// Активатор пунктов доставки и монтажа

	$('.calculator15_step_delivery input[type="radio"]').on('change',function(){
		$(this).parent('.form_group').find('.form_group_add').hide();
		if($(this).is(":checked")){
			if($(this).next().next().hasClass('form_group_add')){
				$(this).next().next().show();
				$(this).next().next().find('input').focus();
			}
			switch($(this).attr('id')){
				case 's4e1v4':
				case 's4e2v1':
				case 's4e3v3':
				{
					$(this).closest('.calculator15_step_delivery').find('img').addClass('desaturate');
				};break;
				default:
				{
					$(this).closest('.calculator15_step_delivery').find('img').removeClass('desaturate');
				}
			}
		}
		recalculate_win_price($('.win_price_block'));
	});
	
	$('#s4e3v3').trigger('change');
	
	// Активатор пунктов аксессуаров

	
	$('.calculator15_step_acc input[type="radio"]').on('change',function(){
		if($(this).is(":checked")){
			switch($(this).attr('id')){
				case 'sacce1v3':
				case 'sacce2v2': 
				case 'sacce3v2':
				{
					$(this).closest('.calculator15_step_acc').find('img').addClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.calculator15_acc_slider').addClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.calculator15_acc_ruller').addClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.form_group_add').addClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.calculator15_step_acc_indiv').addClass('desaturate');
				};break;
			
				default:
				{
					$(this).closest('.calculator15_step_acc').find('img').removeClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.calculator15_acc_slider').removeClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.calculator15_acc_ruller').removeClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.form_group_add').removeClass('desaturate');
					$(this).closest('.calculator15_step_acc').find('.calculator15_step_acc_indiv').removeClass('desaturate');
				}
			}
			switch($(this).attr('id')){
				case 'sacce1v1':$(this).closest('.calculator15_step_acc').find('.acc_color_lightdub').hide();break;
				case 'sacce1v2':$(this).closest('.calculator15_step_acc').find('.acc_color_lightdub').show();break;
			}
		}
		recalculate_win_price($('.win_price_block'));
	});
	
	$('#sacce1v3').trigger('change');
	$('#sacce2v2').trigger('change');
	$('#sacce3v2').trigger('change');
	
	$('.calculator15_step_acc').find('.calculator15_step_acc_indiv').removeClass('desaturate');
	
	// Разворачивание пунтктов опций
	$('.calculator15_step_acc_add').on('click',function(){
		$(this).closest('.calculator15_step_acc').animate({'height':'581px'},1000);
		$(this).hide('fade',1000);
		$(this).closest('.calculator15_step_acc').find('input[type="radio"]').eq(0).trigger('click');
	});
	
	// Переключение цветов с перекрасом
	$('.acc_color').on('click',function(){
		$(this).parent().find('.acc_color').removeClass('selected_color');
		$(this).addClass('selected_color');
		
		//$(this).closest('calculator15_step_acc').find('img').eq(0).hide();
		
		if($(this).data('brightness')){
			cssfilter($(this).closest('.calculator15_step_acc').find('img').eq(0),'hue-rotate('+$(this).data('hue')+'deg) saturate('+$(this).data('saturate')+'%) brightness('+$(this).data('brightness')+'%)');

		}
		
		recalculate_win_price($('.win_price_block'));
		
	});
	
	// Применение фильтра
	function cssfilter(object,filtervalue){
		object.css({
		   'filter'         : filtervalue,
		   '-webkit-filter' : filtervalue,
		   '-moz-filter'    : filtervalue,
		   '-o-filter'      : filtervalue,
		   '-ms-filter'     : filtervalue
		});
	}
	
	// Всплывающие подсказки
	
	$('.calc_hint').tooltipster({
        contentAsHTML: true,
        autoClose:true,
        //trigger: 'click',
    });	
    
	// Функция смены шага
	function activate_step(step){
	
		// Убираем редактирование окна, если оно активно
		if($('.win_price_edit').is(':visible')) $('.win_price_edit').remove();
		
		// Назначаем блоки текущего и желаемого шага
		var this_step=$('.calculator15_active_step');
		var next_step=step;
		var scroll_step=next_step.prev();
		
		//console.log(scroll_step.offset());
		
		// Заканчиваем не доделанную анимацию
		this_step.find('.calculator15_step_wrapper').stop( true, true );
		this_step.find('.red_button15').stop( true, true );
		next_step.find('.calculator15_step_wrapper').stop( true, true );
		next_step.find('.red_button15').delay(500).stop( true, true );
		$('html, body').stop( true, true );

		//Скрываем среднюю цену по Москве
		$('#calc_bill_sub_price').removeClass('sub-price-shown');
		
		// Пишем шаг в storage
		if(parseInt(calc_storage.get('calc_last_step'))<next_step.data('step')){
			if(calc_storage_write)calc_storage.set('calc_last_step',next_step.data('step'));
		}
		
		// Кастомные функции в зависимости от выбранного шага
		
		ga('send', 'event', 'Calculator', 'Go to step '+next_step.data('step') );
		
		switch(next_step.data('step')){
			case 2:{
				
					//ga('send', 'event', 'Calculator AB test', 'Go to step 2 - '+$('.calculator15').data('version'));
					
					if(this_step.hasClass('step-1')){
					
					//alert(this_step.hasClass('step-1'));
					
						$('.win_price_window:not(:first-child)').remove();
						
						if($('#s1v1').is(":checked")){
							for(i=1;i<1;i++){
								//$('.win_price_add').trigger('click');
							}
							
						}
						
						if(calc_storage_write)calc_storage.set('calc_step.1.v1.val',this_step.find('input:checked').attr('id')); 
						
						if($('#s1v2').is(":checked")){
							for(i=1;i<2;i++){
								$('.win_price_add').trigger('click');
							}
							
							$('.win_price_window').eq(1).find('.win_price_selector select').val('b').trigger('change');
						}
						
						if($('#s1v3').is(":checked")){
							for(i=1;i<3;i++){
								$('.win_price_add').trigger('click');
							}
							
							$('.win_price_window').eq(1).find('.win_price_selector select').val('3').trigger('change');
							$('.win_price_window').eq(2).find('.win_price_selector select').val('b').trigger('change');
						}
						
						if($('#s1v4').is(":checked")){
							for(i=1;i<4;i++){
								$('.win_price_add').trigger('click');
							}
							
							$('.win_price_window').eq(1).find('.win_price_selector select').val('3').trigger('change');
							$('.win_price_window').eq(2).find('.win_price_selector select').val('3').trigger('change');
							$('.win_price_window').eq(3).find('.win_price_selector select').val('b').trigger('change');
						}
						
						if($('#s1v5').is(":checked")){
							for(i=1;i<5;i++){
								$('.win_price_add').trigger('click');
							}
							
							$('.win_price_window').eq(2).find('.win_price_selector select').val('3').trigger('change');
							$('.win_price_window').eq(3).find('.win_price_selector select').val('3').trigger('change');
							$('.win_price_window').eq(4).find('.win_price_selector select').val('b').trigger('change');
						}
						
						$('.win_price_selector select').trigger('change');
					}
					
			}break;
			case 3:{
				if(next_step.hasClass('calculator15_invalid_step'))setTimeout(function(){ $( ".calculator15_option_slider" ).slider('value',7); },1500);
			}; break;
			case 6:{
				//if(next_step.hasClass('calculator15_invalid_step')){
					
					setTimeout(function(){ $('.bill-paper-clip').css('top','0px') },1500);
					$('.bill-price-summ').data('count-till',total_price);
					$('.bill-price-summ').data('count-from',total_price*3	);
					$('.bill-price-summ').text((total_price*3).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
					setTimeout(function(){ nakrutka ($('.bill-price-summ'), 10, '', Math.round(total_price/100), true, false) },1000);
					
					//показ средней цены по Москве с задержкой
					//setTimeout(function(){$('#calc_bill_sub_price').addClass('sub-price-shown');},3500);
					
					
					setTimeout(function(){ $('.final-step-form-arrow-box').css( "width", '150px' )},3500);//показываем стрелку
					setTimeout(function(){ $('.calculator15_step_final_form .dw-uform-phraze').css( "opacity", 1 )},4000);//показываем фразу
					setTimeout(function(){ $('.calculator15_step_final_form .dw-uform-phraze .sub-calc-pahrase').css( "opacity", 1 )},5500);//показываем фразу перезвоним
					
					if(!$('.calculator15_step_final_form span').is(':visible')){
						//фраза пока скрыта - показываем форму быстрее
						//setTimeout(function(){ $('.calculator15_step_final_form span').show( "bounce", { times: 5 }, 2000 )},2000);
						setTimeout(function(){ $('.calculator15_step_final_form form').slideDown( 1000 )},6500);
						setTimeout(function(){ $('.final-step-bg-present').css( "opacity", 1 )},8000);//подарок
					}
				//}
			}; break;
		}
		
		// Анимируем открытие нового шага
		next_step
			.addClass('calculator15_active_step')
			.removeClass('calculator15_inactive_step')
			.removeClass('calculator15_invalid_step')
			.find('.calculator15_step_wrapper').css('opacity',.3);				
		
		next_step.find('.calculator15_step_wrapper').slideDown(500).animate({'opacity':1},500);
		next_step.find('.red_button15').delay(500).fadeIn(200);	
		next_step.find('.calculator15_right_button').delay(500).fadeIn(200);	
		next_step.find('.calculator15_step_pretotal').delay(1000).fadeIn(200);
		
		// Анимируем скрытие текущего шага		
		this_step
			.removeClass('calculator15_active_step')
			.addClass('calculator15_inactive_step');
		
		this_step.find('.calculator15_step_wrapper').delay(200).slideUp(500).animate({'opacity':.3},500);
		this_step.find('.red_button15').fadeOut(200);
		this_step.find('.calculator15_right_button').fadeOut(200);
		
		this_step.find('.calculator15_step_pretotal').fadeOut(200);
		
		
		// Подкручиваем страницу к новому шагу
			
		if(!next_step.hasClass('step-0') && !next_step.hasClass('step-1')){
			$('html, body').delay(500).animate({
		        scrollTop: (scroll_step.offset().top+60)//поправка на высоту шапки -90 (было +51)      
		    }, 1000);
		   // console.log(scroll_step.offset().top);
		}
	    
	    ga('send', 'pageview', '/calculator-step-'+next_step.data('step'));
    
		recalculate_win_price($('.win_price_block'));
		
		
		
	}
	
	
	// Смена типа окна
	$('.win_price_selector select').on('change',function(){
		//alert($(this).is(':checked'));

		$(this).parents('.win_price_window').removeClass('win-2');
		$(this).parents('.win_price_window').removeClass('win-3');
		$(this).parents('.win_price_window').removeClass('win-b');
		$(this).parents('.win_price_window').addClass('win-'+$(this).val());
		
		switch($(this).val()){
			case '2':{
				$(this).parents('.win_price_window').data('sx',1330);
				$(this).parents('.win_price_window').data('sy',1410);
				//$(this).parents('.win_price_window').find('.win_price_window_name').eq(0).text('Двухстворчатое окно');
			};break;
			case '3':{
				$(this).parents('.win_price_window').data('sx',1880);
				$(this).parents('.win_price_window').data('sy',1410);
				//$(this).parents('.win_price_window').find('.win_price_window_name').eq(0).text('Трехстворчатое окно');
			};break;
			case 'b':{
				$(this).parents('.win_price_window').data('sx',2210);
				$(this).parents('.win_price_window').data('sy',2200);
				//$(this).parents('.win_price_window').find('.win_price_window_name').eq(0).text('Балкон');
			};break;

		}
		
		$(this).parents('.win_price_window').find('.size_x').val($(this).parents('.win_price_window').data('sx'));
		$(this).parents('.win_price_window').find('.size_y').val($(this).parents('.win_price_window').data('sy'));
		
		recalculate_win_price($(this).parents('.win_price_block'));
	});
	
	// Смена створок
	
	$('.win_price_opens > div').on('click',function(e){
		if(e.target != this) return;
		$(this).find('input').trigger('click'); 
	});
	
	$('.win_price_opens > div').hover(function(){
		$(this).closest('.win_price_window').find('.'+$(this).data('opens')).css('filter','brightness(80%)');
		$(this).closest('.win_price_window').find('.'+$(this).data('opens')).css('-webkit-filter','brightness(80%)');
	},function(){
		$(this).closest('.win_price_window').find('.'+$(this).data('opens')).css('filter','');
		$(this).closest('.win_price_window').find('.'+$(this).data('opens')).css('-webkit-filter','');
	});
	
	$('.win_price_opens > div > label').on('click',function(e){
		$(this).parent().trigger('click'); 
	});
	
	var window_matrix=[];
	window_matrix[0]=[];
	
	var xc=4, yc=7;
	
	// Пересчет стоимости окна
	var price,total_price;
	var xvalue=0;
	var pvalue=0;
	var svalue=0;
		
	function recalculate_win_price(block){
		price=0;
		var minx=0;var maxx=0;
		var miny=0;var maxy=0;
		var count=0;
		var active=false;
		var win_desc="";
		var win_type=0;
		
		var calc_win_array=[];
		
		//----------Блок цен опций и доставки под итогом----
		var sub_price_opt  = $('#calc_bill_sub_price > .bill-sub-price-string-opt').hide(),
			sub_price_opt_int = sub_price_opt.children('.bill-sub-price-summ'),
			sub_price_dost = $('#calc_bill_sub_price > .bill-sub-price-string-dost-mont').hide()
			sub_price_dost_text = sub_price_dost.children('.bill-sub-price-word'),
			sub_price_dost_int = sub_price_dost.children('.bill-sub-price-summ'),
			tot_pr_okno_word = $('#bill_price_okna_word');
			
		if ( block.find('.win_price_window').length == 1 ) {
			tot_pr_okno_word.text('окна');
		} else {
			tot_pr_okno_word.text('окон');
		}
		//console.log(block.find('.win_price_window').length);
		//----------блок цен опций и доставки под итогом----
			
		
		
		
		xvalue=0;
		pvalue=0;
		svalue=0;


		/*if($(".zakaz_raschet").hasClass('dw-uform-active') && DialogWidget.globalDW.checkWh()){
				win_desc="КЛИЕНТ БЫЛ АВТОМАТИЧЕСКИ СОЕДИНЕН С ОПЕРАТОРОМ\n\n";
			}else{
				win_desc="!!! ПОЗВОНИТЕ КЛИЕНТУ, АВТОМАТИЧЕСКОЕГО СОЕДИНЕНИЕЯ НЕ ПРОИЗВОДИЛОСЬ\n\n";	
			}*/
		
		var win_desc_visible='';
		var win_acc_visible='';
		$('.calculator15_step_cart').html('');
		block.find('.win_price_window').each(function(){
			var winprice=0;
			
			active=$(this).hasClass('active_window');
			if(active)$('.edit_params_error').html('');
			
				winprice=0;
				
				
				minx=0;
				miny=500;

				maxx=0;
				maxy=2400;
				
				if($(this).data('s1')==0){
					minx+=500;
					maxx+=1300;
				}else{
					minx+=500;
					miny=700;
					maxx+=1000;
				}
				
				if($(this).hasClass('win-3')){
					if($(this).data('s2')==0){
						minx+=500;
						maxx+=1300;
					}else{
						minx+=500;
						miny=700;
						maxx+=1000;
					}
				}
				
				if($(this).data('s3')==0){
					minx+=500;
					maxx+=1300;
				}else{
					minx+=500;
					miny=700;
					maxx+=1000;
				}
				
				if($(this).hasClass('win-b')){
					maxy+=1000;
					miny+=1000;
					
					minx+=700;
					maxx+=700;
				}
					
	
				if($(this).data('sx')<minx && active){
					$('.edit_params_error').html('Ширина такого окна не может быть меньше '+minx+' мм');
					$('.size_x').addClass('error');
				}
				
				if($(this).data('sx')>maxx && active){
					$('.edit_params_error').html('Ширина такого окна не может быть больше '+maxx+' мм');
					$('.size_x').addClass('error');
				}
				
				if($(this).data('sx')>=minx && $(this).data('sx')<=maxx && active)$('.size_x').removeClass('error');
				
				if($(this).data('sy')<miny && active){
					$('.edit_params_error').html('Высота такого окна не может быть меньше '+miny+' мм');
					$('.size_y').addClass('error');
				}
				
				if($(this).data('sy')>maxy && active){
					$('.edit_params_error').html('Высота такого окна не может быть больше '+maxy+' мм');
					$('.size_y').addClass('error');
				}
				
				if($(this).data('sy')>=miny && $(this).data('sy')<=maxy && active)$('.size_y').removeClass('error');
				
				if($(this).data('sx')>=minx && $(this).data('sx')<=maxx && $(this).data('sy')>=miny && $(this).data('sy')<=maxy){
				
					if($(this).hasClass('win-2')){
						winprice+=get_price($(this).data('s1'),$(this).data('sx')/2,$(this).data('sy'));
						winprice+=get_price($(this).data('s3'),$(this).data('sx')/2,$(this).data('sy'));
						win_type='2';
					
						
						//for(var i=0;i<parseInt($(this).find('.win_price_count15 span').text());i++){
							$('.calculator15_step_cart').append('<div class="win-2"><div class="win_price_window_img"><div class="img_s1 w'+$(this).data('s1')+'"></div><div class="img_s3 w'+$(this).data('s3')+'"></div></div>'+$(this).data('sx')+'x'+$(this).data('sy')+'мм</div>');
							win_desc+='Двухстворчатое окно '+$(this).data('sx')+'x'+$(this).data('sy')+'мм - ';
							win_desc_visible+='<b>Двухстворчатое окно</b> '+$(this).data('sx')+'x'+$(this).data('sy')+'мм<br>';
							if($(this).data('s1'))win_desc+='поворотно-откидная и ';else win_desc+='глухая и ';
							if($(this).data('s3'))win_desc+='поворотно-откидная створки';else win_desc+='глухая створки';
							win_desc+=' ('+(Math.round((winprice*profile[selected_profile][1])/100)*100)+' р)\n';
							
							xvalue+=parseInt($(this).data('sx'));
							pvalue+=parseInt($(this).data('sx'))*parseInt($(this).data('sy'));
							svalue+=parseInt($(this).data('sx'))*2+parseInt($(this).data('sy'))*2;
							
							
						//}
					}
					
					if($(this).hasClass('win-3')){
						winprice+=get_price($(this).data('s1'),$(this).data('sx')/3,$(this).data('sy'));
						winprice+=get_price($(this).data('s2'),$(this).data('sx')/3,$(this).data('sy'));
						winprice+=get_price($(this).data('s3'),$(this).data('sx')/3,$(this).data('sy'));
						
						win_type='3';
						
						//for(var i=0;i<parseInt($(this).find('.win_price_count15 span').text());i++){
							$('.calculator15_step_cart').append('<div class="win-3"><div class="win_price_window_img"><div class="img_s1 w'+$(this).data('s1')+'"></div><div class="img_s2 w'+$(this).data('s2')+'"></div><div class="img_s3 w'+$(this).data('s3')+'"></div></div>'+$(this).data('sx')+'x'+$(this).data('sy')+'мм</div>');
							win_desc+='Трехстворчатое окно '+$(this).data('sx')+'x'+$(this).data('sy')+'мм - ';
							win_desc_visible+='<b>Трехстворчатое окно</b> '+$(this).data('sx')+'x'+$(this).data('sy')+'мм<br>';
							if($(this).data('s1'))win_desc+='поворотно-откидная, ';else win_desc+='глухая, ';
							if($(this).data('s2'))win_desc+='поворотно-откидная и ';else win_desc+='глухая и ';
							if($(this).data('s3'))win_desc+='поворотно-откидная створки';else win_desc+='глухая створки';
							win_desc+=' ('+(Math.round((winprice*profile[selected_profile][1])/100)*100)+' р)\n';
							
								xvalue+=parseInt($(this).data('sx'));
								pvalue+=parseInt($(this).data('sx'))*parseInt($(this).data('sy'));
								svalue+=parseInt($(this).data('sx'))*2+parseInt($(this).data('sy'))*2;
						//}
					}
					
					if($(this).hasClass('win-b')){
						winprice+=get_price($(this).data('s1'),($(this).data('sx')-700)/2,$(this).data('sy')-1000);
						winprice+=get_price($(this).data('s3'),($(this).data('sx')-700)/2,$(this).data('sy')-1000);
						winprice+=get_price(1,700,$(this).data('sy'));
					
						win_type='b';
						
						//for(var i=0;i<parseInt($(this).find('.win_price_count15 span').text());i++){
							$('.calculator15_step_cart').append('<div class="win-b"><div class="win_price_window_img"><div class="img_s1 w'+$(this).data('s1')+'"></div><div class="img_s3 w'+$(this).data('s3')+'"></div></div>'+$(this).data('sx')+'x'+$(this).data('sy')+'мм</div>');
							win_desc+='Балконный блок '+$(this).data('sx')+'x'+$(this).data('sy')+'мм - ';
							win_desc_visible+='<b>Балконный блок</b> '+$(this).data('sx')+'x'+$(this).data('sy')+'мм<br>';
							
							if($(this).data('s1'))win_desc+='поворотно-откидная и ';else win_desc+='глухая и ';
							if($(this).data('s3'))win_desc+='поворотно-откидная створки';else win_desc+='глухая створки';
							win_desc+=' ('+(Math.round((winprice*profile[selected_profile][1])/100)*100)+' р)\n';	
							
							xvalue+=parseInt($(this).data('sx'))-700;
							svalue+=parseInt($(this).data('sx'))*2+parseInt($(this).data('sy'))*2;
							pvalue+=((parseInt($(this).data('sx'))-700)*(parseInt($(this).data('sy'))-1000))+700*(parseInt($(this).data('sy')));
						
					}
					
					calc_win_array[count]={
						wintype:win_type,
						sizex:$(this).data('sx'),
						sizey:$(this).data('sy'),
						s1:$(this).data('s1'),
						s2:$(this).data('s2'),
						s3:$(this).data('s3')
					}
					
					//console.log(calc_win_array[count]);
					
					price+=winprice;//(winprice*parseInt($(this).find('.win_price_count15 span').text()));
					//console.log(price);
					count+=1;//parseInt($(this).find('.win_price_count15 span').text());
					//console.log(price);
				}	
					
			});
			
		if(calc_storage_write)calc_storage.set('calc_win_array',calc_win_array);
		//alert(price,count);
		
		if(count>5)count=5;
		if(count>1)price=price*(1-.031*count);
		price=price*0.985;
		price=price*0.9;
		price=price*1.25;
		price=price*0.86;
		price=Math.round((price*profile[selected_profile][1])/100)*100;
		if(calc_storage_write)calc_storage.set('calc_price',price);
		$('.calculator15_step_pretotal span').text(price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
		$('.bill-price-summ').text((price*3).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
		$('.calculator15_total_price').text(price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")+' ₽');
		$('.montag_price').text((price*.20).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
		$('.otdelka_price').text((price*.10).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
		
		
		
		//win_desc+='Профиль: '+profile[selected_profile][2]+'\n';
		
		//строка с профелем отключена - убрали профиль с сайта.
		//win_desc_visible+='<b>Профиль:</b> '+profile[selected_profile][2]+'<br>';
		
		//Стоимость окон теперь вместо итога, под итогом подписана сумма опций и доставка+монтаж
		//win_desc_visible+='<h3>Стоимость окон: '+price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")+' ₽'+'</h3><br>';
		
		//win_desc+='Тип дома: ' + $('.calculator15_step_dom_selector .active_selector span').text() + '';
		
		win_desc+='<br><br>'+win_desc_visible;
		
		if(calc_storage_write)calc_storage.set('calc_step.0.v1.val',$('.calculator15_step_dom_selector .active_selector').data('check'));
		
		//win_desc+='\nПодоконники: ' + $('.calculator15_step_acc[data-id="1"] input:checked').next().text() + '';
		//win_desc+=$('.calculator15_step_acc[data-id="1"] .form_group_add').hasClass('desaturate')?'':' (глубина '+$('.calculator15_step_acc[data-id="1"] .form_group_add input').val()+' мм';  
		//win_desc+=$('.calculator15_step_acc[data-id="1"] .form_group_add').hasClass('desaturate')?'':', цвет '+$('.calculator15_step_acc[data-id="1"] .form_group_add .selected_color').text()+')';
		
		if(calc_storage_write)calc_storage.set('calc_step.3.v1.val',$('.calculator15_step_acc[data-id="1"] input:checked').attr('id')); 
		if(calc_storage_write)calc_storage.set('calc_step.3.v1.length',$('.calculator15_step_acc[data-id="1"] .form_group_add input').val()); 
		if(calc_storage_write)calc_storage.set('calc_step.3.v1.color',$('.calculator15_step_acc[data-id="1"] .acc_color').index($('.calculator15_step_acc[data-id="1"] .selected_color'))); 
		
		
		//win_desc+='\nОткосы: ' + $('.calculator15_step_acc[data-id="2"] input:checked').next().text() + '';
		//win_desc+=$('.calculator15_step_acc[data-id="2"] .form_group_add').hasClass('desaturate')?'':' (глубина '+$('.calculator15_step_acc[data-id="2"] .form_group_add input').val()+' мм';  
		//win_desc+=$('.calculator15_step_acc[data-id="2"] .form_group_add').hasClass('desaturate')?'':', цвет '+$('.calculator15_step_acc[data-id="2"] .form_group_add .selected_color').text()+')'; 
		
		if(calc_storage_write)calc_storage.set('calc_step.3.v2.val',$('.calculator15_step_acc[data-id="2"] input:checked').attr('id')); 
		if(calc_storage_write)calc_storage.set('calc_step.3.v2.length',$('.calculator15_step_acc[data-id="2"] .form_group_add input').val()); 
		if(calc_storage_write)calc_storage.set('calc_step.3.v2.color',$('.calculator15_step_acc[data-id="2"] .acc_color').index($('.calculator15_step_acc[data-id="2"] .selected_color'))); 
		
		//win_desc+='\nОтливы: ' + $('.calculator15_step_acc[data-id="3"] input:checked').next().text() + '';
		//win_desc+=$('.calculator15_step_acc[data-id="3"] .form_group_add').hasClass('desaturate')?'':' (глубина '+$('.calculator15_step_acc[data-id="3"] .form_group_add input').val()+' мм';  
		//win_desc+=$('.calculator15_step_acc[data-id="3"] .form_group_add').hasClass('desaturate')?'':', цвет '+$('.calculator15_step_acc[data-id="3"] .form_group_add .selected_color').text()+')'; 
		
		if(calc_storage_write)calc_storage.set('calc_step.3.v3.val',$('.calculator15_step_acc[data-id="3"] input:checked').attr('id')); 
		if(calc_storage_write)calc_storage.set('calc_step.3.v3.length',$('.calculator15_step_acc[data-id="3"] .form_group_add input').val()); 
		if(calc_storage_write)calc_storage.set('calc_step.3.v3.color',$('.calculator15_step_acc[data-id="3"] .acc_color').index($('.calculator15_step_acc[data-id="3"] .selected_color'))); 
		
		//win_desc+='\nДоставка: ' + $('.calculator15_step_delivery[data-id="1"] input:checked').next().text() + '';
		//win_desc+=$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().hasClass('form_group_add')?' (Расстояние от мкад: '+$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().find('input').eq(0).val()+' км)':'';                        
		
		if(calc_storage_write)calc_storage.set('calc_step.5.v1.val',$('.calculator15_step_delivery[data-id="1"] input:checked').attr('id'));
		if(calc_storage_write)calc_storage.set('calc_step.5.v1.length',$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().find('input').eq(0).val());
		
		//win_desc+='\nПодъем на этаж: ' + $('.calculator15_step_delivery[data-id="2"] input:checked').next().text() + '';
		//win_desc+=$('.calculator15_step_delivery[data-id="2"] input:checked').next().next().hasClass('form_group_add')?' (Этаж: '+$('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val()+')':'';   
		
		if(calc_storage_write)calc_storage.set('calc_step.5.v2.val',$('.calculator15_step_delivery[data-id="2"] input:checked').attr('id'));
		if(calc_storage_write)calc_storage.set('calc_step.5.v2.length',$('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val());                     
		                   
		//win_desc+='\nМонтаж: ' + $('.calculator15_step_delivery[data-id="3"] input:checked').next().text() + '\n';
		
		if(calc_storage_write)calc_storage.set('calc_step.5.v3.val',$('.calculator15_step_delivery[data-id="3"] input:checked').attr('id'));
		
		
		var win_acc_price=0;
		
		win_acc_visible+='<b>Подоконники:</b> ' + $('.calculator15_step_acc[data-id="1"] input:checked').next().text().replace(" ?","") + '';
		win_acc_visible+=$('.calculator15_step_acc[data-id="1"] .form_group_add').hasClass('desaturate')?'':'<br> ('+$('.calculator15_step_acc[data-id="1"] .form_group_add input').val()+' мм';  
		win_acc_visible+=$('.calculator15_step_acc[data-id="1"] .form_group_add').hasClass('desaturate')?'':', '+$('.calculator15_step_acc[data-id="1"] .form_group_add .selected_color').text()+')'; 
		
		if(!$('.calculator15_step_acc[data-id="1"] .form_group_add').hasClass('desaturate')){
		
			switch($('.calculator15_step_acc[data-id="1"] input:checked').attr('id')){
				case 'sacce1v2':win_acc_price+=xvalue/1000*($('.calculator15_step_acc[data-id="1"] .form_group_add input').val()*4.72);break;
				case 'sacce1v1':win_acc_price+=xvalue/1000*($('.calculator15_step_acc[data-id="1"] .form_group_add input').val()*1.75);break;
			}	
		}
		
		win_acc_visible+='<br><b>' + $('.calculator15_step_acc[data-id="2"] input:checked').next().text() + '</b>';
		win_acc_visible+=$('.calculator15_step_acc[data-id="2"] .form_group_add').hasClass('desaturate')?'':' ('+$('.calculator15_step_acc[data-id="2"] .form_group_add input').val()+' мм';  
		win_acc_visible+=$('.calculator15_step_acc[data-id="2"] .form_group_add').hasClass('desaturate')?'':', '+$('.calculator15_step_acc[data-id="2"] .form_group_add .selected_color').text()+')'; 
		
		if(!$('.calculator15_step_acc[data-id="2"] .form_group_add').hasClass('desaturate')){
			win_acc_price+=(svalue-xvalue)/1000*($('.calculator15_step_acc[data-id="2"] .form_group_add input').val()*.75);
		}
		
		win_acc_visible+='<br><b>' + $('.calculator15_step_acc[data-id="3"] input:checked').next().text() + '</b>';
		win_acc_visible+=$('.calculator15_step_acc[data-id="3"] .form_group_add').hasClass('desaturate')?'':' ('+$('.calculator15_step_acc[data-id="3"] .form_group_add input').val()+' мм';  
		win_acc_visible+=$('.calculator15_step_acc[data-id="3"] .form_group_add').hasClass('desaturate')?'':', '+$('.calculator15_step_acc[data-id="3"] .form_group_add .selected_color').text()+')'; 
		
		if(!$('.calculator15_step_acc[data-id="3"] .form_group_add').hasClass('desaturate')){
			win_acc_price+=(svalue-xvalue)/1000*($('.calculator15_step_acc[data-id="3"] .form_group_add input').val()*2.5);
		}
		
		//теперь стоимость окон - это итог, под ним будет подписана сумма опции и доставка+монтаж
		if(win_acc_price) { 
			sub_price_opt.show();
			sub_price_opt_int.text( Math.round(win_acc_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
		}
		//if(win_acc_price)win_acc_visible+='<h3>Стоимость опций: '+(Math.round(win_acc_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")+' ₽')+'</h3>';
		//win_desc+=win_acc_visible+'\n\n';
		
		var win_montag_price=0;
		var win_delivery_price=0;
		
		win_acc_visible+='<br><b>Доставка:</b> ' + $('.calculator15_step_delivery[data-id="1"] input:checked').next().text() + '';
		win_acc_visible+=$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().hasClass('form_group_add')?' (Расстояние от мкад: '+$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().find('input').eq(0).val()+' км)':'';    
		
		if($('.calculator15_step_delivery[data-id="1"] input:checked').next().next().hasClass('form_group_add')){
			win_delivery_price+=$('.calculator15_step_delivery[data-id="1"] input:checked').next().next().find('input').eq(0).val()*40;
		}
		                    
		win_acc_visible+='<br><b>Подъем на этаж:</b> ' + $('.calculator15_step_delivery[data-id="2"] input:checked').next().text() + '';
		win_acc_visible+=($('.calculator15_step_delivery[data-id="2"] input:checked').next().next().hasClass('form_group_add') && $('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val())?' (Этаж: '+$('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val()+')':'';                        
		
		if($('.calculator15_step_delivery[data-id="2"] input:checked').next().next().hasClass('form_group_add') && ($('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val()>1)){
			win_delivery_price+=($('.calculator15_step_delivery[data-id="2"] input:checked').next().next().find('input').eq(0).val()-1)*100*count;
		}
		
		                   
		win_acc_visible+='<br><b>' + $('.calculator15_step_delivery[data-id="3"] input:checked').next().text() + '</b>\n';
		
		switch($('.calculator15_step_delivery[data-id="3"] input:checked').attr('id')){
			case 's4e3v1':win_montag_price=1000*pvalue/1000000;break;
			case 's4e3v2':win_montag_price=890*pvalue/1000000;break;
		}
		
		var mtext='';
		
		
		// теперь текст с доставкой и монтажом находится под итогом
		// там заголовок не нужен
		//if(win_montag_price)mtext='<h3>Стоимость монтажа: ';
		//if(win_delivery_price)mtext='<h3>Стоимость доставки: ';
		//if(win_montag_price && win_delivery_price)mtext='<h3>Доставка и монтаж: ';
		if(win_montag_price)mtext='Стоимость монтажа';
		if(win_delivery_price)mtext='Стоимость доставки';
		if(win_montag_price && win_delivery_price)mtext='Доставка и монтаж';
		
		
		//стоимость опций и монтажа - теперь под итогом
		if(win_montag_price || win_delivery_price) {
			sub_price_dost.show();
			sub_price_dost_text.text(mtext);
			sub_price_dost_int.text( Math.round(win_delivery_price+win_montag_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") );
		}
		//if(win_montag_price || win_delivery_price)win_acc_visible+=mtext+(Math.round(win_delivery_price+win_montag_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")+' ₽')+'</h3>';
		
		win_desc+=win_acc_visible+'\n\n';
		
		$('.calculator15_step_order_list_windows').html(win_desc_visible);
		$('.calculator15_step_order_list_acc').html(win_acc_visible);
		
		//Теперь итог - сумма стоимости окон
		$('.calculator15_total_price').text((price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")+' ₽');
		//$('.calculator15_total_price').text((price+win_acc_price+win_montag_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")+' ₽');
		
		total_price=Math.round(price);
		//total_price=Math.round(price+win_acc_price+win_montag_price);
		
		//---------средняя цена по москве
		//var mos_price = Math.ceil((total_price*1.6)/100)*100;
		//$('#sub_price_summ').text(mos_price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
		//---------/средняя цена по москве
		
		$('#form_comment').val(win_desc);
		
		if(!calc_storage.isEmpty('calc_win_array')){calc_storage.set('calc_text',win_desc);}
		
		//$('.bill-paper-clip').closest('.calculator15_step_wrapper').show();
		//$('.bill-paper-clip').css('top',-$('.bill-paper-clip').height());
		//$('.bill-paper-clip').closest('.calculator15_step_wrapper').hide();
		//alert($('.bill-paper-clip').height());
		
		//alert(price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "));
	};
	
	// Слайдер для конструктора характеристик
    $( ".calculator15_option_slider" ).slider({range: "min",min:1,max:20,value:0,animate: true,change: option_slide, slide: option_slide  });
    
    $( ".calculator15_acc_slider" ).slider({range: "min",
    create: function(event, ui) {
            $(this).slider('option', 'max', $(this).data('smax'));
            $(this).slider('option', 'min', $(this).data('min'));
        },
       value:200,animate: true,change: acc_slide, slide: acc_slide  });
    
    function acc_slide(event,ui){
		//alert(ui.value);
		//$(this).next()('.form_group').css('opacity',.2);
		$(this).parent().find('.form_group_add input').eq(0).val(ui.value);
		
		//alert($(this).closest('.calculator15_step_acc').data('id'));
		switch($(this).closest('.calculator15_step_acc').data('id')){
		
			case 1: {
				$('.calculator15_step_acc_1').find('img').css('margin-left',(ui.value-150)/8-200);
			};break;
			
			case 2: {
				$('.calculator15_step_acc_2').find('img').eq(0).css({'margin-left':(ui.value-100)/12-120, 'margin-top':12-(ui.value-100)/50});
			};break;
			
			case 3: {
				$('.calculator15_step_acc_3').find('img').css('margin-left',(ui.value-50)/9-250);
			};break;
		}
		
    }
    
    $('.calculator15_step_acc .form_group_add input').on('change',function(){
    	//alert($(this).val());
		$(this).closest('.calculator15_step_acc').find('.calculator15_acc_slider').eq(0).slider("value",$(this).val());
    });
    
	
	
	$('.calculator15_step_option').on('mouseover',function(){		
		active_slider=$(this).data('id');
		var text;
		switch(active_slider){
			case 1:text='Уровень тепла <b>'+$(this).find('.ui-slider').slider("value")+'</b> - '+options_hints[active_slider][$(this).find('.ui-slider').slider("value")];break;
			case 2:text='Уровень шумозащиты <b>'+$(this).find('.ui-slider').slider("value")+'</b> - '+options_hints[active_slider][$(this).find('.ui-slider').slider("value")];break;
			case 3:text='Уровень светопропускания <b>'+$(this).find('.ui-slider').slider("value")+'</b> - '+options_hints[active_slider][$(this).find('.ui-slider').slider("value")];break;
		}
		$('.calculator15_step_option_hint > div').html(text);
	    $('.calculator15_step_option_hint').show();
	});
	
	$('.calculator15_step_option').on('mousemove',function(){	
		var offset=$(this).find('.ui-slider-handle').offset().left-$('.calculator15_step_option_profile_wrapper').offset().left;
		$('.calculator15_step_option_hint > img').css('left',offset+3);
	});
	
	$('.calculator15_step_option').on('mouseout',function(){
		active_slider=0;
		$('.calculator15_step_option_hint').hide();
	});
	
    // Изменение слайдера
    function option_slide(event,ui){
    
    	if(ui.value<5)return false;
    	
	   if($( ".calculator15_option_slider.slider_1" ).slider("value")<ui.value-4)$( ".calculator15_option_slider.slider_1" ).slider("value",ui.value-4);
	   if($( ".calculator15_option_slider.slider_2" ).slider("value")<ui.value-4)$( ".calculator15_option_slider.slider_2" ).slider("value",ui.value-4);
	   if($( ".calculator15_option_slider.slider_3" ).slider("value")<ui.value-4)$( ".calculator15_option_slider.slider_3" ).slider("value",ui.value-4);
	   
	   if($( ".calculator15_option_slider.slider_1" ).slider("value")>ui.value+4)$( ".calculator15_option_slider.slider_1" ).slider("value",ui.value+4);
	   if($( ".calculator15_option_slider.slider_2" ).slider("value")>ui.value+4)$( ".calculator15_option_slider.slider_2" ).slider("value",ui.value+4);
	   if($( ".calculator15_option_slider.slider_3" ).slider("value")>ui.value+4)$( ".calculator15_option_slider.slider_3" ).slider("value",ui.value+4);
	   
	   //alert($(this).closest('.calculator15_step_option').data('id'));
	   
	   switch($(this).closest('.calculator15_step_option').data('id')){
	       case 1:{
		       if(active_slider==1){
		       		$('.calculator15_step_option_hint > div').html('Уровень тепла <b>'+ui.value+'</b> - '+options_hints[active_slider][ui.value]);
		       	}
		       	
			   $(this).closest('.calculator15_step_option').find('.option_img').height(30+ui.value*7);
		   };break;
		   
		   case 2:{
		   
		   	    if(active_slider==2){
		       		$('.calculator15_step_option_hint > div').html('Уровень шумозащиты <b>'+ui.value+'</b> - '+options_hints[active_slider][ui.value]);
		       	}
		       	
			   if(ui.value<=10){
				   $(this).closest('.calculator15_step_option').find('.option_img_1').css('opacity',1);
				   $(this).closest('.calculator15_step_option').find('.option_img_2').css('opacity',0);
				   $(this).closest('.calculator15_step_option').find('.option_img_3').css('opacity',0);
			   }
			   
			   if(ui.value>10 && ui.value<=15){
				   $(this).closest('.calculator15_step_option').find('.option_img_1').css('opacity',0);
				   $(this).closest('.calculator15_step_option').find('.option_img_2').css('opacity',1);
				   $(this).closest('.calculator15_step_option').find('.option_img_3').css('opacity',0);
			   }
			   
			   if(ui.value>15){
				   $(this).closest('.calculator15_step_option').find('.option_img_1').css('opacity',0);
				   $(this).closest('.calculator15_step_option').find('.option_img_2').css('opacity',0);
				   $(this).closest('.calculator15_step_option').find('.option_img_3').css('opacity',1);
			   }
			   
		   
		   }break;
			   
		   case 3:{
		    	if(active_slider==3){
		       		$('.calculator15_step_option_hint > div').html('Уровень светопропускания <b>'+ui.value+'</b> - '+options_hints[active_slider][ui.value]);
		       	}
			   $(this).closest('.calculator15_step_option').find('img').css('opacity',.2+ui.value/25);
		   };break;
	   }
	   
	   var summ = $( ".calculator15_option_slider.slider_1" ).slider("value") + $( ".calculator15_option_slider.slider_2" ).slider("value") + $( ".calculator15_option_slider.slider_3" ).slider("value");
	   var prof = Math.round(summ/9)-1;
	   
	   $('.calculator15_step_option_profile').html(profile[prof][0]);
	   $('.calculator15_step_profile_name').html(profile[prof][0]);
	   $('.calculator15_step_profile_description').html(profile[prof][3]);
	   $('.calculator15_step_profile_more_info').html(profile[prof][3]);
	   
	   
	   selected_profile=prof;
	   
	   recalculate_win_price($('.win_price_block'));
    }
    
    var saved_position;
    
    // Выбор окна для редактирования
    $('.edit_params_done').on('click',function () { $('.win_price_edit_close').trigger('click'); });
    
    $('.win_price_window_img').on('click',function () { $(this).parent().find('.win_price_params a').trigger('click'); });
    
     // Закрытие редактора окна
     $('.win_price_edit_close').on('click',function(){
    
	     $(this).parent().fadeOut().find('.win_price_edit_img').removeClass('win-2').removeClass('win-3').removeClass('win-b');
		 
		 $('.win_price_selector a').css('opacity',0);
		  
		 $('.win_price_window').find('.win_price_count15').delay(1000).fadeIn();
		 $('.win_price_window').find('.win_price_selector').delay(1000).fadeIn();
		 $('.win_price_window').find('.win_price_window_name').delay(1000).animate({opacity:'1'},400);		
		 
		 $('.active_window').find('.win_price_window_img').delay(300).animate({width: '-=70px',height:'-=80px'},1000);
		 $('.active_window').find('.win_price_window_img > div ').delay(300).animate({width: '-=70px',height:'-=80px'},1000);

		   	
		 $('.win-1c').delay(300).animate({'left':'0px',opacity:'1'},1000);
		 $('.win-2c').delay(300).animate({'left':'330px',opacity:'1'},1000);
		 $('.win-3c').delay(300).animate({'left':'660px',opacity:'1'},1000);
	   
		 $('.calculator15_active_step .red_button15').delay(500).animate({opacity:1},500);
		 $('.active_window').removeClass('active_window');
	    
		 //setTimeout(function() { 
		 $('.win_price_selector a').animate({opacity:1},500);
		 //  }, 3000);
    });
    
   
    var clones=[];
    
    // Открытие редактора окна
    $('.win_price_params a').on('click',function(){
    
        // Если это окно уже не редактируется
        if(!$(this).closest('.win_price_window').hasClass('active_window')){
		

    
	    $('.win_price_edit').show();
		var offset_2=$('.win_price_edit').position();
		var offset_3=$('.win_price_edit_img').position();
		
		   // Если уже редактируется одно из окон
		   if($('.active_window').hasClass('win_price_window')){ // WINDOW IS ACTIVE NOW
	
			   $('.win_price_edit').fadeOut(300);
		
			   $('.active_window').find('.win_price_window_img').delay(300).animate({width: '-=70px',height:'-=80px'},1000);
			   $('.active_window').find('.win_price_window_img > div ').delay(300).animate({width: '-=70px',height:'-=80px'},1000);
			    
			   $('.active_window').removeClass('active_window');
			   
		   // Если ни одно из окон не редактируется 
		   }else{
		   	   $('.win_price_edit').hide();
		   	   
			   var offset = $(this).closest('.win_price_window').position();
			   saved_position = offset;
		
			   $('.win_price_window').find('.win_price_count15').fadeOut();
			   $('.win_price_window').find('.win_price_selector').fadeOut();
			   $('.win_price_window').find('.win_price_window_name').animate({opacity:'0'},400);
		
			   
			   $('.calculator15_active_step .red_button15').delay(500).animate({opacity:.2},500);
		   }
		     
		   $(this).closest('.win_price_window').addClass('active_window');
		  
		   
		   // Растаскиваем окна в карусель
		   if($('.active_window').hasClass('win-1c')){
		   	
			   $('.win-2c').animate({'left':'930px','opacity':.3},1500);
			   $('.win-3c').animate({'left':'1260px','opacity':.1},1500);
		   }
		   
		   if($('.active_window').hasClass('win-2c')){
		  // alert(clones[0].css('left'));
			   $('.win-1c').animate({'left':'-240px','opacity':.3},1500);
			   $('.win-3c').animate({'left':'960px','opacity':.3},1500);
		   }
		   
		   if($('.active_window').hasClass('win-3c')){
			   $('.win-1c').animate({'left':'-550px','opacity':.1},1500);
			   $('.win-2c').animate({'left':'-250px','opacity':.3},1500);
		   }
		   
		    // Устанавливаем сохраненные параметры
		   	$('.win_price_edit').find('.edit_params_1').find('select').val($('.active_window').data('s1'));
		   	$('.win_price_edit').find('.edit_params_2').find('select').val($('.active_window').data('s2'));
		   	$('.win_price_edit').find('.edit_params_3').find('select').val($('.active_window').data('s3'));
		   	
		   	$('.win_price_edit').find('.size_x').val($('.active_window').data('sx'));
		   	$('.win_price_edit').find('.size_y').val($('.active_window').data('sy'));                                               
		   	
		    if($('.active_window').hasClass('win-2')){
		    	$('.win_price_edit').find('.edit_params_2').fadeOut();
		    }
		    
		    if($('.active_window').hasClass('win-3')){
		    	$('.win_price_edit').find('.edit_params_2').fadeIn();
		    }
		    
		    if($('.active_window').hasClass('win-b')){
		    	$('.win_price_edit').find('.edit_params_2').fadeOut();

		    }
		   
		   
		   var left_img_offset=offset_2.left+offset_3.left;
		   var top_img_offset=offset_2.top+offset_3.top-30;
		   
		   $('.active_window').find('.win_price_window_img').delay(300).animate({width: '+=70px',height:'+=80px'},1000);
		   $('.active_window').find('.win_price_window_img > div ').delay(300).animate({width: '+=70px',height:'+=80px'},1000);
		   
		   $('.active_window').delay(300).animate({left:left_img_offset,top:top_img_offset,opacity:1},1000);
		   $('.win_price_edit').delay(1300).fadeIn(300);
		   
		   //И пересчитываем стоимость для отображения ошибок
		   recalculate_win_price($('.win_price_block'));
		}
		return false; 
    });
    
    // Изменение параметров окна
	$('.win_price_edit').find('.edit_params_1').find('select').on('change',function(){
    	 $('.active_window').data('s1',$(this).val());
    	 $('.active_window').find('.win_price_window_img').find('.img_s1').removeClass('w0').removeClass('w1').addClass('w'+$(this).val());
    	 recalculate_win_price($('.win_price_block'));
	});
	
	$('.win_price_edit').find('.edit_params_2').find('select').on('change',function(){
    	 $('.active_window').data('s2',$(this).val());
    	 $('.active_window').find('.win_price_window_img').find('.img_s2').removeClass('w0').removeClass('w1').addClass('w'+$(this).val());
    	 recalculate_win_price($('.win_price_block'));
	});
	
	$('.win_price_edit').find('.edit_params_3').find('select').on('change',function(){
    	 $('.active_window').data('s3',$(this).val());
    	 $('.active_window').find('.win_price_window_img').find('.img_s3').removeClass('w0').removeClass('w1').addClass('w'+$(this).val());
    	 recalculate_win_price($('.win_price_block'));
	});
	
	$('.win_price_opens_1_check').on('change',function(){
			$(this).closest('.win_price_window').find('.img_s1').removeClass('w0').removeClass('w1').addClass('w'+($(this).is(":checked")?'1':'0'));
			$(this).closest('.win_price_window').data('s1',$(this).is(":checked")?'1':'0');
			recalculate_win_price($('.win_price_block'));
			//alert($(this).val());
	});
	
	$('.win_price_opens_2_check').on('change',function(){
			$(this).closest('.win_price_window').find('.img_s2').removeClass('w0').removeClass('w1').addClass('w'+($(this).is(":checked")?'1':'0'));
			$(this).closest('.win_price_window').data('s2',$(this).is(":checked")?'1':'0');
			recalculate_win_price($('.win_price_block'));
	});
	
	$('.win_price_opens_3_check').on('change',function(){
			$(this).closest('.win_price_window').find('.img_s3').removeClass('w0').removeClass('w1').addClass('w'+($(this).is(":checked")?'1':'0'));
			$(this).closest('.win_price_window').data('s3',$(this).is(":checked")?'1':'0');
			recalculate_win_price($('.win_price_block'));
	});
	
	$('.size_x').on('input',function(){
		$(this).closest('.win_price_window').data('sx',$(this).val());
		recalculate_win_price($('.win_price_block'));
	});
	
	$('.size_y').on('input',function(){
		$(this).closest('.win_price_window').data('sy',$(this).val());
		recalculate_win_price($('.win_price_block'));
	});
	
	$('.size_x').on('focusin',function(){
		edit_window=$(this).closest('.win_price_window');
		if(edit_window.hasClass('win-2')){
			edit_window.find('.ruler_h').css('left','70px');
			var w='181px';
		}
		
		if(edit_window.hasClass('win-3')){
			edit_window.find('.ruler_h').css('left','30px');
			var w='261px';
		}
		
		if(edit_window.hasClass('win-b')){
			edit_window.find('.ruler_h').css('left','30px');
			var w='261px';
		}
		
		edit_window.find('.ruler_h').animate({width:w,opacity:'1'},400);
	});
	
	
	$('.size_y').on('focusin',function(){
		edit_window=$(this).closest('.win_price_window');
		if(edit_window.hasClass('win-2')){
			edit_window.find('.ruler_v').css('left','50px');
			var h='201px';
		}
		
		if(edit_window.hasClass('win-3')){
			edit_window.find('.ruler_v').css('left','15px');
			var h='201px';
		}
		
		if(edit_window.hasClass('win-b')){
			edit_window.find('.ruler_v').css('left','310px');
			var h='301px';
		}
		
		edit_window.find('.ruler_v').animate({height:h,opacity:'1'},400);
	});
	
	$('.size_x').on('focusout',function(){
		edit_window=$(this).closest('.win_price_window');
		edit_window.find('.ruler_h').animate({width:'0px',opacity:'0'},400);
	});
	
	
	$('.size_y').on('focusout',function(){
		edit_window=$(this).closest('.win_price_window');
		edit_window.find('.ruler_v').animate({height:'0px',opacity:'0'},400);
	});
	
	
	// Получение стоимости створки по размерам
	// Матрица размеров расположена в DOM страницы
	function get_price(win_type,xs,ys){
	
		

		xs=Math.round(xs/100)*100;

		ys=Math.round(ys/100)*100;

		win_type=parseInt(win_type);
		//alert('type - '+(win_type!=0 && win_type!=1));
		
		if(win_type!=0 && win_type!=1)return false;
		
		var st_price;
		
		switch(win_type){
			case 0: {
				if(xs<500 || xs>1300)return false;
				if(ys<500 || ys>2400)return false;
				//alert((Math.round(ys/100)-5)+' x '+(Math.round(xs/100)-5+1));
				//$('.win_type_0').find('tr').eq(Math.round(ys/100)-5+1).css('background','#eee');			
				//$('.win_type_0').find('tr').eq(Math.round(ys/100)-5+1).find('td').eq(Math.round(xs/100)-5+1).css('background','#ccc');
				
				st_price=$('.win_type_0').find('tr').eq(Math.round(ys/100)-5+1).find('td').eq(Math.round(xs/100)-5+1).html();
				//console.log(st_price);
				//alert(st_price);
				
				//parseInt(st_price)*40 - добавлена скидка 40% т.к. в новой таблице цен У.Е. даны без скидки
				return Math.round((parseInt(st_price)*40)*0.6);
				
				};break;
			case 1: {
				if(xs<500 || xs>1000)return false;
				if(ys<700 || ys>2400)return false;
				
				//$('.win_type_1').find('tr').eq(Math.round(ys/100)-7+1).css('background','#eee');			
				//$('.win_type_1').find('tr').eq(Math.round(ys/100)-7+1).find('td').eq(Math.round(xs/100)-5+1).css('background','#ccc');
				
				//alert((Math.round(ys/100)-7)+' x '+(Math.round(xs/100)-5+1));
				st_price=$('.win_type_1').find('tr').eq(Math.round(ys/100)-7+1).find('td').eq(Math.round(xs/100)-5+1).html();
				
				//parseInt(st_price)*40 - добавлена скидка 40% т.к. в новой таблице цен У.Е. даны без скидки
				return Math.round((parseInt(st_price)*40)*0.6);
			};break;	
		}
	}
	
	
	
	$('.calculator15_order_button').on('click',function(){
		$('.calculator15_step_form_wrapper').fadeIn(300);
		ga('send', 'pageview', '/calculator-form-open');
	});
	
	load_storage();
	
	setTimeout(function(){ if(!calc_loaded){ activate_step($('.step-1')); } }, 3000);
	
	/*$('.zakaz_raschet_send_button').on("click", function( event, data) {
	
	  if($("input[name='phone']").val()==""){
		  alert("Пожалуйста укажите ваш номер телефона");
		  return false;
	  }
	  
	  ga('send', 'pageview', '/calculator-form-submit');
	  
	  event.preventDefault();
	  
	  var formData=$('.zakaz_raschet').serialize();
    
	  $.post(
            '/js/contact_forms.php?action=calculator_send',
            formData,
            function(data) {
                alert(data);
                ga('send', 'event', 'Calculator', 'submit');
                $.magnificPopup.close();
            }
        );
	});*/
	
	$('.zakaz_button').click(function(e){
		//$('.manage_button').trigger('click');
		e.preventDefault();
		OkpWidget.WdgObj.openWidget({
	        wth: "",
	        wtp: "Менеджер в вашем районе перезвонит за 25 секунд и расчитает стоимость Ваших окон по самой выгодной цене.",
	        nwth: "",
	        nwtp: "Менеджер в вашем районе перезвонит Вам и расчитает стоимость окон по самой выгодной цене.",
	        hint: "заявка на расчет по телефону"
	    });
		return false;
	});
	
	$('.calculator15_step_profile_more_link').on('click',function(){
		$('.calculator15_step_profile_more_info').slideToggle(300);
		return false;
	});
	
	/*$('.calculator15_right_button').magnificPopup({
		type:'ajax',
		items: {
	   	 src: '/js/contact_forms.php?action=calc_request_form',
	   	},
		callbacks: {
			ajaxContentAdded: function() {
				$('#phone').mask('+7 (999) 999-99-99')
				ga('send', 'event', 'Calculator', 'Calc request open');	
			},
		},
	});*/
	
	$('#measure_form').on('submit',function(e){
		e.preventDefault();
		var formData=$('#measure_form').serialize();
		
		$.post(
            '/js/contact_forms.php?action=measure_send',
            formData,
            function(data) {
                alert(data);
                ga('send', 'event', 'Calculator', 'Calc request send');
                $.magnificPopup.close();
            }
        );

		return false;
	});
	
	$('#m_region').on('change',function(){
		if($(this).val()=='m_oblast'){
			$('#m_oblast').show();
		}else{
			$('#m_oblast').hide();
		}
	});
  
});