$(document).ready(function() {
	// $("section ~ h2").css("height", "100px");
	//selects every h2 element preceded by a section element

	// var h2height = 0;
	// h2height = parseInt($("section > h2").css("height")) * 2;
	// console.log(h2height);
	// $("section > h2").parent().css("height", h2height);

	// $('section div').hide();
	// $('section div').css("display", "none");
	$('section div').hide();
	$('section div').parent().click(function() {
		console.log('parent clicked');
		// if ($(this).css("display") == "none") { //selects the section
		if ($(this).children("div").css("display") != "block") {
			console.log("hidden");
			// $(this).children("div").css("display", "block");
			$(this).children("div").show(300);
			// $(this).children("div").children().show(600);
		} else {
			// $(this).children("div").css("display", "none");
			$(this).children("div").hide(300); //nice animated effect
		}
	});

	// $("section h2").click(function() {
	// 	$(this).animate();

	// });
	// $("a.sub").hide();
	// $("a.sub").click(function() {
	// 	$(this).show(600);
	// })
});