<?php
require_once 'db_connect.php';

function clear($input){
    global $connect;
    //sql
    $var = mysqli_escape_string($connect,$input);
    //xss
    $var = htmlspecialchars($var);
    return $var;
}

if(isset($_POST['btn-login'])){
    $email = clear($_POST['email']);
    $senha = clear($_POST['senha']);

    $sql = "SELECT FROM usuarios  WHERE email = '$email'";
    echo $sql;
    var_dump($sql);
}