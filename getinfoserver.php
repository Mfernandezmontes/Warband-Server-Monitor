<?php

$msg = null;

if(isset($_GET["ip"]) && isset($_GET["port"])){

    $ip = $_GET["ip"];
    $port = $_GET["port"];

    $sXML = download_page('http://'. $ip .':' . $port);
    $oXML = new SimpleXMLElement($sXML);

    //pasamos xml a json
    $json = json_encode($oXML,JSON_FORCE_OBJECT);


    echo $json;


//var_dump($json);

}

else{

    $msg = "Error ip or port";
    echo $msg;
}

function download_page($path){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$path);
    curl_setopt($ch, CURLOPT_FAILONERROR,1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    $retValue = curl_exec($ch);
    //$retValue = curl_error($ch);
    curl_close($ch);
    return $retValue;
}