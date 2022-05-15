<?php

    class Usuario 
    {
        public $id;
        public $nome;
        public $email;
        public $senha;
        
        function salvar_usuario($nome, $email, $senha) 
        {
            include 'bancoDados.php';
           
            $sql = "INSERT INTO usuario (nome, email, senha) 
                VALUES (' $nome ', ' $email ', ' $senha ')";
           
            $conn->query($sql);

            $conn->close();
           
            return "Usuario criado com sucesso!";
        }

        function listar_usuarios() 
        {
            include 'bancoDados.php';
            
            $sql = "SELECT * FROM usuario";
            
            $result = $conn->query($sql);

            $lista = [];
            
            if ($result->num_rows > 0) 
            {
                while($row = $result->fetch_assoc()) 
                {
                   $usuario = new Usuario();
                   $usuario->nome = $row["nome"];
                   $usuario->email = $row["email"];
                   $usuario->senha = $row["senha"];

                   array_push($lista, $usuario);
                }
            } else {
                return null;
            }
            $conn->close();
            
            return $lista;
        }
    }
?>