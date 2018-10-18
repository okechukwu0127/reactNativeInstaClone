<?php

$json = json_decode(file_get_contents('php://input'), true);
$uniqID=uniqid();

if(isset($json['email']))
{
	require_once('db_connect.php');
	$sql_image="INSERT INTO info () VALUES('',
												'".$json['fullname']."',
												'".$json['email']."',
												'".md5($json['password'])."',
												'".$uniqID."',
												'".$datetime."')";
        $query_image=mysqli_query($conn,$sql_image) or die($sql_image."".mysqli_error($conn));
        mysqli_close($conn);
		
		
		if($query_image)
		{
				$state = array("statusMsg"=>"success");
		}
		else
		{
				$state = array("statusMsg"=>"failed");
			
		}
		
		echo json_encode($state);
		


}
else{
	
	$state = array("statusMsg"=>"ERROR");
			
		
		
		echo json_encode($state);
	
}


?>