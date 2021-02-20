<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cw_na_ocene</title>
</head>

<body>
    <?php
    
    $nameErr = $emailErr = $genderErr = "";
    $name = $email = $gender = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "Podaj imie i nazwisko";
        } else {
            $name = test_input($_POST["name"]);
            // filtr do imienia i nazwiska
            if (!preg_match("/^[a-zA-Z-'ąęćźżóĄĘĆŹŻŁł ]*$/", $name)) {
                $nameErr = "Możesz wprowadzidźić jedynie litery i spacje";
            }
        }

        if (empty($_POST["email"])) {
            $emailErr = "Wypełnij to pole";
        } else {
            $email = test_input($_POST["email"]);
            // użycie filtra do emaila
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Niepoprawny email";
            }
        }

        if (empty($_POST["gender"])) {
            $genderErr = "Podaj płeć";
        } else {
            $gender = test_input($_POST["gender"]);
        }
    }

    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>

    <h2>FORMULARZ</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        
        Imie i nazwisko: <input type="text" name="name" value="<?php echo $name; ?>">
        <span class="error">* <?php echo $nameErr; ?></span>
        <br><br>
        
        E-mail: <input type="text" name="email" value="<?php echo $email; ?>">
        <span class="error">* <?php echo $emailErr; ?></span>
        <br><br>
        
        Płeć:
        <input type="radio" name="gender" <?php if (isset($gender) && $gender == "kobieta") echo "checked"; ?> value="kobieta">Kobieta
        <input type="radio" name="gender" <?php if (isset($gender) && $gender == "mężczyzna") echo "checked"; ?> value="mężczyzna">Mężczyzna
        <input type="radio" name="gender" <?php if (isset($gender) && $gender == "inny") echo "checked"; ?> value="inny">Inny
        <span class="error">* <?php echo $genderErr; ?></span>
        <br><br>

        <input type="submit" name="submit" value="Zapisz">
        
        <p><span class="error">* pola obowiązkowe</span></p>

    </form>

    <?php
    echo "<h3>Twoje przesłane dane:</h3>";
    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $gender;

    $dane = $name . ' | ' . $email . ' | ' . $gender . PHP_EOL;

    $filename = 'dane.txt';

    if (file_exists($filename)) {
        $plik = fopen("dane.txt", "a");
        fwrite($plik, $dane);
        fclose($plik);
    } else {
        $plik = fopen("dane.txt", "w");
        fwrite($plik, $dane);
        fclose($plik);
    }
    ?>
</body>

</html>