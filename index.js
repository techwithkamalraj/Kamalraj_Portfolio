// Dark mode

let darMode = document.getElementById("moon");
let body = document.body;

function toggleDarkMode() {
    body.style.backgroundColor = body.style.backgroundColor === "white" ? "#121D25" : "white";
    body.style.color = body.style.color === "black" ? "white" : "black";
}

darMode.addEventListener("click", toggleDarkMode);
darMode.addEventListener('click', toggleDarkMode);


