/* Sending Email from Contact Section */
(function () {
    emailjs.init("user_r-J6ZmWcVitGBrEqp");
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

        emailjs.send('service_i3vwd2s', 'template_fc5cmnu', contactParams).then(function (res) {alert("Success!"+ res.status);})
}
