/* ==========================================
   ESTADO DEL JUEGO
========================================== */

let nivelActual = 0;
let puntos = 0;

let palabrasActuales = [];
let intervaloBurbujas = null;
let bloqueandoNivel = false;
/* ==========================================
   ELEMENTOS
========================================== */

const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("currentLevel");
const objectiveEl = document.getElementById("objectiveText");

/* ==========================================
   INICIAR FASE GRAVES
========================================== */

function iniciarFaseGraves() {
    tipoActual = "graves";
    nivelActual = 0;
    puntos = 0;
    iniciarVidas();
    cargarNivel(nivelesGraves[nivelActual], "graves");
}

/* ==========================================
   INICIAR ESDRÚJULAS
========================================== */

function iniciarFaseEsdrujulas() {
    tipoActual = "esdrujulas";
    nivelActual = 0;
    puntos = 0;
    iniciarVidas();
    cargarNivel(nivelesEsdrujulas[nivelActual], "esdrujulas");
}

/* ==========================================
   INICIAR ESDRÚJULAS FINAL
   (más difícil y rápido)
========================================== */

function iniciarFaseEsdrujulasFinal() {

    tipoActual = "sobreesdrujulas";

    nivelActual = 0;
    puntos = 0;

    iniciarVidas();

    cargarNivel(nivelesSobreesdrujulas[nivelActual], "sobreesdrujulas");
}

/* ==========================================
   CARGAR NIVEL
========================================== */

function cargarNivel(nivelConfig, tipo) {

    limpiarJuego();

    palabrasActuales = generarPalabrasNivel(tipo, nivelConfig);

    levelEl.textContent = nivelConfig.nombre;
    objectiveEl.textContent = nivelConfig.objetivo;

    intervaloBurbujas = setInterval(() => {

        generarBurbujaAleatoria(tipo, nivelConfig);

    }, CONFIG.tiempoEntreBurbujas);

}

/* ==========================================
   GENERAR BURBUJA
========================================== */

function generarBurbujaAleatoria(tipo, nivelConfig) {

    if (palabrasActuales.length === 0) return;

    const index = Math.floor(Math.random() * palabrasActuales.length);

    const palabra = palabrasActuales[index];

    crearBurbuja(palabra.texto, palabra.correcta);
}

function obtenerTipoActual() {
    return tipoActual;
}
function obtenerNivelActual() {

    if (tipoActual === "graves") return nivelesGraves[nivelActual];
    if (tipoActual === "esdrujulas") return nivelesEsdrujulas[nivelActual];
    if (tipoActual === "sobreesdrujulas") return nivelesSobreesdrujulas[nivelActual];
}

/* ==========================================
   CREAR BURBUJA
========================================== */

function crearBurbuja(texto, correcta) {

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    bubble.textContent = texto;

    bubble.dataset.correcta = correcta;

    bubble.style.left = Math.random() * 85 + "%";

    bubble.style.animationDuration =
        (Math.random() * 5 + 8) + "s";

    gameArea.appendChild(bubble);

    bubble.addEventListener("click", () => {

        manejarClick(bubble);
    });

    setTimeout(() => {

        bubble.remove();

    }, 15000);
}

/* ==========================================
   CLICK BURBUJA
========================================== */

function manejarClick(bubble) {

    const correcta = bubble.dataset.correcta === "true";

    bubble.remove();

    if (correcta) {

        sumarPuntos();

    } else {

        perderVida();
    }
}

/* ==========================================
   SUMAR PUNTOS
========================================== */

function sumarPuntos() {

    puntos++;
    scoreEl.textContent = puntos;

    verificarProgresoNivel();
}

function verificarProgresoNivel() {

    if (bloqueandoNivel) return;

    const nivelConfig = obtenerNivelActual();
    if (!nivelConfig) return;

    if (puntos >= nivelConfig.puntosNecesarios) {

        bloqueandoNivel = true;

        clearInterval(intervaloBurbujas);
        limpiarBurbujas();

        siguienteNivel(obtenerTipoActual());

        setTimeout(() => {
            bloqueandoNivel = false;
        }, 1500);
    }
}

/* ==========================================
   EVALUAR NIVEL
========================================== */

function evaluarNivel(tipo, nivelConfig) {

    if (puntos >= nivelConfig.puntosNecesarios) {

        clearInterval(intervaloBurbujas);

        limpiarBurbujas();

        siguienteNivel(tipo);
    }
}

/* ==========================================
   SIGUIENTE NIVEL
========================================== */

function siguienteNivel(tipo) {

    nivelActual++;

    mostrarTransicion("Nivel superado...");

    setTimeout(() => {

        if (tipo === "graves") {

            if (nivelActual < nivelesGraves.length) {

                cargarNivel(nivelesGraves[nivelActual], "graves");

            } else {

                completarGraves();
            }

        } else if (tipo === "esdrujulas") {

            if (nivelActual < nivelesEsdrujulas.length) {

                cargarNivel(nivelesEsdrujulas[nivelActual], "esdrujulas");

            } else {

                completarEsdrujulas();
            }

        } else if (tipo === "sobreesdrujulas") {

            if (nivelActual < nivelesSobreesdrujulas.length) {

                cargarNivel(nivelesSobreesdrujulas[nivelActual], "sobreesdrujulas");

            } else {

                mostrarTransicion("Has dominado el infierno final...");

                setTimeout(() => {
                    completarEsdrujulasFinal();
                }, CONFIG.tiempoTransicion);
            }
        }

    }, CONFIG.tiempoTransicion);
}

/* ==========================================
   REINICIAR NIVEL
========================================== */

function reiniciarNivel(tipo) {

   
}

/* ==========================================
   LIMPIAR JUEGO
========================================== */

function limpiarJuego() {

    clearInterval(intervaloBurbujas);

    limpiarBurbujas();

    gameArea.innerHTML = "";

    puntos = 0;

    scoreEl.textContent = 0;
}

/* ==========================================
   LIMPIAR BURBUJAS
========================================== */

function limpiarBurbujas() {

    document.querySelectorAll(".bubble")
        .forEach(b => b.remove());
}