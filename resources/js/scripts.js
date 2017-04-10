document.addEventListener("DOMContentLoaded", function(event) {
	var enterButton = document.getElementById('enter');

	var playFlameAnimation = function() {
		document.getElementById('flame-drawing').style.display = 'block';
	};

	var openCurtain = function() {
		document.getElementById('curtain').className += 'hidden';
	}

	var destroyCurtain = function() {
		document.getElementById('curtain').style.display = 'none';
	}
	
	enterButton.addEventListener('click', function(event) {
		event.preventDefault(); 

		playFlameAnimation();
		setTimeout(openCurtain, 1000);
		setTimeout(destroyCurtain, 3000);
	});

});