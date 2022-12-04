<?php
    $CN =  mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "paj_db");
    $json = file_get_contents('php://input');
    $obj = json_decode($json, true);

    $fullname = $_POST['fullName'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];

    $query1 = "SELECT * FROM customer WHERE contact = '$phone'";
    $res1 = mysqli_query($CN, $query1);



    if(mysqli_num_rows($res1) > 0)
    {
        $arr = array('result'=>'fail');
        echo "Account Already Exists ".json_encode($arr);
    }
    else
    {
        $query2 = "INSERT INTO customer ('fullName', 'Address', 'contact', 'password' ) 
        VALUES ($fullname, $address, $phone, '$password)";
        mysqli_query($CN, $query2);
        $arr = array('result'=>'ok');
        echo $fullname." ".json_encode($arr);
    }
    
?>