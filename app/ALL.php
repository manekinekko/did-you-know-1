<?php 

$is_xhr = isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
echo file_get_contents('ALL.json');

exit();
if( $is_xhr ){
}
else {
	header('location: http://wassimchegham.com/404');
}

?>