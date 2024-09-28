<?php
require_once "vendor/autoload.php";
require_once "classes/receptionists.php";
require_once "classes/products.php";
$app = new Silex\Application();

$app->get('/receptionists/list', function () use ($app){
	$crew = new Crews;
	$list = $crew->read();
	return $app->json($list);

});

$app->post('/receptionists/add-item', function () use ($app){
    $crew = new Crews;
    $message = json_decode(file_get_contents('php://input'),true);
    $crew->create($message);
	$lastid = $crew->lastID();
	return $app->json(array("create-crew" => "yes", "create-id" => $lastid));
});
$app->post('/receptionists/update-item', function ()use ($app) {
    $crew = new Crews;
    $message = json_decode(file_get_contents('php://input'),true);
	$idGroup = $message["id"];
    $crew->update($message);
    return $app->json(array("update-group" => "yes", "id_update" => $idGroup));
});

$app->post('/receptionists/delete-item', function ()use ($app) {
	$crew = new Crews;
    $message = json_decode( file_get_contents('php://input'),true);
    $id = intval($message["id"]);
	if ($crew->exists($id)) {
            $crew->delete($id);
			return $app->json(array("delete-crew" => "yes", "id_delete" => $id));
	} else {
		return $app->json(array("delete-crew" => "no"));
	}
});

$app->get('/products/list', function () use ($app){
	$collector = new Collectors;
    $needcrews = true;
	$list = $collector->read($needcrews);
	return $app->json($list);
});

$app->post('/products/add-item', function () use ($app) {
    $message = json_decode(file_get_contents('php://input'),true);
    $log = file_get_contents('php://input');
    file_put_contents('./log_'.date("j.n.Y").'.log', $log, FILE_APPEND);
    $collector = new Collectors();
    $collector->create($message);
    $lastid = $collector->lastID();
    return $app->json(array("create-collector" => "yes", "create-id" => $lastid));
});
$app->post('/products/update-item', function () use ($app){
    $collector = new Collectors;
    $message = json_decode(file_get_contents('php://input'),true);
    $id = $message["id"];
    $collector->deleteImage($id);
    $collector->update($message);
	return $app->json(array("update-student" => "yes", "id_update" => $id));
});

$app->post('/products/delete-item', function () use ($app) {
    $collector = new Collectors();
    $message = json_decode( file_get_contents('php://input'),true);
    $id = intval($message["id"]);
    if ($collector->exists($id)) {
        $collector->deleteImage($id);
        $collector->delete($id);

        return $app->json(array("delete-collector" => "yes", "id_delete" => $id));
    } else {
        return $app->json(array("delete-collector" => "no"));
    }
});

$app->run();