<?php

	$EmailFrom = "no-reply@example.com"; // replace with your domain address
	$EmailTo = array ( "mail@example.com"); // your email address, where to receive new subscriptions
	$Subject = "Online Booking";
	$Name = trim(stripslashes($_POST['_YourName'])); 
	$Date = trim(stripslashes($_POST['_Date'])); 
	$Phone = trim(stripslashes($_POST['_Phone'])); 
	$NumberOfPeople = trim(stripslashes($_POST['_NumberOfPeople'])); 
	$Time = trim(stripslashes($_POST['_Time'])); 


	// prepare email body text
	$Body = "";
	$Body .= "Name: ";
	$Body .= $Name;
	$Body .= "\n";
	$Body .= "Date: ";
	$Body .= $Date;
	$Body .= "\n";
	$Body .= "Phone: ";
	$Body .= $Phone;
	$Body .= "\n";
	$Body .= "Number Of People: ";
	$Body .= $NumberOfPeople;
	$Body .= "\n";
	$Body .= "Time: ";
	$Body .= $Time;
	$Body .= "\n";
	
	if ( empty($Name) || empty($Date) || empty($Phone) || empty($NumberOfPeople) || empty($Time) ) {
		echo '<strong class="text-danger">Please fill in all the fields!</strong>';
		die();
	}
	
	// send email 
	foreach ( $EmailTo as $e ) {	
		$success = mail($e, $Subject, $Body, "From: <$EmailFrom>");
	}
	
	// redirect to success page 
	if ($success)
		echo '<strong class="text-success">We will contact you as soon as possible.</strong>';
	else
		echo '<strong class="text-red">There was an error. Please try again.</strong>';
?>