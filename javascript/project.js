$(document).ready(function(){

$('.project-item').click(function() {

		var expander = $(this).children().eq(2); //gets expander class
		// var open = $(this).children().eq(1).children(2);
		var image = $(this).children().eq(1);
		
		var margin = ($(window).width() - $(".main").width())/2;
		// console.log("window", $(window).width());
		// console.log("main", $(".main").width());
		// console.log("margin",margin);
		expander.css("margin-left", 0);

		if (expander.css("display") == "block") { //get rid of menus
			// var offsetAdjusted = expander.offset().left - margin;
			// expander.css("margin-left", -offsetAdjusted);
			// expander.width($(window).width()-2*margin);
			// expander.slideToggle("slide");
			expander.css("display", "none");

		}
		else {
			$(".project-expander").css("display", "none");
		// expander.slideToggle("slide");
		// console.log(expander);
		expander.css("display", "block");
		// var margin = $(window).width() *.12;
		var offsetAdjusted = expander.offset().left - margin;
		expander.css("margin-left", -offsetAdjusted);
		expander.width($(window).width()-2*margin);



		//jump bottom of page to bottom of expander
		console.log(expander.offset().top );
		console.log(expander.outerHeight());
		console.log($(window).height());
		// if (expander.outerHeight()<$(window).height()){

			$('html, body').animate({
				// scrollTop: -image.offset().top + $(window).height()
				scrollTop: expander.offset().top + expander.outerHeight() - $(window).height() + 100
			}, 500); 			
		// } else {
		// 	$('html, body').animate({
		// 		scrollTop: expander.offset().top
		// 	}, 500); 
		// }
		
	}
	
});

var btns = $('.button').click(function() {
	$('.button').removeClass('selected');
	if (this.id == 'all') {
		$('.banner-overview > div').fadeIn(450);
	} else {
		$('.banner-overview > div').hide();
		var $el = $('.' + this.id).fadeIn(450);
		$('.banner-overview > div').not($el).hide();
	}
	
	$(this).addClass('selected');
})


});
// });