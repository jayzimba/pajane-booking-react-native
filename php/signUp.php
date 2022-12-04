<?php
    require_once("connection.php");
    
    $fullname = $_POST['fullname'];
    $address = $_POST['address'];
    $contact = $_POST['contact'];
    $password = ($_POST['password']);
    $ENC = md5($password); //password is un-hashed mean with no hacking capability(change to md5 for secure pass)
    
    
    $query = "SELECT * FROM customer WHERE contact = '$contact'";
    $query_result = mysqli_query($conn, $query);
    
    if (!mysqli_num_rows($query_result))
    {
        $Reg_Query = "INSERT INTO customer(`FullName`, `Address`, `Contact`, `Password`) VALUES ('$fullname', '$address', '$contact', '$ENC')";
        $Reg_Query_Result = mysqli_query($conn, $Reg_Query);
    
        if ($Reg_Query_Result) 
        {
            $Message = "Registered successfuly!";
        } else 
        {
            $Message = "Error - Try again";
        }
        
    } else 
    {
        $Message = "User Already Registered";
    }
    
    $response[] = array("Message" => $Message);
    
    echo json_encode($response);
?>