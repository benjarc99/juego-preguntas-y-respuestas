const d = document,
  w = window;

const $cuerpoJuego = d.querySelector(".contenedor-cuerpo-juego"),
  $numeroPregunta = d.querySelector(".numero-pregunta"),
  $contenedorPregunta = d.querySelector(".contenedor-pregunta"),
  $contenedorRespuestas = d.querySelectorAll(".contenedor-respuestas"),
  $opcion1 = d.querySelector("#opcion-1"),
  $opcion2 = d.querySelector("#opcion-2"),
  $opcion3 = d.querySelector("#opcion-3"),
  $puntaje = d.querySelector(".puntaje");

const modeloPreguntas = function (id, pregunta, respuestas) {
  let { opcion1, opcion2, opcion3 } = respuestas;

  $numeroPregunta.textContent = id;

  $contenedorPregunta.textContent = pregunta;

  d.querySelector("#opcion-1 .respuesta-literal").textContent = opcion1;
  d.querySelector("#opcion-2 .respuesta-literal").textContent = opcion2;
  d.querySelector("#opcion-3 .respuesta-literal").textContent = opcion3;
};

let puntaje = 0;
let contador = 1;

d.addEventListener("click", (e) => {
  /* Boton Iniciar y Salir */
  if (e.target.matches("#btn-iniciar")) {
    if (contador === 6) {
      contador = 1;
      puntaje = 0;
    }
    if (contador === 1) {
      modeloPreguntas(
        "1",
        "¿Cuáles de los siguientes tipos de datos no es primitivo?",
        {
          opcion1: "String",
          opcion2: "Array",
          opcion3: "Boolean",
        }
      );
    }
    $cuerpoJuego.classList.add("activo");
  }
  if (e.target.matches("#btn-salir")) {
    w.close();
  }

  /* Botones-opciones Pregunta 1 - Verificacion*/
  if (
    e.target.matches(".contenedor-respuestas *") &&
    d.querySelector("[data-estado]") === null
  ) {
    setTimeout(() => {
      // if (puntaje < 0) puntaje = 0;
      $puntaje.classList.remove("oculto");
      $puntaje.textContent = `Puntaje Actual: ${puntaje} pts`;
    }, 0);

    if (contador === 1) {
      if (e.target.matches("#opcion-1 *")) {
        $opcion1.dataset.estado = "presionado";

        $opcion1
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("false");

        $opcion2
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-2 *")) {
        puntaje += 10;
        $opcion2.dataset.estado = "presionado";

        $opcion2
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-3 *")) {
        $opcion3.dataset.estado = "presionado";

        $opcion3
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("false");

        $opcion2
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("true");
      }
    }

    /* Botones-opciones Pregunta 2- Verificacion*/
    if (contador === 2) {
      if (e.target.matches("#opcion-1 *")) {
        puntaje += 10;
        $opcion1.dataset.estado = "presionado";

        $opcion1
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-2 *")) {
        $opcion2.dataset.estado = "presionado";

        $opcion2
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("false");

        $opcion1
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-3 *")) {
        $opcion3.dataset.estado = "presionado";

        $opcion3
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("false");

        $opcion1
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("true");
      }
    }

    /* Botones-opciones Pregunta 3- Verificacion*/
    if (contador === 3) {
      if (e.target.matches("#opcion-1 *")) {
        $opcion1.dataset.estado = "presionado";

        $opcion1
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("false");

        $opcion3
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-2 *")) {
        $opcion2.dataset.estado = "presionado";

        $opcion2
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("false");

        $opcion3
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-3 *")) {
        puntaje += 10;
        $opcion3.dataset.estado = "presionado";

        $opcion3
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("true");
      }
    }

    /* Botones-opciones Pregunta 4- Verificacion*/
    if (contador === 4) {
      if (e.target.matches("#opcion-1 *")) {
        $opcion1.dataset.estado = "presionado";

        $opcion1
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("false");

        $opcion2
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-2 *")) {
        puntaje += 10;
        $opcion2.dataset.estado = "presionado";

        $opcion2
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-3 *")) {
        $opcion3.dataset.estado = "presionado";

        $opcion3
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("false");

        $opcion2
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("true");
      }
    }

    /* Botones-opciones Pregunta 5- Verificacion*/
    if (contador === 5) {
      if (e.target.matches("#opcion-1 *")) {
        $opcion1.dataset.estado = "presionado";

        $opcion1
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion1.querySelector(".opcion-respuesta").classList.add("false");

        $opcion3
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-2 *")) {
        $opcion2.dataset.estado = "presionado";

        $opcion2
          .querySelector(".respuesta-false.oculto")
          .classList.remove("oculto");
        $opcion2.querySelector(".opcion-respuesta").classList.add("false");

        $opcion3
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("true");
      }
      if (e.target.matches("#opcion-3 *")) {
        puntaje += 10;
        $opcion3.dataset.estado = "presionado";

        $opcion3
          .querySelector(".respuesta-true.oculto")
          .classList.remove("oculto");
        $opcion3.querySelector(".opcion-respuesta").classList.add("true");
      }
    }
  }

  /* Boton Continuar- Cambio de preguntas*/

  if (
    e.target.matches("#btn-continuar") &&
    d.querySelector("[data-estado]") === null
  ) {
    d.querySelector(".aviso-btn-continuar").classList.remove("oculto");
    setTimeout(() => {
      d.querySelector(".aviso-btn-continuar").classList.add("oculto");
    }, 1500);
  }

  if (
    e.target.matches("#btn-continuar") &&
    d.querySelector("[data-estado]") !== null
  ) {
    $puntaje.classList.add("oculto");

    $contenedorRespuestas.forEach((el) => {
      el.removeAttribute("data-estado");
      el.querySelectorAll("span").forEach((elem) =>
        elem.classList.add("oculto")
      );
      el.querySelector(".opcion-respuesta").classList.remove("true");
      el.querySelector(".opcion-respuesta").classList.remove("false");
    });

    contador++;

    if (contador === 1) {
    }

    if (contador === 2) {
      modeloPreguntas("2", "¿Cuál de las siguientes opciones es un bucle?", {
        opcion1: "for",
        opcion2: "if/else",
        opcion3: "switch",
      });
    }
    if (contador === 3) {
      modeloPreguntas(
        "3",
        "¿Cual de las siguientes opciones es una función expresada ?",
        {
          opcion1: "function nombre () {}",
          opcion2: "() => {}",
          opcion3: "let nombre = function () {}",
        }
      );
    }
    if (contador === 4) {
      modeloPreguntas(
        "4",
        "Para concatenar cadenas de caracteres en Javascript se usa el carácter:",
        {
          opcion1: "& (ampersand)",
          opcion2: "+ (más)",
          opcion3: ". (punto)",
        }
      );
    }
    if (contador === 5) {
      modeloPreguntas(
        "5",
        "La llamada al código Javascript debe colocarse en:",
        {
          opcion1: "La sección Body de la página",
          opcion2: "Antes de la etiqueta HTML",
          opcion3: "Depende, en la sección Head o en Body",
        }
      );
    }
    if (contador === 6) {
      $cuerpoJuego.classList.remove("activo");
      if (d.querySelector("h1") !== null) {
        d.querySelector("h1").outerHTML = `
      <p>
      🟡El juego ha terminado.
      <br>
      <br>
      🔵Tu <u>Puntaje Final</u> es: <br> <u>${puntaje} puntos</u> de 50.
      </p>
      `;
      } else {
        d.querySelector("p").outerHTML = `
      <p>
      🟡El juego ha terminado.
      <br>
      <br>
      🔵Tu <u>Puntaje Final</u> es: <br> <u>${puntaje} puntos</u> de 50.
      </p>
      `;
      }
      d.getElementById("btn-iniciar").textContent = "Reiniciar";
    }
  }
});
