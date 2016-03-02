<?php
$link = mysql_connect('localhost', 'root', 'root');
$db = mysql_select_db('coffee');
$select = mysql_query('SELECT numXic FROM coffee');
$result = mysql_fetch_assoc($select);
$post = $_POST[newNum];

foreach ($result as $key => $value) {
	$value;
}

if($post == 'ok'){
	$value = $value + 1;
	$update = mysql_query("UPDATE coffee SET numXic = $value");
}

echo $value;


mysql_close($link);
?>