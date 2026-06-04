/* ==========================================
   ESTADO HISTORIA
========================================== */

let paginaActual = 0;
let faseActual = GAME_PHASES.HISTORIA_1;

/* ==========================================
   ELEMENTOS DOM
========================================== */

const mangaImage = document.getElementById("mangaImage");
const pageCounter = document.getElementById("pageCounter");
const chapterTitle = document.getElementById("chapterTitle");

const modal = document.getElementById("storyModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalBtn = document.getElementById("modalBtn");

/* ==========================================
   INICIAR HISTORIA
========================================== */

function iniciarHistoria() {

    faseActual = GAME_PHASES.HISTORIA_1;
    paginaActual = 0;

    mostrarPantalla("storyScreen");
    actualizarPagina();
}

/* ==========================================
   ACTUALIZAR PÁGINA
========================================== */

function actualizarPagina() {

    mangaImage.src = paginasHistoria[paginaActual];
    pageCounter.textContent = `Página ${paginaActual + 1}`;

    actualizarTitulo();
}

/* ==========================================
   TÍTULO SEGÚN FASE
========================================== */

function actualizarTitulo() {

    switch (faseActual) {

        case GAME_PHASES.HISTORIA_1:
            chapterTitle.textContent = "Capítulo I - El Susurro";
            break;

        case GAME_PHASES.HISTORIA_2:
            chapterTitle.textContent = "Capítulo II - La Maldición";
            break;

        case GAME_PHASES.HISTORIA_3:
            chapterTitle.textContent = "Capítulo III - El Origen";
            break;

        case GAME_PHASES.FINAL:
            chapterTitle.textContent = "Capítulo Final";
            break;
    }
}




/* ==========================================
   SIGUIENTE PÁGINA
========================================== */

function siguientePagina() {

    /* =====================
       HISTORIA 1 (0-2)
    ===================== */

    if (faseActual === GAME_PHASES.HISTORIA_1) {

        if (paginaActual < 2) {
            paginaActual++;
            actualizarPagina();
        } else {
            mostrarModalAgudas();
            
        }

        return;
    }

    /* =====================
       HISTORIA 2 (3-5)
    ===================== */

    if (faseActual === GAME_PHASES.HISTORIA_2) {

        if (paginaActual < 5) {
            paginaActual++;
            actualizarPagina();
        } else {
            mostrarModalGraves();
            
        }

        return;
    }

    /* =====================
       HISTORIA 3 (6-7)
    ===================== */

    if (faseActual === GAME_PHASES.HISTORIA_3) {

        if (paginaActual < 7) {
            paginaActual++;
            actualizarPagina();
        } else {
            mostrarModalEsdrujulas();
           // mostrarModalEsdrujulasFinal();
        }

        return;
    }

    /* =====================
       FINAL
    ===================== */

    if (faseActual === GAME_PHASES.FINAL) {

        if (paginaActual < paginasHistoria.length - 1) {
            paginaActual++;
            actualizarPagina();
        } else {
            mostrarPantalla("finalScreen");
        }

        return;
    }
}

/* ==========================================
   PÁGINA ANTERIOR
========================================== */

function paginaAnterior() {

    let minimo = 0;

    if (faseActual === GAME_PHASES.HISTORIA_2) minimo = 3;
    if (faseActual === GAME_PHASES.HISTORIA_3) minimo = 6;
    if (faseActual === GAME_PHASES.FINAL) minimo = 8;

    if (paginaActual > minimo) {
        paginaActual--;
        actualizarPagina();
    }
}


/* ==========================================
   MODAL AGUDAS
========================================== */


function mostrarModalAgudas() {

    modal.classList.remove("hidden");

    modalTitle.textContent =
        "Desafío: Palabras Agudas";

    modalText.textContent =
        "Para avanzar deberás identificar correctamente las palabras agudas.";

    modalBtn.onclick = () => {

        cerrarModal();
        mostrarTransicion("Entrando en la maldición...");

        setTimeout(() => {

            mostrarPantalla("gameScreen");
            iniciarFaseAgudas();

        }, 1200);
    };
}


/* ==========================================
   MODAL GRAVES
========================================== */

function mostrarModalGraves() {

    modal.classList.remove("hidden");

    modalTitle.textContent = "Desafío: Palabras Graves";
    modalText.textContent = mensajesHistoria.inicio;

    modalBtn.onclick = () => {

        cerrarModal();

        mostrarTransicion("Entrando en la maldición...");

        setTimeout(() => {

            mostrarPantalla("gameScreen");
            iniciarFaseGraves();

        }, 1200);
    };
}

/* ==========================================
   MODAL ESDRÚJULAS
========================================== */

function mostrarModalEsdrujulas() {

    modal.classList.remove("hidden");

    modalTitle.textContent = "Desafío: Palabras Esdrújulas";
    modalText.textContent = mensajesHistoria.segundaParte;

    modalBtn.onclick = () => {

        cerrarModal();

        mostrarPantalla("gameScreen");

        iniciarFaseEsdrujulas();
    };
}

/* ==========================================
   MODAL ESDRÚJULAS FINAL
========================================== */

function mostrarModalEsdrujulasFinal() {

    modal.classList.remove("hidden");

    modalTitle.textContent = "El Juicio Final";
    modalText.textContent =
        "La oscuridad se intensifica... solo las palabras correctas sobrevivirán.";

    modalBtn.onclick = () => {

        cerrarModal();

        mostrarPantalla("gameScreen"); // 🔥 ESTO FALTABA

        iniciarFaseEsdrujulasFinal();
    };
}

/* ==========================================
   HISTORIA 2
========================================== */

function iniciarHistoria2() {

    faseActual = GAME_PHASES.HISTORIA_2;
    paginaActual = 3;

    mostrarPantalla("storyScreen");
    actualizarPagina();
}

/* ==========================================
   HISTORIA 3
========================================== */

function iniciarHistoria3() {

    faseActual = GAME_PHASES.HISTORIA_3;
    paginaActual = 6;

    mostrarPantalla("storyScreen");
    actualizarPagina();
}

/* ==========================================
   HISTORIA FINAL
========================================== */

function iniciarHistoriaFinal() {

    faseActual = GAME_PHASES.FINAL;
    paginaActual = 8;

    mostrarPantalla("storyScreen");
    actualizarPagina();
}



/* ==========================================
   COMPLETAR AGUDAS
========================================== */


function completarAgudas() {

    mostrarTransicion(
        "Has sobrevivido al primer horror..."
    );

    setTimeout(() => {

        iniciarHistoria2();

    }, CONFIG.tiempoTransicion);
}


/* ==========================================
   COMPLETAR GRAVES
========================================== */

function completarGraves() {

    mostrarTransicion("Has sobrevivido al segundo horror...");

    setTimeout(() => {
        iniciarHistoria3();
    }, CONFIG.tiempoTransicion);
}

/* ==========================================
   COMPLETAR ESDRÚJULAS
========================================== */

function completarEsdrujulas() {

    mostrarTransicion("La maldición se profundiza...");

    setTimeout(() => {
        iniciarHistoriaFinal();
    }, CONFIG.tiempoTransicion);
}

/* ==========================================
   COMPLETAR ESDRÚJULAS FINAL
========================================== */

function completarEsdrujulasFinal() {

    mostrarTransicion("Todo se revela...");

    setTimeout(() => {
        iniciarHistoriaFinal();
    }, CONFIG.tiempoTransicion);
}

/* ==========================================
   MODAL FINAL
========================================== */

function mostrarModalFinal() {

    modal.classList.remove("hidden");

    modalTitle.textContent = "La Verdad";
    modalText.textContent = mensajesHistoria.final;

    modalBtn.onclick = () => {
        cerrarModal();
        mostrarPantalla("finalScreen");
    };
}

/* ==========================================
   CERRAR MODAL
========================================== */

function cerrarModal() {
    modal.classList.add("hidden");
}

/* ==========================================
   TRANSICIÓN
========================================== */

function mostrarTransicion(texto) {

    const overlay = document.getElementById("transitionOverlay");
    const transitionText = document.getElementById("transitionText");

    transitionText.textContent = texto;

    overlay.classList.remove("hidden");

    setTimeout(() => {
        overlay.classList.add("hidden");
    }, CONFIG.tiempoTransicion);
}

/* ==========================================
   EVENTOS
========================================== */

document.getElementById("nextPageBtn")
    .addEventListener("click", siguientePagina);

document.getElementById("prevPageBtn")
    .addEventListener("click", paginaAnterior);

/* ==========================================
   REINICIO
========================================== */

function reiniciarHistoria() {

    paginaActual = 0;
    faseActual = GAME_PHASES.HISTORIA_1;

    iniciarHistoria();
}