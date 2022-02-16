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

let preguntas = [
  {
    id: 1,
    pregunta: "¿Cuáles de los siguientes tipos de datos no es primitivo?",
    opciones: ["String", "Array", "Boolean"],
    correcta: "Array",
  },
  {
    id: 2,
    pregunta: "¿Cuál de las siguientes opciones es un bucle?",
    opciones: ["for", "if/else", "switch"],
    correcta: "for",
  },
  {
    id: 3,
    pregunta: "¿Cual de las siguientes opciones es una función expresada ?",
    opciones: [
      "function nombre () {}",
      "() => {}",
      "let nombre = function () {}",
    ],
    correcta: "let nombre = function () {}",
  },
  {
    id: 4,
    pregunta:
      "Para concatenar cadenas de caracteres en Javascript se usa el carácter:",
    opciones: ["& (ampersand)", "+ (más)", ". (punto)"],
    correcta: "+ (más)",
  },
  {
    id: 5,
    pregunta: "La llamada al código Javascript debe colocarse en:",
    opciones: [
      "La sección Body de la página",
      "Antes de la etiqueta HTML",
      "Depende, en la sección Head o en Body",
    ],
    correcta: "Depende, en la sección Head o en Body",
  },
];

const pintarPreguntas = function (turno) {
  $numeroPregunta.textContent = preguntas[turno - 1].id;

  $contenedorPregunta.textContent = preguntas[turno - 1].pregunta;

  $contenedorRespuestas.forEach((el, i) => {
    el.querySelector(".respuesta-literal").textContent =
      preguntas[turno - 1].opciones[i];
  });
};

let contador = 1;
let puntaje = 0;

d.addEventListener("click", (e) => {
  /* Boton iniciar o reiniciar */

  if (e.target.matches("#btn-iniciar")) {
    if (contador === 6) {
      contador = 1;
      puntaje = 0;
    }
    if (contador === 1) {
      pintarPreguntas(contador);
    }
    $cuerpoJuego.classList.add("activo");
  }

  if (e.target.matches("#btn-salir")) {
    w.close();
  }

  /* Boton Continuar- Validacion*/

  if (
    e.target.matches("#btn-continuar") &&
    d.querySelector("[data-estado]") === null
  ) {
    d.querySelector(".aviso-btn-continuar").classList.remove("oculto");
    setTimeout(() => {
      d.querySelector(".aviso-btn-continuar").classList.add("oculto");
    }, 1500);
  }

  /* Boton Continuar- Cambio de preguntas*/

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

    if (contador === 2) {
      pintarPreguntas(contador);
    }
    if (contador === 3) {
      pintarPreguntas(contador);
    }
    if (contador === 4) {
      pintarPreguntas(contador);
    }
    if (contador === 5) {
      pintarPreguntas(contador);
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

  /*Validaciones Preguntas - opcion seleccionada */

  if (
    e.target.matches(".contenedor-respuestas *") &&
    d.querySelector("[data-estado]") === null
  ) {
    setTimeout(() => {
      // if (puntaje < 0) puntaje = 0;
      $puntaje.classList.remove("oculto");
      $puntaje.textContent = `Puntaje Actual: ${puntaje} pts`;
    }, 0);

    if (e.target.parentElement.matches(".contenedor-respuestas")) {
      if (
        contador === 1 ||
        contador === 2 ||
        contador === 3 ||
        contador === 4 ||
        contador === 5
      ) {
        if (
          e.target.parentElement.querySelector(".respuesta-literal")
            .textContent === preguntas[contador - 1].correcta
        ) {
          puntaje += 10;
          e.target.parentElement.dataset.estado = "presionado";

          e.target.parentElement
            .querySelector(".respuesta-true.oculto")
            .classList.remove("oculto");
          e.target.parentElement
            .querySelector(".opcion-respuesta")
            .classList.add("true");
        } else {
          e.target.parentElement.dataset.estado = "presionado";

          e.target.parentElement
            .querySelector(".respuesta-false.oculto")
            .classList.remove("oculto");
          e.target.parentElement
            .querySelector(".opcion-respuesta")
            .classList.add("false");

          $contenedorRespuestas.forEach((el) => {
            if (
              el.querySelector(".respuesta-literal").textContent ===
              preguntas[contador - 1].correcta
            ) {
              el.querySelector(".respuesta-true.oculto").classList.remove(
                "oculto"
              );
              el.querySelector(".opcion-respuesta").classList.add("true");
            }
          });
        }
      }
    }
  }
});
