<?php

require_once 'koneksi.php';

extract($_POST);

$sql = "SELECT id FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $komentator);
$stmt->execute();
$result = $stmt->get_result();
$iduser = $result->fetch_assoc()['id'];


$stmt = $conn->prepare(
    "INSERT INTO komentars (iduser, idkejadian, komentar) VALUES (?, ?, ?)"
);
$stmt->bind_param("iis", $iduser, $idkejadian, $komentar);

$response = [];

if ($stmt->execute()) {
    $response = ["result" => "success"];
} else {
    $response = ["result" => "error", "message" => "Gagal simpan data"];
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>

