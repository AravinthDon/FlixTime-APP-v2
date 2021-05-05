
$(document).ready( () => {

    $("#signupForm").submit((e) => {
        let username = $("#username").val();
        let password = $("#password").val();

        let user = signup(username, password);
        e.preventDefault();
    });
});

/**
 * Attempt to sign up
 * @param {*} username 
 * @param {*} password 
 */
function signup(username, password) {
    
    let user = {};

    var formData = {
        username: username,
        password: password,
    };

    $.ajax({
        method: "POST",
        url: "http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/user/signup.php",
        data: formData,
        encode: true,
        dataType: "json",
        success: function(data) {
            
            //console.log(data);
            if(data.status == "Success") {
                user.user_id = data.data.user_id;
                user.api_key = data.data.api_key;
                
                //console.log(data);
                sessionStorage.setItem("user_id", user.user_id);
                sessionStorage.setItem("api_key", user.api_key);
                window.location.href = "index.php";

            } else if(data.status == "Error") {
                if(user.status == "Error") {
                    alert(user.message);
                }
            }
  
        },      
        error: function(request, response, error) {
            console.log(response);
        }
    });

    return user;

}

    
function is_logged_in() {
    if(sessionStorage.getItem('user_id') === null && sessionStorage.getItem('api_key') === null) {
        return false;
    } 
    return true;
}
