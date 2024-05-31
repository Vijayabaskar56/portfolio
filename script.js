function type() {
  let name1 = "VIJAYA BASKAR";
  let namearr = name1.split("");

  function looping() {
    if (namearr.length > 0) {
      let n = namearr.shift();
      document.querySelector("#heading--main").innerHTML += n;
    } else {
      deleting();
      return false;
    }
    setTimeout(looping, 500);
  }

  looping();
}

function deleting() {
  nameDarr = document.querySelector("#heading--main").innerHTML.split("");
  if (nameDarr.length > 0) {
    nameDarr.pop();
    document.querySelector("#heading--main").innerHTML = nameDarr.join("");
  } else {
    type();
    return false;
  }
  setTimeout(deleting, 150);
}

type();

square.forEach((a) => observer.observe(a));

//light dark theme
let dayN = document.querySelector("#day-night");
dayN.addEventListener("click", alter);
function alter() {
  if (dayN.querySelector("i").classList.contains("fa-sun")) {
    dayN.innerHTML = '<i class="fas fa-moon"></i>';
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  } else {
    dayN.innerHTML = '<i class="fas fa-sun"></i>';
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  }
}

//cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.classList.add("active");
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 20) + "px;left: " + (e.pageX - 20) + "px"
  );
});

let element = document.querySelectorAll("button,a");

element.forEach((a) =>
  a.addEventListener("mouseover", function (event) {
    cursor.classList.add("red");
  })
);

element.forEach((a) =>
  a.addEventListener("mouseout", function (event) {
    cursor.classList.remove("red");
  })
);

element.forEach((a) =>
  a.addEventListener("clikc", (e) => {
    e.preventDefault();
  })
);

// form submission

emailjs.init("5whAoyRT_fKNTIC-x");

document.getElementById("submit-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const alert = document.querySelector("#alert");
  const alertempty = document.querySelector("#alertempty");

  if (name.value != "" && email.value != "" && message.value != "") {
    emailjs
      .send("service_zdzgfkl", "template_6a00fcm", {
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
    alertempty.classList.toggle("alertempty-hidden" ? "alertempty-show" : null);
    setTimeout(() => {
      alertempty.classList.toggle(
        "alertempty-show" ? "alertempty-hidden" : null
      );
    }, 3000);
  }
});

// scroll to the top button
function topFunction() {
  window.scroll({ top: 0, behavior: "smooth" });
}
