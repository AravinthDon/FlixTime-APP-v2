
// global variables
var limit = 20;
var offset = 1;

$(document).ready(() => {

    renderShows();
    //console.log(shows);
    $("#previous").click((e) => {
        if(offset != 1) {
            offset -= 20;
            renderShows();
        }
        e.preventDefault();
    });

    $("#next").click((e) => {
        offset += 20;
        renderShows();

        e.preventDefault();
    });

}); 

function renderShows() {

    //var shows = [];
    $.get(`http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/shows/?limit=${limit}&offset=${offset}`)
        .then((response) => {
            console.log(response);
            // check if the response if success
            if(response.status == "success") {
                
                let output = ``;
                let counter = 1;
                let columns = ``;
                
                $.each(response.data, function(index, show){

                    // //if(counter-1 % 4 == 0 && counter !== 1){
                    //     let row = `<div class="row">${columns}</div>`;
                    //     output += row;
                    //     columns = ``;
                    // } 
                    // columns += showCard(show);
                    // counter++;
                    output += showCard(show);
                });
                //console.log(output);
                $("#masonry").empty();
                $("#masonry").append(output);
            }
        }). catch((err) => {
            console.log(err);
        });

    // return shows;
}

/**
 * 
 * @returns boolean
 */
function getPageType() {

    return window.location.search.substring(1);
}

/**
 * Returns a showcard
 * @param {*} show 
 * @returns 
 */
 function showCard(show) {
    
    var poster_url = '';
    if(show.poster_url != "NULL") {
        poster_url = show.poster_url;
    } else {
        poster_url = "https://via.placeholder.com/150";
    }
    
    //return `<div class="movie-card-container"><div class="content-wrap col-lg-3 col-md-3 col-sm-6 col-xs-12 col-centered"><a href="#"><img src="${poster_url}"><div><p>${show.Title}</p></div></a></div></div>`;
    // return `<figure>
    //             <a href="#" onclick="movieSelected(${show.show_id})">
    //             <img src=${poster_url}>
    //             <figcaption>${show.Title}</figcaption>
    //             </a>
    //         </figure>`;

    return `<div class="movie-card-container" style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 100;">
                <a href="#" onclick="movieSelected(${show.show_id})">
                        <div class = "movie-card">
                                        <div class="img-wrapper">
                                            <img src="${poster_url}"> 
                                        </div>
                                        <p>${show.Title}</p>
                        </div>
                </a>
            </div>`;
}

function movieSelected(id){
    localStorage.setItem('showid', id);
    window.location = 'movie.php';
    return false;
}

