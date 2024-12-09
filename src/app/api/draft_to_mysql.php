<?php

require_once 'koneksi.php';

extract($_POST);

$sql = "SELECT id FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $pembuat);
$stmt->execute();
$result = $stmt->get_result();
$iduser = $result->fetch_assoc()['id'];
$stmt->close();

$stmt = $conn->prepare(
    "INSERT INTO kejadians (iduser, judul, deskripsi, gambar, tujuan_instansi, tanggal) VALUES (?, ?, ?, ?, ?, ?)"
);
$stmt->bind_param("isssss", $iduser, $judul, $deskripsi, $gambar, $tujuan_instansi, $tanggal);

$response = array();

if ($stmt->execute()) {
    $response['result'] = 'success';
} else {
    $response['result'] = 'error';
    $response['message'] = 'Gagal menyimpan laporan';
}

echo json_encode($response);

$stmt->close();
$conn->close();
