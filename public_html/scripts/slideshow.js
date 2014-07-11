$(document).ready(function() {

	//VARIABLES
	var currentPosition = 0; //what slide we're currently looking at
	var slideWidth = 500;
	var slides = $('.slide'); //reference to slides in the code
	var numberOfSlides = slides.length; //num of slides in our slideshow by counting the number of elements that have class="slide"
	var slideShowInterval;
	var speed = 4500; //speed at which the slideshow runs
	
	slideShowInterval = setInterval(changePosition, speed);	//changes the picture
	slides.wrapAll('<div id="slidesHolder"></div>')
	slides.css({ 'float' : 'left' });
	$('#slidesHolder').css('width', slideWidth * numberOfSlides);
	
	$('#slideshow')
		.prepend('<span class="navvy" id="leftNav">Move Left</span>')
		.append('<span class="navvy" id="rightNav">Move Right</span>');
		
	managenav(currentPosition);
	
	//this will tell the buttons to do cool things when clicked
	$('.navvy').bind('click', function() {
		//adjusts the position
		currentPosition = ($(this).attr('id') == 'rightNav')
		? currentPosition+1 : currentPosition-1; //yay tertiary operators!
		
		//hiding and showing
		manageNav(currentPosition);
		clearInterval(slideShowInterval); //resets timer
		slideShowInterval = setInterval(changePosition, speed);
		moveSlide();
	});
	
	function manageNav(position) {
		if(position==0) { $('#leftNav').hide() }
		else { $('#leftNav').show() }
		if(position==numberOfSlides-1) { $('#rightNav').hide() }
		else { $('#rightNav').show()
	}
	
	function changePosition() {
		if(currentPosition == numberOfSlides - 1) {
			currentPosition = 0;
			manageNav(currentPosition);
		} else {
			currentPosition++;
			manageNav(currentPosition);
		}
		moveSlide();
	}
	function moveSlide() {
		$('#slidesHolder').animate({'marginLeft' : slideWidth*(-currentPosition)});
	}
});
