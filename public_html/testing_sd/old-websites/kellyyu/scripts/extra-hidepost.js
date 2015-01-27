$(document).ready(function() {
	$('footer').css('position', 'fixed');
	$('footer').css('bottom', '5px');
	hidepost();
	/*good article about how to order JS functions:http://stackoverflow.com/questions/7609276/javascript-function-order-why-does-it-matter*/
	function hidepost() {
		$('.post:nth-child(n+2)').hide();
	}
	
	function fadepost() {
		$('.post:nth-child(n+2)').fadeOut(500); //hides all the posts
	}
	console.log('hi');
	$('aside > ul > a').click(function() {
		hidepost();
		$('footer').removeAttr('style'); //no longer need to pin it down
		//also probably a better way to manage footers...I'll get to it
		console.log('you clicked on a link');
		var ind = $(this).index() + 2;
		//$('.post:nth-child(' + ind + ')').show();
		$('.post:nth-child(' + ind + ')').fadeIn(500);
		
		//Thanks to http://stackoverflow.com/questions/6677035/jquery-scroll-to-element?rq=1 for introducing me to animated page scroll.
		//Cross browser solution: http://stackoverflow.com/questions/5580350/jquery-cross-browser-scroll-to-top-with-animation-d
	});
	$('aside > p:nth-child(3)').click(function() {
		console.log('you want to go to the top, eh?');
		$('html, body').animate({
			//scrollTop: $('.post:nth-child(' + ind + ')').offset().top}, 2000); 
			scrollTop:0}, 'slow');
			return false;
			//is there a nicer way to format this
	});
});