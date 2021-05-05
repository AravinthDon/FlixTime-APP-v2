<?php
    include("config/core.php");

    $title = NULL;
    if($_SERVER['REQUEST_METHOD'] = 'GET') {
      if(isset($_GET['movies']) && empty($_GET['movie'])){
        $title = 'Movie';
      } elseif(isset($_GET['tvshows']) && empty($_GET['tvshows'])){
        $title = 'TV Show';
      }
    }
?>
<!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>FlixTime - <?php echo $title; ?></title>

  <?php include($components."stylesheet.php"); ?>
</head>

<body>
  <?php
    include($components."header.php");
  ?>

  <div class="container">
    <div id="movie" class="well"></div>
  </div>

  <?php include($components."script.php"); ?>
  <script>
    getMovie();
  </script>
</body>

</html>