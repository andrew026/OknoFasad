/*
Файл с функциями и переменными для всех страниц сайта
*/

jQuery(function($){
	$(".replace-rub-sym").text("₽");//₽
});

/* функция накрутки или открутки цифр
box - 			[jQuery obj] контейнер в котором происходит накрутка,
				и у которого указан параметр data-count-till и data-count-from.
				Если передан набор, будет крутиться только первый эелемент
intrvl - 		[int](100) с каким интервалом изменять цифру
add_classes - 	[string]("") добавить к box в конце накрутки классы переданные классы
step - 			[int](1) - шаг накрутки
format_num - 	[bool](false) форматировать число перед записью в контейнер (до тысяч "12345" -> "12 345")
callback - 		[function](null) Функция вызывается после конца накрутки. Ей передаётся box
*/
function nakrutka (box, intrvl, add_classes, step, format_num, callback) {
	var format_regxp = new RegExp('(\\d*?)(\\d{3})$', 'g');//регулярка для форматирования чисел до 6 знаков
	if (box.length == 0 || !intrvl ) {
		console.log("Не верные параметры накрутки.");
		if (box.length > 0)  {
			if (format_num) {
				box.eq(0).text(box.data("count-till"));
			} else {
				var till = box.data("count-till");
				box.eq(0).text( till.replace(format_regxp, "$1 $2") );
			}
			
			if (add_classes) box.eq(0).addClass(add_classes);
		}
		return false;
	}	
	var box = box.eq(0); // если передано контейнеров больше одного, накручиваем только первый
	
	var from = parseInt(box.data("count-from"));//от какого значения крутить
	var till = parseInt(box.data("count-till"));//до какого значения крутить
	if (typeof from != "number" || typeof till != "number") return false;
	
	if (!intrvl) intrvl = 100;
	
	var til_formatted = '' + till + '';//сохраняем форматированное целевое значение
	if (format_num) til_formatted = til_formatted.replace(format_regxp, "$1 $2");
	var nakrutka_interval;//ID функции интервала
	
	var asc = (from < till ? true : false);//направление - возрастающее?
	if (!step || step < 0) step = 1;//шаг накрутки
	
	var cur_num_text; //переменная для кеширования текущего текста
	
	
	nakrutka_interval = setInterval(function(){
		asc ? from += step: from-= step;//крутим
		cur_num_text = '' + from + '';//сохраняем текущее значение
		if (format_num) {
			cur_num_text = cur_num_text.replace(format_regxp, "$1 $2");//форматируем, если надо
		}
		
		if ( (asc && from >= till) || (!asc && from <= till)) {//смотрим не перекрутили ли
			clearInterval(nakrutka_interval);//если перекрутили останавливем интервал
			box.text(til_formatted);//устанавливаем целевое значение
			if (add_classes) box.addClass(add_classes);//красим зелёным если надо
			
			if (typeof callback == "function") callback(box);
		} else {
			box.text(cur_num_text);//в противном случае выводим результат накрутки этой итерации
		}
	}, intrvl);
}

/*
выбирает из массива необходимое склонение по числительному
например: 
massiv = ['менеджер','менеджера','менеджеров'];
massiv[0] для cifra == 1, 21, 31, 41, ... 101, 121, 131, и т.д. 
massiv[1] для cifra == 2, 3, 4, 22, 23, 24, 32... и т.д. 
massiv[2] для cifra == 5, 6, 7, ... 11, 12, ... 111, 112... и т.д. 
*/
function skloniPoCifre (cifra, massiv) {
	//правила повторяются для всех чисел > 3 знаков
	//поэтому отсекаем все цифры кроме последних 2
	if (cifra > 99) {
		cifra = cifra + "";
		cifra = parseInt(cifra.slice(-2));
	}
	
	var lastDigit = cifra%10;
	
	if ( cifra > 4 && cifra < 21 ) { //5-20
		return massiv[2];
	} else if ( lastDigit == 1 ) {//1, 21, 31, 41, 51
		return massiv[0];
	} else if ( lastDigit > 1 && lastDigit < 5 ) { // 2,3,4, 22,23,24, 32,33,34...
		return massiv[1];
	} else { //0,6,7,8..26,27,28...
		return massiv[2];
	}
	
}


/*проверяем переданную строку на корректность введённого телефона
  код начинается с 9 или 49 (сотовый или Москва)
*/
function checkPhoneString(inputStr){
	var inputed = inputStr.replace(/\D/g, ""),
		strObj = new String(inputed),
		returnBool;
	if ( inputed.length != 11 ) {
		returnBool= false;
	} else {
		if (strObj[1] == '9' || ( strObj[1] == '4' && strObj[2] == '9' ) ) {
			returnBool= true;
		} else {
			returnBool= false;
		} 
	}
	delete strObj, inputed;
	return returnBool;
}

/*
Функция записывает массив с путями, 
по котрым уже показывалась анимация, если он передан
или возвращает его заначения.
*/
function func_animationShownArr( shown_arr_to_write ) {
	if (shown_arr_to_write) {
		localStorage.setItem("prosto_animation_shown", JSON.stringify( shown_arr_to_write ) );
		return;
	}
	var shown_arr = localStorage.getItem("prosto_animation_shown");
	if (!shown_arr) {
		shown_arr = [];
	} else {
		shown_arr = JSON.parse(shown_arr);
	}
	return shown_arr;
}
/*
Проверка - была ли показана проверка или запись текущей страницы
add_this_page - флаг. Если true - значить отметить эту страницу, как уже анимированную.
*/
function func_animationWasShown (add_this_page) {
	var anim_shown_arr = func_animationShownArr();
	if (add_this_page) {
		anim_shown_arr.push(location.pathname);
		func_animationShownArr( anim_shown_arr );
		return;
	}
	if ( jQuery.inArray(location.pathname, anim_shown_arr) > -1) {
		return true;
	} else {
		return false;
	}
}



/*
Перебор слайдов
ф-я просто переставляет класс slide-active для переданных слайдов
на шаг вперёд при одном выполнении
так же для переданных булллетов пейджера
slides - выборка, непосредственно, самих слайдов, которым будет присваиваться класс
pager_bullets - аналогичная выборка буллетов
Выборки должны быть изолированными
*/
function rotateSlides (slides, pager_bullets) {
	var cur_slide = slides.filter(".slide-active"),
		next_slide = cur_slide.next(),
		bullets = (pager_bullets && pager_bullets.filter('.cur-bullet').length > 0);
	if (bullets) {
		var cur_bull = pager_bullets.filter('.cur-bullet'),
			next_bull = cur_bull.next();
	}
	
	if (next_slide.length > 0) {
		next_slide.addClass("slide-active");
		cur_slide.removeClass("slide-active");
		if (bullets) {
			next_bull.addClass("cur-bullet");
			cur_bull.removeClass("cur-bullet");
		}
	} else {
		cur_slide.removeClass("slide-active");
		slides.eq(0).addClass("slide-active");
		if (bullets) {
			cur_bull.removeClass("cur-bullet");
			pager_bullets.eq(0).addClass("cur-bullet");
		}
	}
}

function _activateBullets (bullets, slides) {
	bullets.on('click', function(evnt){
		var this_bull = $(this),
			this_ind = this_bull.index();
			console.log(this_ind);
		if (!this_bull.hasClass("cur-bullet")) {
			slides.removeClass("slide-active").eq(this_ind).addClass("slide-active");
			bullets.removeClass("cur-bullet");
			this_bull.addClass("cur-bullet");
		}
	});
}


/*----------------------------------------------------
				PRLX
----------------------------------------------------*/
/*
Функция параллакса фона за окнами

Нужна такая HTML конструкция окна и фона:

<div class="win-bg-prof-box win-prlx-3-box">
	<div class="win-prlx-bg-clip">
		<img src="/img/win-bg.jpg" style="left: -370px;" data-prlxstart="-370" class="win-prlx-bg"/> //фон окна
	</div>
	<img src="/img/okno-3-trn.png" />    //рама окна
</div>

анимируется img.win-prlx-bg от движений мыши
Обязательно задать: style="left: -370px;" data-prlxstart="-370"
для запуска собрать все "фоны" и отдать функции: 
winPrlx( $(".win-prlx-bg") );

Ход смещения (backlash)- по умолчанию - 80px вправо и влево
Разбивка на 2 функции нужна чтобы контролировать отвязку эффекта на нужных страницах
*/
function winPrlx (prlx_bg_list, backlash, side) {
	if (prlx_bg_list.length == 0) return; 
	if (!backlash) backlash = 80;
	if (side != "left" && side != "right") side = "left";//по умолчанию плавающий фон ориентриуется на левый край
	//определяем центр окна и половину значения
	var ww = $(window).width(),
		wwcentr = ww/2;
	//начальные значения фотографий и допустимое отклонение 
	//от начальной позиции заносим в объекты чтобы передать
	//в обработчик движения мыши
	
	//должен быть передан не пустой
	//var prlx_bg_list = $('img.win-prlx-bg');
	
	//передаём в обработчик начальные данные о фотках
	$('html').on('mousemove', {prlx_bg:prlx_bg_list, cntr: wwcentr, bcklsh: backlash, orientside:side}, winBgPrlxHandler);

}
function winBgPrlxHandler (evt) {
	var hod_x = evt.data.bcklsh, //ход сдвига - 80px
		wwcentr = evt.data.cntr,
		side = evt.data.orientside;
		sdvigX = ((evt.pageX-wwcentr)/wwcentr).toFixed(2);//отклонение в процентах до сотых
	var	delta_x = sdvigX*hod_x;// смещение в пикселях
	if (side == "right") delta_x *= -1;
	
	//набор со всеми PRLX фонами (jQuery-объект)
	var prlx_bgs = evt.data.prlx_bg;

	prlx_bgs.each(function(indx){
		var this_o = $(this);
		this_o.css(side, (this_o.data("prlxstart") - delta_x) + "px" );
	});

	return true;
}
/*----------------------------------------------------
				/prlx
----------------------------------------------------*/