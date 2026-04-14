// Función para activar la música
function activarMusica() {
  const musica = document.getElementById("musicaBoda");

  if (musica.paused) {
    musica
      .play()
      .then(() => {
        console.log("Reproducción iniciada con éxito");
        // Una vez que suena, quitamos los escuchadores para siempre
        removerEventos();
      })
      .catch((error) => {
        console.log("El navegador aún bloquea el audio: ", error);
      });
  }
}

// Quitamos los eventos para no saturar el navegador
/*
function removerEventos() {
  window.removeEventListener("scroll", activarMusica);
  window.removeEventListener("click", activarMusica);
  window.removeEventListener("touchstart", activarMusica);
}

// Escuchamos scroll, clic o toque en el celular
window.addEventListener("scroll", activarMusica);
window.addEventListener("click", activarMusica);
window.addEventListener("touchstart", activarMusica);
*/

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {

  Swal.fire({
  title: "¿Estas lista?",
  icon: "question",
  confirmButtonColor: "#3085d6",
  confirmButtonText: "Sí, estoy lista!",
  // LAS PROPIEDADES CRÍTICAS:
  allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
  allowEscapeKey: false,    // Evita que se cierre con la tecla Esc
  allowEnterKey: true,      // Permite que el usuario use 'Enter' para entrar
}).then((result) => {
  if (result.isConfirmed) {
    activarMusica();
  }
});

  const musica = document.getElementById("musicaBoda");
  // Configurar un temporizador de 5000 milisegundos (5 segundos)
  setTimeout(function () {
    const loader = document.querySelector(".loader-container");
    const contenido = document.querySelector(".contenido-invitacion");

    if (loader) {
      // Añadimos una transición suave en lugar de borrarlo de golpe
      loader.style.transition = "opacity 1s ease";
      loader.style.opacity = "0";

      // Después de que termine la animación de opacidad (1s), lo quitamos del diseño
      setTimeout(() => {
        loader.style.display = "none";

        // Mostramos el contenido de la invitación
        if (contenido) {
          contenido.style.display = "block";
          musica.play().catch((error) => {
            console.log(
              "El navegador bloqueó el autoplay. Se requiere interacción.",
            );
          });
          contenido.style.opacity = "0";
          // Aparece suavemente la invitación
          setTimeout(() => (contenido.style.opacity = "1"), 50);
        }
      }, 1000);
    }
  }, 3000);
});
