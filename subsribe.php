<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define your database connection parameters
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "sub";

    // Create a database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve the email from the form
    $email = $_POST["email"];

    // Insert the email into your subscribers table (replace 'subscribers' with your actual table name)
    $sql = "INSERT INTO subscribers (email) VALUES ('$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Thank you for subscribing!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}``
?>
