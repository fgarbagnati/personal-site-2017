document.addEventListener("DOMContentLoaded", function(event) {
	var enterButton = document.getElementById('enter');
	enterButton.addEventListener('click', function(event) {
		event.preventDefault(); 
		
		var flameDrawing = document.getElementById('flame-drawing');
		flameDrawing.style.display = 'block';
	});
});