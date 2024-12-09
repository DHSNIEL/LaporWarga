<?php
require_once "koneksi.php";

$id = $_GET['id'];
$sql = "SELECT kejadians.*, users.username FROM kejadians join users on kejadians.iduser = users.id WHERE kejadians.id = $id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();

$sql  = "select komentars.*, users.username from komentars join users on komentars.iduser=users.id where idkejadian=$id";
$result = $conn->query($sql);
$komentars = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $komentars[] = $row;
    }
}
$data['komentars'] = $komentars;
echo json_encode($data);
$conn->close();
