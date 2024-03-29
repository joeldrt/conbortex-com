<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_mail = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_mail)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_mail))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'webpage@conbortex.com';//<== update the email address
$email_subject = "Mensaje desde la página";
$email_body = "Has recibido un mensaje de: $name.\n".
    "Mensaje:\n $message";

$bcc_mail = "joe@digiall.mx; ozacaula@digiall.mx";
$to = "vbarragan@conbortex.com"; // $to = "vbarragan@conbortex.com; fernandoz@conbortex.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_mail \r\n";
$headers .= "Return-Path: $visitor_mail \r\n";
$headers .= "X-Mailer: PHP \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
//header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 