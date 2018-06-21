<?php

$link = mysqli_connect('***', '***', '***', '***');
if (!$link) {
	die("Не могу подключится к MySQL "  . mysqli_connect_error() . PHP_EOL);

}

mysqli_query($link,"SET NAMES 'utf8'");

$query=mysqli_real_escape_string($link, "SELECT filename FROM smiles".$_POST['id']." ORDER BY time ASC");
$sql=mysqli_query($link, $query);
$result = mysqli_fetch_all($sql,MYSQLI_NUM);
$data = [];
foreach ($result as $row) {
    $data[] = $row[0];
}

header('Content-Type: application/json');
echo json_encode($data);

?>
