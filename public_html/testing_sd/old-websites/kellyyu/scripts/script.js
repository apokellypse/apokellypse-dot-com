$(document).ready(function() {
	/*based on the page, will have the page's title in the nav highlighted pink*/
	$('nav > a:nth-child(' + pageNumber + ') > div').css('background-color', 'rgba(255, 255, 255, .9');
	/*when using the hotkey nav (in the header), will also highlight the corresponding label in the nav*/
	$('header > span').mouseenter(function() {
		/*we access the index of the span that we are hovering over*/
		// console.log('mouse entered');
		// console.log($(this).index());
		var letter = $(this).index() + 1;
		if (letter != pageNumber) {
			$('nav > a:nth-child(' + letter + ') > div').css('background-color', 'rgba(255, 255, 255, .5');
		}
		
	});
	$('header > span').mouseout(function() {
		/*we access the index of the span that we are hovering over*/
		// console.log('mouse left');
		// console.log($(this).index());
		var letter = $(this).index() + 1;
		if (letter != pageNumber) {
			$('nav > a:nth-child(' + letter + ') > div').removeAttr('style');
		}
	});
});