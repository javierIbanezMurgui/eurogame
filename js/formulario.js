
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");


    form.addEventListener("submit", function(event) {

        if (!confirm("¿Deseas enviar el formulario?")) {
            event.preventDefault();
        }
    });
});

    // modo oscuro
    const toggle = document.getElementById("toggle-theme");
    if(toggle){
        toggle.addEventListener("click", function(){
            document.body.classList.toggle("dark");
        });
    };
