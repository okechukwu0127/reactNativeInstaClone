<?php
require_once('db_connect.php');




if((isset($_REQUEST['fromUser'])) && (isset($_REQUEST['toUser'])))
{
$sql_image="SELECT * FROM message WHERE fromuser='".$_REQUEST['fromUser']."' and touser='".$_REQUEST['toUser']."'
UNION
SELECT * FROM message WHERE fromuser='".$_REQUEST['toUser']."' and touser='".$_REQUEST['fromUser']."'
";
}

else if(isset($_REQUEST['toUser']))
{
$sql_image="SELECT * FROM message WHERE touser='".$_REQUEST['toUser']."'";
//echo $_REQUEST['toUser'].'-<br>'.$sql_image.'<br>';
}
else if(isset($_REQUEST['fromUser']))
{

$sql_image="SELECT * FROM message WHERE fromuser='".$_REQUEST['fromUser']."'";


}
else
{
$sql_image="SELECT * FROM message";

}

 $query_image=mysqli_query($conn,$sql_image) or die($sql_image."".mysqli_error($conn));


$array_row=[];
while($row=mysqli_fetch_array($query_image))
{


    array_push($array_row,$row);

}



$array = $array_row;

foreach($array as $key=>$a)
{


        foreach($a as $key_y=>$aa)
        {
        $array_y[$key_y] = mysqli_real_escape_string($conn,$aa);
        }

}

$data ='{"data":'.json_encode($array).'}';

echo ($data);








?>