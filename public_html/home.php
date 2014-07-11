<!DOCTYPE html>
<!--I like typing my html pages from scratch, because if from-scratch cookies can taste better than store bought, from-scratch web pages should taste better too.-->
<html>
	<head>
		<?php include 'header.php';?>
		<title>Kelly Yu | Home</title>
		<link href='http://fonts.googleapis.com/css?family=Lora' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
		<link rel="shortcut icon" href="tabicondark2.png">
		<script type="text/javascript">
		function swap(one, two) {
			document.getElementById(one).style.display = 'block';
			document.getElementById(two).style.display = 'none';
		}
		function show(element) {
			document.getElementById(element).style.display = 'block';
		}
		function hide(element) {
			document.getElementById(element).style.display = 'none';
		}
		//technically I could condense functions by making a single function for show/hide using a toggle but whatever
		function highlight(element) {
			document.getElementById(element).style.color = '#9DCC5A';
		}
		function dehighlight(element) {
			document.getElementById(element).style.color = '#959595';
		}
		//function aInfo() {
			//var text = "About Me"
			//get the element that you want to change
			//var info = document.getElementById("<%= info.ClientID %>");
			//info.value = text;
		//}
        </script>

	</head>
	
	<body id="content">
		<div class="noselect" id="apokellypse">
		<!--I considered using font first for the logo/navigation panel, but apparently that's bad practice - whoops.
		Guess I'll have to use images/image maps now. -->
			<!--<p class="noselect" id="apokellypse" > -->
				<span 
				onMouseOver="show('about');hide('home_main');dehighlight('kelly')" 
				onMouseOut="hide('about');show('home_main');highlight('kelly')">
				<a href="about.html">a
					<!--<span class="hasinfo">About Me</span>-->
					<!--the above was a messy experiment -->
				</a></span>
				<span 
				onMouseOver="show('projects');hide('home_main');dehighlight('kelly')" 
				onMouseOut="hide('projects');show('home_main');highlight('kelly')">
				<a href="projects.html">p </a></span>
				<span 
				onMouseOver="show('odds&ends');hide('home_main');dehighlight('kelly')" 
				onMouseOut="hide('odds&ends');show('home_main');highlight('kelly')">
				<a href="odds&ends.html">o </a></span>
				<!--Using span introduces these weird spaces between the letters-->
				<!--disable clicking on home when you're one home
				
				<span onMouseOver="show('home_main')" onMouseOut="hide('home_main')"><a href="home.html">
				-->
				<span id="kelly" class="selected">
				<span>k</span>
				<span>e</span>
				<span>l</span>
				<span>l</span>
				<span>y</span>
				</span>
				<!--</a>
				</span>
				-->
				<span 
				onMouseOver="show('portfolio');hide('home_main');dehighlight('kelly')" 
				onMouseOut="hide('portfolio');show('home_main');highlight('kelly')">
				<a href="portfolio.html">p </a></span>
				<span 
				onMouseOver="show('skills');hide('home_main');dehighlight('kelly')" 
				onMouseOut="hide('skills');show('home_main');highlight('kelly')">
				<a href="skills.html">s </a></span>
				<span 
				onMouseOver="show('extra');hide('home_main');dehighlight('kelly')" 
				onMouseOut="hide('extra');show('home_main');highlight('kelly')">
				<a href="extra.html">e </a></span>
				<!--<br>
				<button id="info" class="astext" value="button" disabled></button> -->
			<!--</p>-->
		</div>
		<div style="display:none" class="noselect small" id="about">
			about me
		</div>
		<div style="display:none" class="noselect small" id="projects">
			projects
		</div>
		<div style="display:none" class="noselect small" id="odds&ends">
			odds & ends
		</div>
		<div class="noselect small" id="home_main">
			home
		</div>
		<div style="display:none" class="noselect small" id="portfolio">
			portfolio
		</div>
		<div style="display:none" class="noselect small" id="skills">
			skills & experience
		</div>
		<div style="display:none" class="noselect small" id="extra">
			extracurriculars
		</div>
		
		<hr>
		<p>Hi there. Welcome to my website! Feel free to poke around. It is currently in development so pages may disappear, URLs may change, and so on. In the meantime check out 
		<a href="projects.html"><span class="link accent">my projects</span></a>!
		<br>
		<br>
		<span class="selected">Announcement!</span> <a href="about.html"><span class="link accent">about</span></a> page has been recently completed.
		<br>
		<br>
		I'd like to put a blog on here. I think that requires knowing PHP - thank you Suni for letting me borrow the PHP book!
		<br>
		<br>
		<span class="selected">Projected Completion Date: June 30th.</span></p>
	</body>
</html>
	
				