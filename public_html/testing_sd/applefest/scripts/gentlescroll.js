$(document).ready(function() {

	$('a[href^="#"]').click(function() {
		console.log("link clicked");
		var target = $(this.hash); //modified from css-tricks.com
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: $(target).offset().top}, 'slow');
			// target.hide(300); //this is fun
			var ind = target.index(); //the section that it is within the body
			// target.parent().children('section:nth-child(' + (ind + 1) + ')').children("div").show(300);
			//since the above didn't work you'll have to put the id's exactly where the content is
			//you can add link padding if you really have to
			target.children("section div").show(300);
			return false; //probs not good practice
		}
	});
	$("a[href='#top']").click(function() {
		console.log("going to top");
		$("html, body").animate({scrollTop:0}, "slow");
		return false;
	});
});