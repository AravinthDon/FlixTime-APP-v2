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
    <?php 
      include($components."header.php"); 
    ?>

<div class="container">
      <div class = "jumbotron">
        <section class="search-area aligh-items-center">
        <!-- Using grids to position -->
          <div class="row">
            <div class="col-lg-12 col-md-10 text-center">
              <h2>Search for your favorite movies and TV Shows</h2>
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-12">
                  <form class="card card-sm" id="searchForm">
                    <div class="card-body row no-gutters align-items-center">
                      <div class="col-auto">
                        <i class="fas fa-search h4 text-body"></i>
                      </div>
                      <!--end of col-->
                      <div class="col">
                        <input class="form-control form-control-lg form-control-borderless" id = "searchText" type="search"
                          placeholder="Eg: Avengers">
                      </div>
                      <!--end of col-->
                      <div class="col-auto">
                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                      </div>
                      <!--end of col-->
                    </div>
                  </form>
                </div>
                <!--end of col-->
              </div>
            </div>
          </div>
        </section>
      </div>


  <div class="masonry" id="masonry">
  </div>



  <!-- Scripts-->
  <?php include($components."script.php"); ?>
  <script src="js/app.js"></script>
</body>

</html>