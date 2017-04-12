var Showcase = function Showcase() {
}

Showcase.prototype = {
	init: function() {
		document.getElementById('enter').addEventListener('click', function(event) {
			event.preventDefault();

			this.playFlameAnimation();
			setTimeout(this.openCurtain, 1000);
			setTimeout(this.unlockScroll, 1300);
			setTimeout(this.destroyCurtain, 3000);
			setTimeout(this.fadeInHeader, 2800);
		}.bind(this));
	},
	playFlameAnimation: function() {
		document.getElementById('flame-drawing').style.display = 'block';
	},
	unlockScroll: function() {
		document.body.className = document.body.className.replace('no-scroll', '');
	},
	openCurtain: function() {
		document.getElementById('curtain').className += 'hidden';
	},
	destroyCurtain: function() {
		document.getElementById('curtain').style.display = 'none';
	},
	fadeInHeader: function() {
		document.getElementById('header').className += ' not-hidden';
	}
};

document.addEventListener("DOMContentLoaded", function(event) {
	var mgarb = new Showcase();
	mgarb.init();
});