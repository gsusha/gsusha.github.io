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
//Меню бургер



$("nav").on("click","a", function (event) {
        event.preventDefault();
 
        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 800);
});
//Отвечает за плавное перемещение по якорям