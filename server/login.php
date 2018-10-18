<?php

$json = json_decode(file_get_contents('php://input'), true);



if(isset($json[0]['email']) || isset($json[1]['uniqIdOnly']))
{
	require_once('db_connect.php');
    //$state = array("statusMsg"=>"failed");

    if($json[1]['uniqIdOnly']=='yes')
    {
    	$sql_="SELECT * FROM info WHERE  uniqID='".($json[1]['uniqID'])."'";

    }
    else
    {
    	$sql_="SELECT * FROM info WHERE email='".$json[0]['email']."' and password='".md5($json[0]['password'])."'";

    }

        /**/$query_= mysqli_query($conn,$sql_) or die($sql_."".mysqli_error($conn));

        if(mysqli_num_rows($query_)>0)
        {
            $uniqID=mysqli_fetch_array($query_)['uniqID'];

            $state = array("statusMsg"=>"success",'uniqID'=>$uniqID);
        }
        else
        {
            $state = array("statusMsg"=>"failed");
        }

        mysqli_close($conn);/**/

		echo json_encode($state);



}
else{

	$state = array("statusMsg"=>"ERROR");



		//echo json_encode($json[1]['uniqID']);

		echo json_encode($state);


}


?>