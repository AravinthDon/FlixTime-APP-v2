
$(document).ready( () => {

    //$("message").hide();


    $("#signinForm").submit((e) => {
        let username = $("#username").val();
        let password = $("#password").val();

        let user = signin(username, password);
        e.preventDefault();
    });
});

/**
 * Attempt sign in 
 * @param {*} username 
 * @param {*} password 
 */
function signin(username, password) {
    
    let user = {};
    
    var formData = {
        username: username,
        password: password,
      };
    // data.set('username', username);
    // data.set('password', password);

    $.ajax({
        method: "POST",
        url: "http://aravichandiran01.lampt.eeecs.qub.ac.uk/flixtime/api/user/login.php",
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
                console.log(data);
                $("#message").empty();
                $("#message").append(`<p>${data.message}</p>`);
                //alert(data.message);
            }
  
        },      
        error: function(request, response, error) {
            console.log(response);
        }
    });

    return user;

}