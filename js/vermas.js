document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let boton = document.querySelector(".boton-js");
    document.getElementById("botonVerMas").addEventListener("click", () => {
        boton.classList.toggle("show");
    });
});