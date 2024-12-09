<?php
require_once "koneksi.php";


$sql = "SELECT kejadians.*, users.username, count(komentars.komentar) as komentarcount  FROM kejadians join users on kejadians.iduser = users.id left join komentars on komentars.idkejadian = kejadians.id group by kejadians.id order by tanggal desc;";

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