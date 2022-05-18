<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body> 
        <div id="formulario">
        </div>
        
        <?php
            $nome = $_POST['nome'];
            $email = $_POST['email'];
            $idade = $_POST['idade'];

            include "resposta.php";
        ?>
    </body>
</html>
