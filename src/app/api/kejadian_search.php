<?php
require_once "koneksi.php";

$search = $_GET['search'];
$sql = "SELECT * FROM kejadians WHERE judul LIKE '%$search%' ORDER BY tanggal DESC";

// $sql = "SELECT * FROM kejadians ORDER BY tanggal DESC";
$result = $conn->query($sql);
$data = array();

if ($result->num_rows > 0) {
while ($row = $result->fetch_assoc()) {
$data[] = $row;
}
}

echo json_encode($data);
$conn->close();
?>