<?php
  // requires core.php
  include("config/core.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlixTime</title>

    <?php include($components."stylesheet.php"); ?>
</head>
<body>
    <style>
      img {
        width: 100%;
        height: 100%;
      }
    </style>
    <?php 
      include($components."header.php"); 
    ?>
    <div class="container">
        <div class="jumbotron">
          <div id="showcase">

          </div>
        </div>
    </div>

    <?php include($components."script.php"); ?>
    <script src="js/movie.js"></script>
</body>
</html>