<?php
include 'db_config.php';

// If someone visits in a browser, show a "Found Me" message
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo "<h1>Student Marketplace API is ALIVE!</h1>";
    echo "<p>If you see this, the 404 error is fixed.</p>";
    exit;
}

// Handle Android App (POST request)
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $name  = $conn->real_escape_string($data['name']);
    $email = $conn->real_escape_string($data['email']);
    $pass  = $conn->real_escape_string($data['password']);
    $phone = $conn->real_escape_string($data['phone']);
    $uni   = $conn->real_escape_string($data['university']);

    $sql = "INSERT INTO users (email, name, password, phone, university) 
            VALUES ('$email', '$name', '$pass', '$phone', '$uni')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "User registered"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No data received"]);
}
?>