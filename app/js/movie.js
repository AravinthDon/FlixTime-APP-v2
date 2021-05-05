function getShow(){
    let showId = localStorage.getItem('showid');
  
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
            output =`
          <div class="row">
            <div class="title-wrap">
              <div class="col-md-4">
                <img src="${show.poster_url}" class="thumbnail">
              </div>
              <div class="col-md-8">
                <h2>${show.Title}</h2>
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
            </div>
          </div>
          <div class="row">
            <div class = "plot-wrap">
              <div class="well">
                <h3>Plot</h3>
                  ${show.Description}
                <hr>
              </div>
            </div>
          </div>
        `;
        });
        $('#showcase').append(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getShow();