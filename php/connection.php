<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$conn = new mysqli("localhost", "root", "", "paj_db");
 
// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . $conn->connect_error);
}
 
?>