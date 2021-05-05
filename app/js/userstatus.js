$(document).ready(()  =>{
    if(is_logged_in()){
        $("#signin").hide();
        $("#logout").show();
    } else {
        $("#logout").hide();
        $("#sigin").show();
    }
});

function is_logged_in() {
    if(sessionStorage.getItem('user_id') === null && sessionStorage.getItem('api_key') === null) {
        return false;
    } 
    return true;
}