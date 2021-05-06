
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logging out</title>
</head>
<body>
    <p> You are being logged out..</p>
    <script>
        sessionStorage.clear();
        window.location.href = "index.php";
    </script>
</body>
</html>