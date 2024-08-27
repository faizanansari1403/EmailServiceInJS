//script.js

function SendMail() {
    var params = {
        from_name : document.getElementById("full_name").value, 
        email_id : document.getElementById("email_id").value, 
        message : document.getElementById("message").value
    }
    emailjs.send("service_gfa1tnh", "template_tsa8hdo", params).then(function (res) {
        alert("Success! " + res.status);
    })
}