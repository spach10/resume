// Write your Javascript code.
$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});