
emailjs.init("service_pu84c3i");

document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const alert = document.querySelector("#alert");
    const alertempty = document.querySelector("#alertempty");

    if (name.value != "" && email.value != "" && message.value != "") {
      emailjs.send("service_zdzgfkl", "template_6a00fcm", {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
        })
        .then(
          function (response) {
            console.log("Email sent:", response);
            name.value = " ";
            email.value = " ";
            message.value = " ";

            alert.classList.toggle("alert-hidden" ? "alert-show" : null);
            setTimeout(() => {
              alert.classList.add("alert-show" ? "alert-hidden" : null);
            }, 3000);
          },
          function (error) {
            console.log("Email error:", error);
            alert("Email could not be sent. Please try again later.");
          }
        );
    } else {
      alertempty.classList.toggle(
        "alertempty-hidden" ? "alertempty-show" : null
      );
      setTimeout(() => {
        alertempty.classList.toggle(
          "alertempty-show" ? "alertempty-hidden" : null
        );
      }, 3000);
    }
  });
