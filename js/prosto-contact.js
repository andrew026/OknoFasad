var mapHandrl,
	formHandrl;
jQuery(function($){
	mapHandrl2 = new GMapHandler.MapHndlr();
	mrkr2 = new google.maps.Marker({
			title: "Наш Офис",
			position: {lat: 55.680046, lng: 37.278863},
			icon: mapHandrl2.imgsDir + "map-ball.png",
			animation: google.maps.Animation.DROP
		});
	mapHandrl2.initMap("prod_map", {lat: 55.680044, lng: 37.260343}, 14);//55.796738, 37.499440 маркер - //55.797136, 37.518971
	mrkr2.setMap(mapHandrl2.curMap);
	
	
	mapHandrl = new GMapHandler.MapHndlr();//обработчик карты
	formHandlr = new GMapHandler.OrderFormHandler();//обработчик формы
	mapHandrl.initOrderMap(100, formHandlr);
});