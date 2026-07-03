// Smooth form action
document.querySelector(".form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.querySelector("input[type='text']").value;
  let phone = document.querySelector("input[type='tel']").value;
  let event = document.querySelectorAll("input[type='text']")[1].value;

  let message =
`Hello, I want to book DJ service:
Name: ${name}
Phone: ${phone}
Event: ${event}`;

  let url = "https://wa.me/916362919452?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});

// Animation effect
console.log("Humanmusic Premium Website Loaded");
