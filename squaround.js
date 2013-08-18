$(document).ready(function() {


	$('div#squaround').hover(function() {
		var width = $(this).width();
		var borderRadius = parseFloat($(this).css('border-top-right-radius')); //Определяем текущий border-radius
		var radiusStep = width*0.03; //Шаг возрастания или уменьшения border-radius'a и градуса поворота
		var rotateDeg = borderRadius; //Переменная для градусов поворота в css transform	
		var degStep = radiusStep;
		
		
		function inc() {	//Функция для возрастания значений
			if (borderRadius < 0.52*width) {
				borderRadius+=radiusStep;
				rotateDeg+= degStep || radiusStep; 
				}
				$('div#squaround').css('border-radius', borderRadius + 'px');	
				$('div#squaround').css('transform', 'rotate('+rotateDeg+'deg)');
				
			}
				
		function dec() {	//Функция для смены значений
			if (borderRadius-radiusStep <= 0) borderRadius=rotateDeg=0;   //Фикс для Лисицы, обрезающей максимальные значения							
			else {
				borderRadius-=radiusStep;
				rotateDeg-= degStep || radiusStep; 
				}	
				
				$('div#squaround').css('border-radius', borderRadius + 'px');	
				$('div#squaround').css('transform', 'rotate('+rotateDeg+'deg)');
				
			}
	
		//Вешаем обработчики
		
		$(document).keydown(function(e) {		//Обработчик клавиш		
			var kcode = e.which;						
			if (kcode == 38) inc();  
			if (kcode == 39) alert($('div#squaround').css('border-top-right-radius'));			//Нажатие стрелки вверх
			if (kcode == 40) dec();    //Нажатие стрелк и вверх															
			})
		
		$('div#squaround').bind(("onwheel" in window) ? "wheel" : "mousewheel", function(e) { //Обработчик колесика мыши
			var delta =  -e.originalEvent.deltaY || -e.originalEvent.detail || e.originalEvent.wheelDelta;
			if (delta > 0) inc();
			if (delta < 0) dec();									
			})
	}, function() {
		$(document).unbind('keydown');
		$('div#squaround').unbind('wheel mousewheel MozMousePixelScroll');					
		})
})
