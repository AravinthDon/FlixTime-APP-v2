/**
 * Template strings ref: https://wesbos.com/template-strings-html
 */

$(document).ready(() => {
    $("#searchForm").submit((e) => {
        let searchText = $("#searchText").val();
        let results = search(searchText);
        let output = ``;
        $("masonry").append(output);
        $("masonry").append("hello");
        e.preventDefault();
    });
})

function search(searchText) {

    let result = {};
    let output = ``;
    $.ajax({
        method: 'GET',
        url: `http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/shows/search.php?keyword=${searchText}`,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            // build the data
            result.movies = response.results.Movies;
            result.tvshows = response.results.TV_Shows;
            
            if(result.movies.length>0){
                $.each(result.movies, function(i, movie){

                    show = getShow(movie.URL);
                    output += showCard(show);
                });
            } 
            if(result.tvshows.length> 0){
                $.each(result.tvshows, function(i, tvshow){
                    show = getShow(tvshow.URL);
                    output += showCard(show);
                });
            }
        console.log(output);
        
        },
        error: function(xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

    return output;
}

/**
 * gets individual show
 * @param {*} geturl 
 */
function getShow(geturl) {

    let show = {};
    $.ajax({
        method: 'GET',
        url: geturl,
        dataType: 'json',
        success: function(response) {
            if(response.data.length > 0) {
                show = response.data[0];
            }  
        },
        error: function(xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

    return show;
}

/**
 * returns if an object is empty or not
 * @param {*} obj 
 * @returns boolean
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/**
 * Returns a showcard
 * @param {*} show 
 * @returns 
 */
function showCard(show) {
    var poster_url = show.poster_url == "NULL" ? "https://via.placeholder.com/150" : show.poster_ul;
    return `<div class="item"><div><article class="card"><img src="${poster_url}"><footer><h3>${show.Title}</h3><button>Movie Details</button></footer></article></div></div>`;
}