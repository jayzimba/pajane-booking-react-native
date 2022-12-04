<?php
    require_once("connection.php");
    
    $phone = $_POST['phone'];
    $password = ($_POST['password']);
  
    
    $query = "SELECT * FROM customer WHERE (contact = '$phone' AND password = '$password')";
    $query_result = mysqli_query($conn, $query);
    
    $row = mysqli_fetch_array($query_result, MYSQLI_ASSOC);  
    $count = mysqli_num_rows($query_result);  
      
    if($count == 1)  
    {
            $Message = "log in successfuly!";   
    }
    else{
        $Message = "log in Failed!";
    }

    $response[] = array("Message" => $Message);
    
    echo json_encode($response);
?>