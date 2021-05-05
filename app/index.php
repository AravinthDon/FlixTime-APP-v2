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

  <!--Style sheet-->
  <?php include($components."stylesheet.php"); ?>
</head>

<body>
  <div class="background-wrap"> 
      <?php 
        include($components."header.php"); 
      ?>
      <div class="wrap">
        <div class="container">
            <section class="search-area aligh-items-center">
                <!-- Using grids to position -->
                <div class="row label-row">
                  <div class="col-lg-12">
                    <h2>Search for your favorite movies and TV Shows</h2>
                  </div>
                </div>
                <div class="row search-row"> 
                      <div class="col-lg-12">
                              <form id="searchForm">
                                    <input id="searchText" type="search" placeholder="Eg: Avengers">
                                    <button class="btn btn-lg btn-success" type="submit">Search</button>
                              </form>
                      </div>
                </div>
              </section>
        </div>
      </div>
  </div>
  
  
    <div class="masonry" id="masonry">
    </div>

    <?php include($components."footer.php"); ?>
    <!-- Scripts-->
    <?php include($components."script.php"); ?>
    <script src="js/app.js"></script>
</body>

</html>