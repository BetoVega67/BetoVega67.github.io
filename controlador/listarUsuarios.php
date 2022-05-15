<?php

    include '../modelo/classeUsuario.php';
    
    $usuario = new Usuario();
    $usuarios = $usuario->listar_usuarios();

    include "../visao/listarUsuarios.php";
?>