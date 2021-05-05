/**
 * Template strings ref: https://wesbos.com/template-strings-html
 */

$(document).ready(() => {
    $("#searchForm").submit((e) => {
        //document.getElementById('masonry').innerHTML = '';
        let searchText = $("#searchText").val();
        let results = search(searchText);
        let output = ``;
        //$("#masonry").append(output);
        //$("#masonry").append("hello");
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
                    output += showCard(movie);
                });
            } 
            if(result.tvshows.length> 0){
                $.each(result.tvshows, function(i, tvshow){
                    output += showCard(tvshow);
                });
            }
        console.log(output);
        
        $("#masonry").append(output);
        },
        error: function(xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            console.log('Error - ' + errorMessage);
        }
    });

    //return output;
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
    
    var poster_url = '';
    if(show.poster_url != "NULL") {
        poster_url = show.poster_url;
    }
    return `<div class="item"><div><article class="card"><img src="${poster_url}"><footer><h3>${show.Title}</h3><button>Movie Details</button></footer></article></div></div>`;
}