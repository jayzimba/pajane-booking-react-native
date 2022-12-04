<?php
    $CN =  mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "paj_db");

    $userID = $_POST["userID"];


    $SQ = "SELECT *, o.OperatorName, ts.STATUS FROM booking b, operator o, bus bu, trip t, ticket ti,customer c, ticket_status ts WHERE (b.TripTripID = t.TripID AND b.CustomerCustomerID = c.CustomerID  AND bu.BusId = t.BusBusId AND bu.OperatorOperatorID = o.OperatorID AND ti.BookingBookingID = b.BookingID AND ti.Ticket_StatusStatusID = ts.StatusID) 
           AND (b.CustomerCustomerID = '$userID')";
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
        echo "No ticket found";
    }
?>