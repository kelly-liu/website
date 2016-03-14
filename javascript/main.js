$(document).ready(function(){
	// $(".arrow-down").click(function() {
	//     $('html,body').animate({
	//         scrollTop: $(".intro").offset().top},
	//         'slow');
	// });
console.log("hi");

$('.project-item').click(function() {

		var expander = $(this).children().eq(2); //gets expander class
		// var open = $(this).children().eq(1).children(2);
		
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
		
	}
	
});
// $('.project-item').hover(function() {
// 	var img = $(this).children().eq(0);
// 	var caption = $(this).children().eq(1);

// 	img.css("opacity", .7);
// 	img.css("transition", ".5s");
// 	caption.css("opacity", .7);
// 	caption.css("transition", ".5s");
// });
});