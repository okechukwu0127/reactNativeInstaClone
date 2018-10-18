<?php

//// THE CONNECTION TO DATABASE GOES HERE
//$server="okechukwu166795.netfirmsmysql.com";
//$username="dataville_root";
//$password="okechukwu0127";
//$dbase="dataville";
//$datetime=  date("D M j, Y. g:i a");


/**/
$server="localhost";
$username="root";
$password="";
$dbase="mobile_app";
$datetime =  date("D M j, Y. g:i a");
$string_d_ate2 = strtotime(date('m/d/y h:i:s a'));

 
/**/
//$query_db=mysqli_connect($server,$username,$password) or die ("Error Connecting to Server" .mysql_error());
//$connect=mysqli_select_db($dbase,$query_db) or die ("Error Getting Dbase Files" .mysql_error());

$conn = new mysqli($server,$username,$password,$dbase);

    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
		}
		else
		{
		//echo "Connected successfully";
	
		}	
		
	

 
 
 

?>