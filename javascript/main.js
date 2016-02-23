$(document).ready(function(){
	$(".arrow-down").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".intro").offset().top},
	        'slow');
	});
});