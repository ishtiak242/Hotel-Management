<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password, "hotelsdatabase");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Create database
$sql = "CREATE DATABASE hotelsdatabase";
//  $sql = "CREATE TABLE MyGuests (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
// firstname VARCHAR(30) ,
// lastname VARCHAR(30) ,
// email VARCHAR(50),
// reg_date TIMESTAMP
// )";

//$sql_insert = "INSERT INTO MyGuests('ID') VALUES('1'), ('firstname') VALUES ('Gest1'),('lastname') VALUES ('Boom'),('email')";

if ($conn->query($sql) === TRUE) {
    // echo "Database created successfully";
    echo "Table created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();

?>