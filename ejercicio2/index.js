const message = document.querySelector("#message");
const form = document.querySelector("#form");

if(message.length === undefined) {
    message.style.display = "none";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let salary = form.salary.value;

    if(salary >= 10000 && salary <= 500000) {
        alert("Formulario Enviado Correctamente");
        message.innerHTML = "Formulario Enviado Correctamente";
        message.style.borderColor = "green";
        message.style.display = "block";
    } else {
        message.style.borderColor = "red";
        message.innerHTML = "Error Al Enviar El Formulario!";
        message.style.display = "block";
        console.error("Error Al Enviar El Formulario!");
    }
    
})