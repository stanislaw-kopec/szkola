<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cw4.css">
</head>
<body>
    <section class="baner">Biuro wycieczkowe</section>
    <section class="wrapper">
        <nav>
            <ul>
                <li><a href="cw4.php">Strona główna</a></li>
                <li><a href="lista.php">Lista wycieczek</a></li>
                <li><a href="zapisz.php">Zapisz się na wycieczkę</a></li>
                <li><a href="uczestnicyAll.php">Lista uczestników wycieczek</a></li>
            </ul>
        </nav>
        <section class="main">
            <?php
            require "functions.php";
            if(!isset($_GET['id'])){header("Location: uczestnicyAll.php");  }
            $id = intval($_GET['id']);
            $ucz = getUczestnikById($id);
            echo "<h2>Wycieczki uczestnika: {$ucz[1]} {$ucz[2]}</h2>";
            //var_dump($ucz);
            $wycieczki = getAllWycieczki();
            $wycById = getWycieczkiByIdUczestnika($id);
            var_dump($wycById);
            echo wycieczkiToListCB($wycieczki,$wycById);
            ?>
        </section>

    </section>
    <section class="footer">Stopka do zrobienia</section>
    
</body>
</html>