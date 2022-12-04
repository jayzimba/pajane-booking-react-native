<?php
    $CN =  mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "paj_db");

    $from = $_POST["from"];
    $to = $_POST["to"];
    $date = $_POST["date"];
    $current_date = date('Y-m-d');

    if($date == null  || $date == "")
    {
        $date = $current_date;
    }
    $SQ = "SELECT * FROM trip t, bus b, operator o  
    WHERE (t.BusBusId = b.BusId AND b.OperatorOperatorID = o.OperatorID) 
    AND ((t.From = '$from' AND t.To = '$to') AND (t.date = '$date')) ORDER BY t.Price";
    $Table = mysqli_query($CN, $SQ);
 
    $json;

    if(mysqli_num_rows($Table) > 0){
            while($Row = mysqli_fetch_assoc($Table))
            {
                $json[] = $Row; 
            }
           mysqli_fetch_all($Table, MYSQLI_ASSOC);

            echo json_encode($json);
    }
    else{
        echo "No trip found ";

    }
?>