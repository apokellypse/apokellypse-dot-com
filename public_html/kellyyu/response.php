<!DOCTYPE html>
<html>
	<head>
		<?php include 'meta.php';?>
	</head>
	
	<body id="top">
		<?php include 'header.php';?>
		<?php

		$first = ""; $last = ""; $email = ""; $message = "";
		$choices = array("hello", "website", "animation", "tutoring", "advice", "other");
		$purpose = array();
		$purposeDisplay = "";


		if ($_POST['submit'] == "Submit") {
			//for text boxes
			$first = $_POST['firstname'];
			$last = $_POST['lastname'];
			$email = $_POST['email'];
			// $other = $_POST['othertext'];
			//for the text area
			$message = $_POST['message'];

			//for checkboxes
			for ($x=0; $x<count($choices); $x++) {
			 	if (isset($_POST[$choices[$x]])) {
			 		array_push($purpose, $choices[$x]);
			 	}

			}

			//make into a long string
			for ($x=0; $x<count($purpose); $x++) {
				$purposeDisplay = $purposeDisplay . $purpose[$x] . "<br>";
			}

			if (isset($_POST['othertext'])) {
				$purposeDisplay = $purposeDisplay . $_POST['othertext'];
			}
			
		}


		?>
		<div id="container">
			<h1>Contact</h1>
			<section>
				<article>
					<p>Thank you for your response! I will get back to you soon.</p>
					<p>This is the information you have submitted:</p>
					<table>
						<tr>
							<th>Name</th>
							<td><?=$first . " " . $last?></td>
						</tr>
						<tr>
							<th>Email</th>
							<td><?=$email?></td>
						</tr>
						<tr>
							<th>Reason(s) for Contact</th>
							<td><?=$purposeDisplay?></td>
						</tr>
						<tr>
							<th>Message</th>
							<td><?=$message?></td>
						</tr>
					</table>
				</article>
			</section>
		</div>
		<!-- <?php include 'footer.php';?> -->
	</body>
</html>
	
				