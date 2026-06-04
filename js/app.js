/* ==========================================
   INICIALIZACIÓN GENERAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    configurarBotones();
    mostrarPantalla("startScreen");

});

/* ==========================================
   MOSTRAR PANTALLA
========================================== */

function mostrarPantalla(id) {

    document.querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.add("active");
    }
}

/* ==========================================
   CONFIGURAR BOTONES
========================================== */

function configurarBotones() {

    /* INICIO HISTORIA */
    document.getElementById("startBtn")
        .addEventListener("click", () => {

            reproducirAmbiente();
            mostrarPantalla("instructionsScreen");
        });

    /* CONTINUAR INSTRUCCIONES */
    document.getElementById("continueBtn")
        .addEventListener("click", () => {

            iniciarHistoria();
        });

    /* CONTINUAR HISTORIA FINAL DESDE GAME OVER */
    document.getElementById("restartBtn")
        .addEventListener("click", () => {

            reiniciarTodo();
        });

    /* CONTINUAR DESPUÉS DE VICTORIA */
    document.getElementById("continueStoryBtn")
        .addEventListener("click", () => {

            mostrarPantalla("storyScreen");
            iniciarHistoriaFinal();
        });

    /* VOLVER A JUGAR FINAL */
    document.getElementById("playAgainBtn")
        .addEventListener("click", () => {

            reiniciarTodo();
        });
}

/* ==========================================
   REINICIAR TODO EL JUEGO
========================================== */

function reiniciarTodo() {

    paginaActual = 0;
    faseActual = GAME_PHASES.HISTORIA_1;

    nivelActual = 0;
    puntos = 0;

    restaurarVidas();

    limpiarJuego();

    mostrarPantalla("startScreen");
}

/* ==========================================
   AUDIO AMBIENTE
========================================== */

function reproducirAmbiente() {

    const audio = document.getElementById("ambientAudio");

    if (audio) {

        audio.volume = 0.4;

        audio.play().catch(() => {
            console.log("Autoplay bloqueado por el navegador");
        });
    }
}

/* ==========================================
   EFECTO CLICK SONIDO (opcional futuro)
========================================== */

function clickSound() {

    const audio = new Audio("./sounds/silent.mp3");

    audio.volume = 0.3;

    audio.play();
}

/* ==========================================
   ERROR GLOBAL HANDLER
========================================== */

window.addEventListener("error", (e) => {

    console.log("Error capturado:", e.message);

});


/* ==========================================
   PISTAS POR NIVEL
========================================== */

function mostrarPista() {

    let info;

    switch (faseActual) {

        case GAME_PHASES.AGUDAS:
            info = pistas.agudas;
            break;

        case GAME_PHASES.GRAVES:
            info = pistas.graves;
            break;

        case GAME_PHASES.ESDRUJULAS:
            info = pistas.esdrujulas;
            break;

        case GAME_PHASES.SOBREEESDRUJULAS:
            info = pistas.sobreesdrujulas;
            break;

        default:
            return;
    }

    hintTitle.textContent = info.titulo;
    hintText.textContent = info.texto;

    hintModal.classList.remove("hidden");
}

const hintBtn = document.getElementById("hintBtn");
const hintModal = document.getElementById("hintModal");
const hintTitle = document.getElementById("hintTitle");
const hintText = document.getElementById("hintText");
const closeHintBtn = document.getElementById("closeHintBtn");

hintBtn.addEventListener("click", mostrarPista);

closeHintBtn.addEventListener("click", () => {
    hintModal.classList.add("hidden");
    

});