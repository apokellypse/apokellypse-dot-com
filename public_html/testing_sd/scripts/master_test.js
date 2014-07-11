var count = assigned;
		
function display(element, word, mrID) {
	document.getElementById(element).innerHTML = word; //set the text
	if (word != mrID) { //if it's not the current page set as pink
		console.log('takes you away from page')
		document.getElementById(element).style.color = '#EE71A2';
	}
	if (word === mrID) { //if it is the current page set as green
		console.log('inside display, if block');
		document.getElementById(element).style.color = '#9DCD5B';
	} //triple equal signs look ridculous but Bo explained them to me and now I gotta admit they're pretty cool
}
function highlight(element) { //removes the href thing so that the CSS elements that affect links won't affect that, theoretically...
	document.getElementById(element).removeAttribute("href");
	document.getElementById(element).style.color = '#9DCC5A';
	count=assigned;
}
function dehighlight(element) {
	document.getElementById(element).removeAttribute("href");
	document.getElementById(element).style.color = '#959595';
	count=assigned;
}
function reset(element, num) { //resets it to prevent the arrow thing from bugging out - sometimes it loses count
//it might also have to do with the fact that Javascript runs nonlinearly or something...
	//document.getElementById(element).removeAttribute("href");
	//Rachel V suggested that the home button always be active so users can adjust to consistency across the website
	//Xinran's beta test was also quite impressive - she found the hover navbar after discovering the arrow menu's click functionality
	//unfortunately the average user still seems to be thinking a bit too much
	
	document.getElementById(element).href = String(urls[count]) + ".html";
	count=num; //cannot say count=assigned because assigned maybe have changed value over time, may not be equal to its initial value
}
var menu = ["about me", "projects", "odds & ends", "home", "portfolio", "skills & experience", "extracurriculars"];
var urls = ["about", "projects", "odds&ends", "home", "portfolio", "skills", "extra"]; // I love string concatenation
var idlist = ["ab", "pr", "od", "kelly", "po", "sk", "ex"];
function goLeft(element) { //maybe one day I'll combine functions with a fancy switch statement or something
	count = (count+6)%7;
	document.getElementById(element).style.color = '#9DCD5B';
	document.getElementById(element).innerHTML = menu[count];
	document.getElementById(element).removeAttribute("href");
	document.getElementById(element).href = String(urls[count]) + ".html"; //dat concatenation doe
	if (count!=assigned) {		
		document.getElementById(element).style.color = '#EE71A2';
	}
	console.log(count); //smells like 2112...but yay consoles
}

function goRight(element) {
	count = (count+1)%7;
	document.getElementById(element).style.color = '#9DCD5B';
	document.getElementById(element).innerHTML = menu[count];
	document.getElementById(element).removeAttribute("href");
	document.getElementById(element).href = String(urls[count]) + ".html";
	if (count!=assigned) {
		document.getElementById(element).style.color = '#EE71A2';
	}
	console.log(count); //works well in Chrome, but FF gives better error messages imo
}

//http://css-tricks.com/snippets/jquery/smooth-scrolling/
//not working :(
/*$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});*/