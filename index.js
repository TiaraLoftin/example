/* Sending Email from Contact Section */
(function () {
    emailjs.init("r-J6ZmWcVitGBrEqp");
})();

function sendmail() {
    let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = document.getElementById("message").value;

        var contactParams = {
            from_name: fullName,
            email_to: userEmail,
            message: userMessage
        };

        emailjs.send('service_2hy6l8j', 'template_fc5cmnu', contactParams).then(function (res) {alert("Success!"+ res.status);})
}
