<?php

    // Page URLS
    $HOME_URL =  "http://". $_SERVER['SERVER_NAME']. "/flixtime/app/";

    $SEARCH_URL = $HOME_URL. "search.php";

    $SHOWS_URL = $HOME_URL. "show.php";
    
    $MOVIES_URL = $HOME_URL. "show.php?movies";

    $TVSHOWS_URL = $HOME_URL. "show.php?tvshows";

    $SIGNIN_URL = $HOME_URL. "signin.php";

    $SIGNUP_URL = $HOME_URL. "signup.php";
    $LOGOUT_URL = $HOME_URL. "logout.php";

    $root = $_SERVER['DOCUMENT_ROOT'];
    // directories
    $js = $HOME_URL."js/";
    $css = $HOME_URL."css/";
    $config = $root."flixtime/app/config/";
    $components = $root."/flixtime/app/components/";
?>