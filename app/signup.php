<?php
    include("config/core.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlixTime - Sign up</title>

    <?php include($components."stylesheet.php"); ?>

</head>
<body>
    <?php
        include($components."header.php");
    ?>

    <div class="container">
        <div class="login-form">
            <form id = "signupForm">
                <h2 class="text-center">Sign up</h2> 
                <div class="message" id="message"> </div>      
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Username" required="required" id = "username">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" required="required" id = "password">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Sign up</button>
                </div>        
            </form>
            <p class="text-center"><a href=<?php echo $SIGNIN_URL; ?>>Sign in</a></p>
        </div>
    </div>
    
    <?php include($components."script.php"); ?>
    <script src="js/signup.js"></script>
</body>
</html>