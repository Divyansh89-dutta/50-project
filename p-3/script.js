const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Add "show-nav" class when the "open" button is clicked
open.addEventListener("click", () => container.classList.add("show-nav"));

// Remove "show-nav" class when the "close" button is clicked
close.addEventListener("click", () => container.classList.remove("show-nav"));
