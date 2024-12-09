<?php
require_once 'koneksi.php';

extract($_POST);
$stmt = $conn->prepare(
    "INSERT INTO users (username, fullname, password, foto_profil) VALUES (?, ?, ?, ?)"
);
$stmt->bind_param("ssss", $username, $fullname, $password, $foto_profil);
if ($stmt->execute()) {
    $arr = ["result" => "success"];
} else {
    $arr = ["result" => "error", "message" => "Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
