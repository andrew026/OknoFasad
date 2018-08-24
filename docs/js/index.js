$(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});

$(document).ready(function() {
  $('#lightgallery').lightGallery({
    pager: true
  });
});

//MODAL and FORM
jQuery(function() {
	$('input[placeholder], textarea[placeholder]').placeholder();
	$(".phone-mask").mask("+7 (999) 999-99-99");

	$('.order-form').submit(function(e) {
		e.preventDefault();

		var $form = $(this),
				ok = true,
				$name = $form.find('.fio'),
				$phone = $form.find('.phone'),
				$email = $form.find('.email'),
				$site = $form.find('.site');
				
		if ($name.hasClass('required')) {
			if (!$name.val()) {
				ok = false;
				$name.addClass("error");
			} else
				$name.removeClass("error");
		}

		if ($phone.hasClass('required') && !/\d{11}/.test($phone.val().replace(/\D/g, ''))) {
			ok = false;
			$phone.addClass("error");
		} else
			$phone.removeClass("error");

		if ($email.length > 0) {
			if ($email.hasClass('required') || $email.val().length > 0) {
				if (!checkEmail($email.val())) {
					ok = false;
					$email.addClass("error");
				} else
					$email.removeClass("error");
			}
		}

		if (ok) {
			$form.ajaxSubmit({
				success: function(response) {
					hideModal();
					if ($('body').data('metrika') && window['yaCounter'+$('body').data('metrika')]) window['yaCounter'+$('body').data('metrika')].reachGoal('request');
					if (window._gaq) _gaq.push(['_trackEvent','Form','Sent']);
					window.location = 'thanks.php';
					$form.get(0).reset();
					
				}
			});
		}
	});

	$('.send-btn').click(function(e) {
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('.order-btn').click(function(e) {
		e.preventDefault();
		var mod = $('.modal.order-modal');
		if (mod.hasClass('open')) {
			hideModal(mod);
			mod.removeClass('open');
		} else {
			showModal(mod);
			mod.addClass('open');
		}
	});

	$('.call-request-btn').click(function(e) {
		e.preventDefault();
		var mod = $('.modal.phone-request');
		if (mod.hasClass('open')) {
			hideModal(mod);
			mod.removeClass('open');
		} else {
			showModal(mod);
			mod.addClass('open');
		}
	});

	$('.overlay, .modal .close-btn, .modal .modal-close-text').click(function(e) {
		e.preventDefault();
		hideModal('.modal');
		$('.modal').removeClass('open');
	});
});

function showModal(modal) {
	showModalTop(modal, 10);
}

function showModalTop(modal, top) {
	modal = modal instanceof jQuery ? modal : jQuery(modal);
	modal.css("top", top + "%");
	modal.show();
	$(".overlay").show();
}

function hideModal() {
	$(".modals > div").hide();
	$(".overlay").hide();
}

function convert(n, ar) {
	var o = n % 10;
	var l, g;
	switch (o) {
		case 1:
			l = 0;
			break;
		case 2:
		case 3:
		case 4:
			l = 1;
			break;
		default:
			l = 2;
			break;
	}

	var g = n % 100;
	if (g == 10 || g == 11 || g == 12 || g == 13 || g == 14) {
		l = 2;
	}
	return [n, ar[l]];
}

function checkEmail(mail) {
	return /^[a-zа-я0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+(\.[a-zа-я0-9,!#\$%&'\*\+/=\?\^_`\{\|}~-]+)*@[a-zа-я0-9-]+(\.[a-z0-9-]+)*\.([a-zрф]{2,})$/.test(mail);
}

$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

$("document").ready(function(){
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function() {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab2"){
		$('.tab-slider--tabs').addClass('slide');
	}else{
		$('.tab-slider--tabs').removeClass('slide');
	}
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:0,
		autoplay:true,
	    autoplayTimeout:6000000,
	    autoplayHoverPause:true,
		stagePadding: 0,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
        dots: false,
        margin:0,
        stagePadding: 0,
        nav: true,
				navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    },
	    // > 768
	    768 : {
	    	margin:0,
	    	stagePadding: 0,
        dots: true,
        nav: false
	    }
		}
	});
});

function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);