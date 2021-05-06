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
      <div class="jumbo-wrap">
        <div class="jumbotron" style="background-color: #8c9ba5;">
            <section class="search-area aligh-items-center">
                <!-- Using grids to position -->
                <div class="row">
                    <div style="text-align: center;" class="col-lg-12 col-md-12">
                        <h1>Search for your favorite movies and TV Shows</h1>
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-12">
                                <form class="card card-sm" id="searchForm">
                                    <div class="card-body row no-gutters align-items-center">
                                        
                                        <!--end of col-->
                                        <div class="col">
                                            <input id="searchText" class="form-control form-control-lg form-control-borderless" type="search" placeholder="Eg: Marvel's Avengers">
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
        </section></div>
        
      </div>

    <div class="masonry" id="masonry">
    </div>

    <?php include($components."footer.php"); ?>
    <!-- Scripts-->
    <?php include($components."script.php"); ?>
    <script src="js/app.js"></script>
</body>

</html>