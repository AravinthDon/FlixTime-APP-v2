
/**
 * delegate ref: https://stackoverflow.com/questions/5589491/jquery-click-event-after-appending-content
 */
$(document).ready(() => {
  let showid = localStorage.getItem('showid');
  
  getShow(showid);

});

function getShow(showId){
    
  
    $.get('http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/shows/show.php?showid='+showId)
      .then((response) => {
        let shows = response.data;
        let output = ``;

        $.each(shows, function(i, show) {
            let duration = ``;
            if(show.type == "show") {
                duration = `<li class="list-group-item"><strong>Duration:</strong> ${show.Duration}</li>`;
            } else if(show.type == "TV Show") {
                duration = `<li class="list-group-item"><strong>Duration:</strong> ${show.Seasons}</li>`
            }

            let add_watchlist = `<a href="#" id="addwatchlist">Add to Watchlist</a>`;
            let remove_watchlist = `<a href="#" id="removewatchlist"> Remove from Watchlist </a>`;
            output =`
          <div class="row title-wrap">
            <!--div class="title-wrap"-->
              <div class="col-md-4">
                <img src="${show.poster_url}" class="thumbnail">
              </div>
              <div class="col-md-8">
                <h2>${show.Title}</h2> ${add_watchlist} ${remove_watchlist}
                <ul class="list-group">
                  <li class="list-group-item"><strong>Genre:</strong> ${show.Genre.join(', ')}</li>
                  <li class="list-group-item"><strong>Released:</strong> ${show.YearReleased}</li>
                  <li class="list-group-item"><strong>Rating:</strong> ${show.Rating}</li>
                  <li class="list-group-item"><strong>Director:</strong> ${show.Director}</li>
                  ${duration}
                  <li class="list-group-item"><strong>Actors:</strong> ${show.Cast.join(', ')}</li>
                  <li class="list-group-item"><strong>Country(s):</strong> ${show.Country.join(', ')}</li>
                </ul>
              </div>
            <!--/div-->
          </div>
          <div class="row plot-wrap">
            <!--div class = "plot-wrap"-->
              <div class="well">
                <h3>Plot</h3>
                  ${show.Description}
                <hr>
              </div>
            <!--/div-->
          </div>
        `;
        });
        $('#showcase').append(output);
        return showId
      })
      .then((showid) => {
        $('#addwatchlist').hide();
        $('#removewatchlist').hide();

        if(isLoggedIn()){
          console.log("here");
          if(isWatchlist(showid)){
            $('#removewatchlist').show();
            //$("#addwatchlist").hide();
          } else {
            $('#addwatchlist').show();
            //$("#removewatchlist").hide();
          }
        }

        $('#addwatchlist').click((e) => {
          addToWatchlist(showid)
          e.preventDefault();
        });

        $('#removewatchlist').click((e) => {
          removeFromWatchlist(showid)
          e.preventDefault();
        });
      })
      .catch((err) => {
        console.log(err);
      });

      // remove the session storage variable
      //sessionStorage.removeItem('showid');
  }


function isLoggedIn() {
  if(sessionStorage.getItem('user_id') === null && sessionStorage.getItem('api_key') === null) {
      return false;
  } 
  return true;  
}

function isWatchlist(showid) {
  
  var isFound = false;
  user_id = sessionStorage.getItem('user_id');
  api_key = sessionStorage.getItem('api_key');
  $.get(`http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/user/watchlist.php?user_id=${user_id}&show_id=${showid}&api_key=${api_key}`)
    .then((response) => {

      if(response.status == "Found"){
        isFound = true;
      } else if(response.status == "Nope"){
        isFound = false;
      }
    }).catch((err) => {
      console.log(err);
    });

    return isFound;
}

function addToWatchlist(showid) {
  
  user_id = sessionStorage.getItem('user_id');
  api_key = sessionStorage.getItem('api_key');

  var formData = {
    user_id : user_id,
    api_key : api_key,
    show_id : showid,
  };

  console.log(formData);
  $.ajax({
    method: 'POST',
        url: "http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/user/watchlist.php",
        data: formData,
        encode: true,
        dataType: 'json',
        success: function(response) {
          if(response.status == "Success"){
            console.log(response);
            $('#addwatchlist').hide();
            $('#removewatchlist').show();
          } 
          
        },
        error: function(xhr, status, error) {
          var errorMessage = xhr.status + ': ' + xhr.statusText
          console.log('Error - ' + errorMessage);
      }
  });
}

function removeFromWatchlist(showid) {

  user_id = sessionStorage.getItem('user_id');
  api_key = sessionStorage.getItem('api_key');

  var formData = {
    user_id : user_id,
    api_key : api_key,
    show_id : showid
  };

  $.ajax({
    method: 'DELETE',
    url: "http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/user/watchlist.php",
    data: formData,
    encode: true,
    dataType: "json",
    success: function(response) {

      if(response.status == "Success") {
        $('#removewatchlist').hide();
        $('#addwatchlist').show();
      }
    },
    error: function(xhr, status, error) {
      var errorMessage = xhr.status + ': ' + xhr.statusText
      console.log('Error - ' + errorMessage);
    }
  });

}
