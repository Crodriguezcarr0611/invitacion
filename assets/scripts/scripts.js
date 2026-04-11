    // Esperar a que el DOM esté listo
    document.addEventListener("DOMContentLoaded", function () {
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
                contenido.style.opacity = "0";
                // Aparece suavemente la invitación
                setTimeout(() => (contenido.style.opacity = "1"), 50);
              }
            }, 1000);
          }
        }, 5000); 
    });