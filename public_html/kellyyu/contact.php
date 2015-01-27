<!DOCTYPE html>
<html>
	<head>
		<?php include 'meta.php';?>
	</head>
	
	<body id="top">
		<?php include 'header.php';?>
		<div id="container">
			<h1>Contact</h1>
			<section>
				<article>
					<!--consulted this tutorial: http://www.the-art-of-web.com/javascript/validate-password/-->
					<form name="input" method="post" action="response.php" onchange="this.setCustomValidity(this.validity.patternMismatch ? this.title : '');">
						<h3>* = Required</h3>
						<div class="text">
							<h2>First name: *</h2>
							<input required maxlength="15" title="Please enter in your first name." size="21" type="text" name="firstname" pattern="([A-Za-z -])+">
						</div>
						<div class="text">
							<h2>Last name:</h2>
							<input maxlength="15" title="(Optional) Please enter in your last name." size="23" type="text" name="lastname" pattern="([A-Za-z -])+">
						</div>
						<div class="text">
							<h2>Email: *</h2>
							<input required maxlength="40" title="Please enter in your email address, in the form myname@example.com" size="25" type="email" name="email" pattern="([a-zA-Z0-9-_+\.]+@[a-zA-z0-9-_+]+((\.{0,1})[a-z])*(\.{1})[a-z]{2,4})">
						</div>
						<div>
							<h2>Reason for Contact</h2>
							<p class="form"><input type="checkbox" name="hello">Hello!</p>
							<p class="form"><input type="checkbox" name="website">Website Design Freelance</p>
							<p class="form"><input type="checkbox" name="animation">Animation Freelance</p>
							<p class="form"><input type="checkbox" name="tutoring">Tutoring Service</p>
							<p class="form"><input type="checkbox" name="advice">Advice</p>
							<p class="form"><input type="checkbox" name="other">
								<input placeholder="Other" maxlength="15" size="15" type="text" name="othertext"></p>
						</div>
						<div>
							<h3>Description</h3>
							<!-- <h3>Additional Comments or Questions?</h3> -->
							<div><textarea name="message" rows="10" cols="47"></textarea>
							<p><input type="submit" name="submit" value="Submit"></p></div>
						</div>
					</form>
				</article>
			</section>
		</div>
		<!-- <?php include 'footer.php';?> -->
	</body>
</html>
	
				