<?php

// login.php
include("koneksi.php");

extract($_POST);
$stmt = $conn->prepare("SELECT fullname FROM users WHERE username = ? and password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $r = mysqli_fetch_assoc($result);
    $arr = [
        "result" => "success",
        "fullname" => $r["fullname"]
    ];
} else {
    $arr = [
        "result" => "error",
        "message" => "username atau password salah!"
    ];
}

echo json_encode($arr);
$stmt->close();
