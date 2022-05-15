<?php

    include '../modelo/classeUsuario.php';

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    
    $usuario = new Usuario();
    $resposta = $usuario->salvar_usuario($nome, $email, $senha);

    include "../visao/resposta.php";
?>