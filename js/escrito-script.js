// Manejador del formulario
document.getElementById("noteForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real para manejar la redirección
    alert("¡Tu nota ha sido enviada con éxito!");
    window.location.href = "gracias.html"; // Redirige a gracias.html
});
