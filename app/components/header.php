
<?php
    echo "<header>
            <!-- Navigation bar-->
            <nav class='navbar navbar-expand-lg navbar-light'>
              <a class='navbar-brand' href={$HOME_URL}>FlixTime</a>

              <!-- Toggler button when minimized -->
              <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'></span>
              </button>

              <!-- Collapsable options -->
              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav ml-auto'>
                  <li class='nav-item active'>
                    <a class='nav-link' href={$HOME_URL}>Home</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href={$MOVIES_URL}>Movies</a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href={$TVSHOWS_URL}>TV Shows</a>
                  </li>
                  <li class='nav-item' id='signin'>
                    <a class='nav-link' href={$SIGNIN_URL}>Sign in</a>
                  </li>
                  <li class='nav-item' id='logout'>
                    <a class='nav-link' href={$LOGOUT_URL}>Log out</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>";

?>