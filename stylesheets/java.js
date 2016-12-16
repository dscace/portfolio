$(document).ready(function(){
  $('.parallax').parallax();
  $('.carousel.carousel-slider').carousel({full_width: true});
});

$("#button1").click(function(){
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
  }, 1200);
});

$("#button2").click(function(){
  $('html, body').animate({
      scrollTop: $("#education").offset().top
  }, 1200);
});

$(window).scroll(function() {
	if ( $(window).scrollTop() > 300 ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});