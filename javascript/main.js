$(document).ready(function(){
	// $(".arrow-down").click(function() {
	//     $('html,body').animate({
	//         scrollTop: $(".intro").offset().top},
	//         'slow');
	// });
console.log("hi");

window.addEventListener("beforeunload", function() {
	$(".animate-in").classList.add("animate-out");
});

$("nav").click(function() {
	$("nav").toggleClass("responsive");
})


// $('.project-item').hover(function() {
// 	var img = $(this).childreni().eq(0);
// 	var caption = $(this).children().eq(1);

// 	img.css("opacity", .7);
// 	img.css("transition", ".5s");
// 	caption.css("opacity", .7);
// 	caption.css("transition", ".5s");
// });
});