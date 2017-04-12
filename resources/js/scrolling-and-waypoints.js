$(document).ready(function() {
	// SCROLLING
  $('.js--scroll-to-portfolio').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000);
  });

  $('.js--scroll-to-about').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
  });

  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
  });

  // Waypoints
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInUp');
  }, {
    offset: '150%'
  });

});