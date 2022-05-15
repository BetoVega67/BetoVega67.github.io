<html>
    <head>
         <meta charset="UTF-8">
    </head>
    <body>
        <table>
            <?php foreach ($usuarios as $usuario) { ?>
                <tr>
                   <td><?php echo $usuario->nome ?></td>
                   <td><?php echo $usuario->email ?></td>
                   <td><?php echo $usuario->senha ?></td>
                </tr>
           <?php } ?>
      </table>
   </body>
</html>