$(document).ready(function() {

		var currentPosition2 = 0;
		var slideWidth2 = 500;
		var slides2 = $('.slide2');
		var numberOfSlides2 = slides2.length;
		var slideShowInterval2;
		var speed2 = 3000;
		
		slideShowInterval2 = setInterval(changePosition2, speed2);
		
		slides2.wrapAll('<div id="slidesHolder2"</div>')
		
		slides2.css({ 'float' : 'left' });
		
		$('#slidesHolder2').css('width', slideWidth2 * numberOfSlides2);
		
		$('#slideshowWindow2')
			.prepend('<span class="navvy2" id="leftNav2"></span>')
			.append('<span class="navvy2" id="rightNav2"></span>');
			
		manageNav2(currentPosition2);
		
		$('.navvy2').bind('click', function() {
		
			currentPosition2 = ($(this).attr('id')=='rightNav2')
			? currentPosition2+1 : currentPosition2-1;
			
			manageNav2(currentPosition2);
			clearInterval(slideShowInterval2);
			slideShowInterval2 = setInterval(changePosition2, speed2);
			moveSlide2();
		});
		
		function manageNav2(position) {
			if(position==0) { $('#leftNav2').hide() }
			else { $('#leftNav2').show() }
			if(position==numberOfSlides2-1) { $('#rightNav2').hide() }
			else { $('#rightNav2').show() }
		}
		
		function changePosition2() {
			if(currentPosition2 == numberOfSlides2 - 1) {
				currentPosition2 = 0;
				manageNav2(currentPosition2);
			} else {
				currentPosition2++;
				manageNav2(currentPosition2);
			}
			moveSlide2();
		}
		
		function moveSlide2() {
			$('#slidesHolder2').animate({'marginLeft' : slideWidth2*(-currentPosition2)});
		}
	});