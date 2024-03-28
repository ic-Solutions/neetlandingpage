<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "application_data";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$student_name = $_POST['student_name'];
$parents_name = $_POST['parents_name'];
$mobile_number = $_POST['mobile_number'];
$email = $_POST['email'];
$city = $_POST['city'];
$state = $_POST['state'];
$number_of_sheets = $_POST['number_of_sheets'];

$sql = "INSERT INTO users (Student_name, Parents_name, Mobile_number, email, City, State, Number_of_sheet)
        VALUES ('$student_name', '$parents_name', '$mobile_number', '$email', '$city', '$state', $number_of_sheets)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
