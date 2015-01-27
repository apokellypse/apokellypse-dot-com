$(document).ready(function() {
	$(".subCol > a, .imgPane > a").click(function(e) {
		e.preventDefault(); //the browser won't open the link
		console.log("prevented default");
		var href = $(this).attr("href");
		console.log('<img src="' + href + '"/>');

		/*in case the lightbox already exists (we don't want two elemtns with the same id)*/
		if ($('#box').length > 0) {
			$('#content').html('<img src="' + href + '" />'); /*replacing image*/
			$('#box').show();
		}
		else {
			var box = 
			'<div id="box">' +
				'<div id="content">' +
					'<img src="' + href + '"/>' +
				'</div>' +
			'</div>';

			$('body').append(box);
			console.log("box added");
			$('#box').show();
		}

		$('#box').on('click', function() {
			$('#box').hide();
			console.log("box hidden");
		});
	});
	/*http://stackoverflow.com/questions/4753695/disabling-right-click-on-images-using-jquery*/
	$('body').on('contextmenu', 'img', function(e) {
		return false;
	});
});