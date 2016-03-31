$(document).ready(function(){

	var amy = ['amy1.png', 'amy2.png'];
	var card = ['card1.png', 'card2.png', 'card3.png'];
	var hiking = ['hiking1.png', 'hiking2.png', 'hiking3.png'];
	var hk = ['hk1.png', 'hk2.png', 'hk3.png'];
	var israel = ['israel1.png', 'israel2.png', 'israel3.png'];
	var italy = ['italy1.png', 'italy2.png', 'italy3.png'];
	var ultimate = ['ultimate1.png', 'ultimate2.png', 'ultimate3.png'];
	var za = ['za1.png', 'za2.png', 'za3.png'];
	var writing = ['writing.png'];

	var numItems = 8; //number of items in list


	var timer = window.setInterval(function() {
		//to choose which image to change
			var randIdx = Math.floor(Math.random() * numItems);
			var chosenItem = $(".project-item").eq(randIdx);
			var chosenItemId = chosenItem.attr('id');
			console.log("chosenItemOd", chosenItemId);

			var active = $('#' + chosenItemId +  ' img.show');
			console.log(active.is('img'));

			switchImage(active, chosenItemId);
	}, 4000);

	$(".project-item").click(function() {
		var chosenId = $(this).attr('id');
		var active = $('#' + chosenId +  ' img.show');
		console.log("chosenId", chosenId);
			switchImageRapid(active, chosenId);
		});

	function switchImage(active, chosenItemId) {
		
		if ($(active).next().is('img')) {
			console.log('continue');
			active.removeClass("show animate-in");
			active.addClass("animate-out");

			active = $(active).next();
			active.removeClass("animate-out");
			active.addClass("show animate-in");

		} else {
			console.log('restart');
			active.removeClass("show animate-in");
			active.addClass("animate-out");

			active = $('#'+ chosenItemId + ' img:first');
			active.removeClass("animate-out");
			active.addClass("show animate-in");
		}

		$(active).fadeIn();
	}

	function switchImageRapid(active, chosenItemId) {
		
		if ($(active).next().is('img')) {
			console.log('continue');
			active.removeClass("show");

			active = $(active).next();
			active.removeClass("animate-out animate-in");
			active.addClass("show");

		} else {
			console.log('restart');
			active.removeClass("show");

			active = $('#'+ chosenItemId + ' img:first');
			active.removeClass("animate-out animate-in");
			active.addClass("show");
		}

		$(active).show();
	}
	
});