var Showcase = function Showcase() {
}

Showcase.prototype = {
	init: function() {
		console.log('init');
		document.getElementById('enter').addEventListener('click', function(event) {
			event.preventDefault();

			this.playFlameAnimation();
			setTimeout(this.openCurtain, 1000);
			setTimeout(this.destroyCurtain, 3000);
		}.bind(this));
	},
	playFlameAnimation: function() {
		document.getElementById('flame-drawing').style.display = 'block';
	},
	openCurtain: function() {
		document.getElementById('curtain').className += 'hidden';
	},
	destroyCutrain: function() {
		document.getElementById('curtain').style.display = none; 
	}
};

document.addEventListener("DOMContentLoaded", function(event) {
	var mgarb = new Showcase();
	mgarb.init();
});