// Reproducir música cuando se presione el botón de música
document.getElementById('musicButton')?.addEventListener('click', () => {
    const audio = new Audio('assets/musica.mp3');
    audio.play();
});

// Función para la cuenta regresiva
function updateCountdown() {
    const eventDate = new Date("November 16, 2024 13:30:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡Feliz Cumpleaños!";
    }
}

// Actualizar cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);




// FIESTA //

function agendarEvento() {
    alert("Evento agregado a tu agenda.");
}

function agendarEvento() {
    const title = encodeURIComponent("Cumpleaños de Florencia");
    const description = encodeURIComponent("¡Únete a la celebración del cumpleaños de Florencia! Una fiesta llena de alegría y emoción.");
    const location = encodeURIComponent("Barrio Isla Malvina Mza E casa 5");
    const startDate = "20241119T133000"; // Fecha y hora de inicio en formato YYYYMMDDTHHMMSS
    const endDate = "20241119T153000"; // Fecha y hora de fin en formato YYYYMMDDTHHMMSS

    // Crear la URL para Google Calendar
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${description}&location=${location}&sf=true&output=xml`;

    // Abrir en una nueva ventana
    window.open(calendarUrl, "_blank");
}


function confirmarAsistencia() {
    alert("Gracias por confirmar tu asistencia.");
}

function confirmarAsistencia() {
    const phoneNumber = "+543874883725"; // Número de WhatsApp
    const message = encodeURIComponent("Hola Natali, Quiero confirmar mi asistencia a la fiesta de tu mami, Muchas Gracias"); // Mensaje de confirmación
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Abrir en una nueva ventana o pestaña
    window.open(whatsappUrl, "_blank");
}


function comoLlegar() {
    alert("Mostrando instrucciones para llegar.");
}

function comoLlegar() {
    const mapsUrl = "https://maps.app.goo.gl/zNYryiEhDfdLmSPfA";
    window.open(mapsUrl, "_blank");
}




// FLORAL //


document.addEventListener("scroll", function() {
    const eventoDetalle = document.querySelector(".evento-detalle");
    const imagenAnimada = document.querySelector(".imagen-animada");
    const posicion = eventoDetalle.getBoundingClientRect().top;

    // Verificar si la sección es visible en el viewport
    if (posicion < window.innerHeight && posicion > 0) {
        imagenAnimada.classList.add("visible");
    }
});



// LINEAS //

document.addEventListener("DOMContentLoaded", function () {
    const decorativeLines = document.querySelector(".decorative-lines");

    function handleScroll() {
        const sectionPosition = decorativeLines.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            decorativeLines.style.opacity = "1";
            decorativeLines.style.transform = "translateY(0)";
        } else {
            decorativeLines.style.opacity = "0";
            decorativeLines.style.transform = "translateY(20px)";
        }
    }

    window.addEventListener("scroll", handleScroll);
});


// FLORAL DERECHA
document.addEventListener("scroll", function() {
    const eventoDetalle = document.querySelector(".evento-detalle");
    const imagenAnimadaDerecha = document.querySelector(".imagen-animada-derecha");
    const posicion = eventoDetalle.getBoundingClientRect().top;

    // Verificar si la sección es visible en el viewport
    if (posicion < window.innerHeight && posicion > 0) {
        imagenAnimadaDerecha.classList.add("visible");
    }
});


