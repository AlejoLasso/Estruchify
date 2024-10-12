function nombreEdad() {
    let nombre = prompt("Ingrese su nombre");
    let edad = parseInt(prompt("Ingrese su edad"));

  
    if (isNaN(edad)) {
        alert("Error: Ingresa una edad válida.");
    } else {
        alert("Hola " + nombre + " tienes " + edad + "  años, te interesaría adquirir tickects ? 🎟️'");
        if (edad >= 18) {
            alert("Puedes comprar");
        } else {
            alert("No puedes comprar");
        }
        
    
    }


    const span = document.getElementById("saludo");
    span.textContent = `Hola, ${nombre}`
    if (null === nombre){
        span.textContent = `Hola, usuario`
    }
}
   // while (nombre.length <3) {
      //  nombre = prompt("Tu nombre es muy corto")}



document.addEventListener('DOMContentLoaded', (event) => {
    const ticketsButton = document.getElementById('ticketsButton');

    ticketsButton.addEventListener('click', (event) => {

        event.preventDefault();

        alert("No quedan tiquets")

        ticketsButton.textContent = "No quedan tickets"

    })
})
window.onload = nombreEdad;
