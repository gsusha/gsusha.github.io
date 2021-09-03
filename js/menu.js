//Меню бургер
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


//Изменение фона меню при прокрутке
$(document).ready(function(){
	$(window).on("scroll",function(){
		let wn = $(window).scrollTop();

		if(wn > 120){
			$(".header").addClass("bg");
		} else{
			$(".header").removeClass("bg");
		}
	});
});