<?php
    include("config/core.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlixTime - Sign in</title>

    <?php include($components."stylesheet.php"); ?>
    <link rel="stylesheet" href = "css/sign.css">

</head>
<body>
    <?php  
        $header = $components."header.php";
        include($header);
    ?>
    
    <div class="container">
        <div class="jumbotron">
            <div class="row"> 
                <div class="col-md-6">

                </div>

                <div class="col-md-6 form-div">
                    <div class="login-form">
                        <form id = "signinForm">
                            <h2 class="text-center">Sign in</h2> 
                            <div class="message" id="message"> </div>      
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username" required="required" id = "username">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" required="required" id = "password">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                            </div>        
                        </form>
                        <p class="text-center"><a href=<?php echo $SIGNUP_URL; ?>>Create an Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <?php include($components."footer.php"); ?>
    <?php include($components."script.php"); ?>
    <script src="js/signin.js"></script>
</body>
</html>