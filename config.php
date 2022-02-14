<?php 

$dominio = "https://brooksapp.com.br/rastreio/";
$api = "https://brooksapp.com.br/api/";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$segments = explode('/', $uri);

$a = 0;
$atendimento = 0;

while($a<count($segments)):

    if($segments[$a]=="atendimento"):
        $atendimento = $segments[$a+1];
    endif;

    $a++;
endwhile;

?>