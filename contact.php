<?php

	$EmailFrom = "no-reply@example.com"; // replace with your domain address
	$EmailTo = array ( "mail@example.com"); // your email address, where to receive new subscriptions
	$Subject = "Message from website";
	$Name = trim(stripslashes($_POST['ContactName'])); 
	$Email = trim(stripslashes($_POST['ContactEmail'])); 
	$Message = trim(stripslashes($_POST['ContactMessage'])); 


	// prepare email body text
	$Body = "";
	$Body .= "Name: ";
	$Body .= $Name;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $Email;
	$Body .= "\n";
	$Body .= "Message: ";
	$Body .= $Message;
	$Body .= "\n";
	
	// send email 
	foreach ( $EmailTo as $e ) {	
		$success = mail($e, $Subject, $Body, "From: <$EmailFrom>");
	}
	
	// redirect to success page 
	if ($success)
		echo 'Thank for your message. We will contact you as soon as possible';
	else
		echo 'There was an error. Please try again.';
?>