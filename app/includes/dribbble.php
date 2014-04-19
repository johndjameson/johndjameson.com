<?php
$apiURL = "http://api.dribbble.com/players/johndjameson/shots";
$data = file_get_contents($apiURL);

header('Content-type: application/json');
echo $data;

?>
