$(document).ready(function() {
	$('aside > ul > a').click(function() {
		console.log("link clicked");
		var ind = $(this).index() + 2;
		$('html, body').animate({
		scrollTop: $('.post:nth-child(' + ind + ')').offset().top}, 'slow');
		return false;	
	});
	$("a[href='#top']").click(function() {
		console.log("going to top");
		$("html, body").animate({scrollTop:0}, "slow");
		return false;
	});
});