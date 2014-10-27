$(document).ready(function() {
	$('aside > ul > li > a').click(function() {
		//when elements that are part of the above selector are clicked...
		console.log("link clicked");
		//similar to extra-hidepost.js, I access the parent's (li element) index
		var ind = $(this).parent().index() + 2; //I add 2 because nth-child doesn't start at 0 (ew)
		$('html, body').animate({
		scrollTop: $('.post:nth-child(' + ind + ')').offset().top}, 'slow');
		return false;	
		//safeguard to return false, although I use return false so much I'm probably misusing it,
		//according to this article: http://fuelyourcoding.com/jquery-events-stop-misusing-return-false/
		
	});
	$("a[href='#top']").click(function() {
		console.log("going to top");
		$("html, body").animate({scrollTop:0}, "slow");
		return false;
	});
});